# 08 — Follow-ups outside the codebase (Cloudflare dashboard + product)

Phase 1 doesn't touch Cloudflare settings. Each item below needs you to act in the dashboard. Evidence is in `09_verification.md`.

## Cloudflare — do in the dashboard

| # | Item | Why (VERIFIED) | What to do |
|---|---|---|---|
| CF-1 | **`www.dqstore.in` returns HTTP 522** | The DNS record is proxied, but `www` isn't a custom domain of Pages project `dq-web` (domains: `dq-web-18s.pages.dev`, `dqstore.in`). | Choose one: **(a)** Pages → `dq-web` → *Custom domains* → *Set up a domain* → `www.dqstore.in`, then add a Redirect Rule `www` → apex; or **(b)** keep the proxied `www` record and add a *Rules → Redirect Rules* entry: `http.host eq "www.dqstore.in"` → `https://dqstore.in${http.request.uri.path}` (301, preserve query string). Then confirm `curl -I https://www.dqstore.in/` returns 301. |
| CF-2 | **Email Address Obfuscation is on** | Live HTML shows `[email protected]` and needs `cdn-cgi/.../email-decode.min.js` to reveal `support@dqstore.in`. Without JS, and for some crawlers and link-preview bots, the address is missing. | *Scrape Shield* → turn off **Email Address Obfuscation** for the zone, or add a Configuration Rule that disables it for `dqstore.in`. The address is public anyway (WhatsApp/contact page). |
| CF-3 | **HTML isn't edge-cached** | `cf-cache-status: DYNAMIC` and `Cache-Control: public, max-age=0, must-revalidate` on every HTML page; Lighthouse measured TTFB at about 950 ms on live. Static chunks are fine (`max-age=14400`). | **(a)** *Caching → Cache Rules* → rule for `dqstore.in` with `URI path does not start with "/_next/"` → *Eligible for cache*, Edge TTL e.g. 1 hour, *Respect origin* off for HTML. Pages purges on each deploy. **(b)** Optionally add `public/_headers` in a later phase with `/_next/static/*  Cache-Control: public, max-age=31536000, immutable`. That's a code change, so it isn't in Phase 1. Re-run Lighthouse on live afterwards. |
| CF-4 | Confirm the Pages build settings | Read-only wrangler shows Git provider = yes, production branch `main`, last deploy `ec74f7e`. Build command and output directory aren't visible from the CLI. | Pages → `dq-web` → *Settings → Builds*: confirm the build command is `npx next build` (or `npm run build`), the output is `out`, and Node ≥ 18. The new devDependency `playwright-core` installs no browser, so it doesn't slow the build meaningfully. |
| CF-5 | Phase 1 isn't deployed | This branch (`website-redesign-2026-10`) isn't pushed. Pages only builds `main` for production and pushed branches for previews. | When you approve: push the branch → check the preview URL → merge to `main`. Per the deploy rule: preview (UAT) first, production second. |

## Product / backend items the new copy depends on (no code changed)

| # | Item | Why it matters for the site |
|---|---|---|
| PB-1 | The **founding-partner pilot needs a plan**. The backend seed has `Trial` (30 days, Growth features, 1 store) but nothing at 90 days. | The site now says "free 90-day pilot". The trial length in `seed_subscription_plans.js:134-154` (30 days) should be extended, or pilot stores put on `Grandfathered`, before the first store signs up. |
| PB-2 | **Discount codes need the `coupons` feature**, which is off on Starter (`resolvers.js:1289`, seed `:50`). | The site leads with staff discount control. Founding stores must be on a plan with `coupons: true` (Trial/Growth/Grandfathered all have it). |
| PB-3 | **Web checkout is still disabled** (`dq_app cart_bottom_bar.dart:346`). The fix is on the unmerged `feature/web-checkout`. | Q1 is now decided: shoppers use the Android app, so web checkout is not on the site. A pilot can only go live once the Android app reaches pilot stores (PB-6). |
| PB-4 | The website's pricing constants were the documented "source of truth" for the backend seed (`seed_subscription_plans.js:14`). | The website no longer lists ₹2,999/₹5,999. The seed comment should point to `lib/site.ts`'s `OFFER` instead, or drop the claim. |
| PB-5 | Legal: Terms and Privacy now say "DQ" (no entity) and describe the 90-day pilot. | Needs legal review before the first pilot agreement (Q6 in `07`). |
| PB-6 | **Android app distribution (decision Q1: shoppers use the DQ Android app).** Release builds are signed with the debug keystore and nothing is published. | Decide and document how pilot stores get the Android app (Play internal test track vs direct APK); fix release signing (debug keystore) before any Play listing. The site deliberately makes no store/badge/link claim until then. |

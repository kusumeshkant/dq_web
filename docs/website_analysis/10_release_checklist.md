# 10 — Release checklist: `website-redesign-2026-10` → dqstore.in

Production today is Cloudflare Pages project **`dq-web`**, built from GitHub `kusumeshkant/dq_web` `main` at **`ec74f7e`** (deployment **`9dbaf449-7542-4d33-b5f7-7db7d33104ea`**; VERIFIED in `09`). Pages builds every pushed branch as a **preview** and `main` as **production**. Follow the order below: preview first, production second.

## A. Pre-merge checks (run locally on the branch)

| Check | Command / how | Pass when |
|---|---|---|
| Branch is clean | `git status` | Only untracked screenshots/captures, `public/favicon.svg`, `public/icon-512.png`, `tsconfig.tsbuildinfo` |
| Typecheck | `npx tsc --noEmit` | No errors |
| Lint | `npx next lint` | "No ESLint warnings or errors" |
| Build from tracked files only | `git archive HEAD \| tar -x -C /tmp/dqbuild && cd /tmp/dqbuild && npm ci && npx next build` | 12/12 static pages; `out/` has `index.html`, `sitemap.xml`, `og-image.png`, `icon-192.png`, `apple-touch-icon.png` |
| Banned strings | grep the built HTML for the Phase 4 list (`48-hour`, `6 Indian languages`, `Operational`, `₹2,999`, `Loyalty`, `outlets`, `Q3 2026`, `RBI`, `Pvt Ltd`, `Google Play`, `Play Store`, `browser`, `PWA`, `no download`, `queue management`, `AI-native`, `theft-proof`, …) | 0 hits |
| Founder note approved | `lib/site.ts` → `FOUNDER.note` | Approved text in place, DRAFT marker removed (07 Q18) |
| WhatsApp number confirmed | `lib/constants.ts` `WHATSAPP_NUMBER` | Confirmed business number (07 Q17) |
| Legal review | Terms + Privacy | Signed off (08 PB-5) |

## B. Push the branch and get a Cloudflare Pages preview

1. `git push -u origin website-redesign-2026-10`
2. Pages → `dq-web` → **Deployments**: wait for the *Preview* build of `website-redesign-2026-10` to succeed. It's also listed by `wrangler pages deployment list --project-name dq-web`.
3. Note the preview URLs: `https://<hash>.dq-web-18s.pages.dev` and the branch alias `https://website-redesign-2026-10.dq-web-18s.pages.dev`.
4. Smoke-test the preview: every route returns 200 (§D commands with `BASE=<preview URL>`); `/no-such-page/` returns 404.

## C. PageSpeed Insights on the preview

1. Open `https://pagespeed.web.dev/` and run **Mobile** for `<preview>/`, `<preview>/how-it-works/` and `<preview>/for-stores/`.
2. Record Performance, Accessibility, LCP and CLS for each. Targets: **home LCP ≤ 3.0 s**, **CLS < 0.05**, **Accessibility 100**.
3. Note that preview HTML is served by Pages without the production cache rule (CF-3), so TTFB may be higher than production will be after CF-3.
4. If home LCP > 3.0 s: the next lever is trimming home's server-rendered HTML (queue panels + analytics markup). Don't merge on an unconfirmed LCP.

## D. Merge to `main` for production

1. Open a PR `website-redesign-2026-10` → `main` and review the diff (`git diff --stat main...HEAD`).
2. Merge (merge commit or squash — your choice; the rollback in §F works either way).
3. Pages builds `main` automatically. Wait for the **Production** deployment to succeed and note its deployment ID.

## E. Post-deploy checks (production)

```bash
BASE=https://dqstore.in
for p in / /how-it-works/ /for-stores/ /pricing/ /about/ /contact/ /privacy/ /terms/ /sitemap.xml /robots.txt /og-image.png /icon-192.png /apple-touch-icon.png /logos/favicon.svg; do
  curl -s -o /dev/null -A "Mozilla/5.0" -w "%{http_code} $p\n" "$BASE$p"
done                                                        # all 200
curl -s -o /dev/null -w "%{http_code}\n" "$BASE/no-such-page/"    # 404
curl -sI http://dqstore.in/ | grep -i location                    # https://dqstore.in/
curl -sI https://www.dqstore.in/ | head -3                        # 301 to https://dqstore.in/ (after CF-1; 522 before)
curl -s "$BASE/" | grep -o '<meta property="og:image" content="[^"]*"'   # https://dqstore.in/og-image.png
curl -s "$BASE/" | grep -o 'support@dqstore.in' | head -1          # present (after CF-2 email obfuscation off)
curl -sI "$BASE/" | grep -i cf-cache-status                       # HIT after CF-3 (DYNAMIC before)
```

- **Link previews:** paste `https://dqstore.in/` into the LinkedIn Post Inspector (`https://www.linkedin.com/post-inspector/`) and the Facebook Sharing Debugger (`https://developers.facebook.com/tools/debug/`, which WhatsApp uses as well), then send the link in a WhatsApp chat to yourself. Expect the 1200×630 "No billing queue." image and the new title.
- **Search:** submit `https://dqstore.in/sitemap.xml` in Google Search Console (optional).
- **Form:** submit one real test application from `/contact/` and confirm the Web3Forms email arrives with UTM/page/referrer lines. This is the only real submission; QA used mocks.

## F. Rollback

- **Fastest (no git change):** Pages → `dq-web` → Deployments → **`9dbaf449`** (production, `ec74f7e`) → **⋯ → Rollback to this deployment**. Production serves the previous build within a minute.
- **Git:** `git revert -m 1 <merge-commit>` on `main` (or revert the squash commit) and push. Pages rebuilds the previous content.
- After any rollback, re-run the §E curl block.

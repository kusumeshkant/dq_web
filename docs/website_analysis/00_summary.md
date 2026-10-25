# 00 — Summary: dq_website audit (2026-10-25)

Read-only pass. No source files changed. Repo HEAD `ec74f7e` (2026-05-29) = **live production** (Cloudflare Pages `dq-web`, deployment `9dbaf449`; VERIFIED in `09`). Stack: Next.js 14.2.3 App Router, static export (`next.config.js:3`), React 18.3.1, Tailwind 3.4, `framer-motion` 11.18.2 installed but **imported nowhere**.

Labels: **VERIFIED** = traced to a file · **ASSUMPTION** = my inference · **RECOMMENDATION** = proposed change · **UNVERIFIED** = can't be settled from the repo.

## The one-line diagnosis
The site sells an "AI-ready checkout intelligence platform" with committed pricing, 6 languages, 48-hour deployment and "All Systems Live". The product is a scan-and-go self-checkout that **no shopper can pay through today** (web checkout disabled, no store-published mobile app). What makes DQ different (discount control, price lock, analytics) **barely appears on the site**.

## Top 10 findings — ranked by impact ÷ effort

| # | Finding | Evidence | Impact | Effort | Action |
|---|---|---|---|---|---|
| 1 | The site says "Live" and "Operational" everywhere, but shoppers can't pay. Customer web checkout is blocked, and no Android/iOS app has shipped. | VERIFIED `dq_app/lib/src/presentation/cart/widgets/cart_bottom_bar.dart:346`, `razorpay_service.dart:31`. Site: `HeroSection.tsx:132,178`, `InfrastructureSection.tsx:147`, `Footer.tsx:39-48`, `CtaBanner.tsx:70` | Critical | Low | RECOMMENDATION: remove the live/status badges and the "Open Customer App" CTAs. Present DQ as a founding-partner pilot. |
| 2 | Pricing lists 6 features with no code behind them: Loyalty, 3 outlets, ₹2 overage, API, White-label, and 7- vs 30-day analytics. | VERIFIED `lib/constants.ts:15-82` vs `seed_subscription_plans.js`, `plan_limit_service.js:80-106` | Critical (legal + trust) | Low | RECOMMENDATION: replace with founding-partner terms and say pricing is TBD (see `01`, `06`). |
| 3 | "6 Indian languages" appears on 9 surfaces, including JSON-LD. The app supports 2. | VERIFIED `dq_app/lib/src/l10n/language_controller.dart:14-17` (en, hi) | High | Low | Change to "English & Hindi". |
| 4 | Deployment time contradicts itself in 7 places: 48 h, < 1 h, "one afternoon", "same day". The real figure is 3-step self-serve onboarding (< 5 min) plus catalogue prep. | VERIFIED `dq_admin/.../onboarding_page.dart:46`. Site: see `01` rows C-04…C-10 | High | Low | Use one claim everywhere: "Set up in under 5 minutes. Your barcoded catalogue is the only prep." |
| 5 | A store owner can't tell what DQ is within 5 seconds. Hero: "Intelligence at every retail transaction" + "Checkout Intelligence Platform". | VERIFIED `HeroSection.tsx:55,61-62,67-69` | High | Low | Make the headline plain scan-and-go, with "keep your till" framing (copy in `06`). |
| 6 | The real differentiators are missing: discount authority + immutable DiscountLog, admin can grant a lower %, staff can't change price/stock, peak-hour/day and abandonment analytics. | VERIFIED backend `PermissionRequest.js:35-36`, `DiscountLog.js`, `resolvers.js:1140`, `typeDefs.js:546-556`. Site: no mention | High | Low-Med | Add a "Control & proof" section and a staff-discount journey (`03`). |
| 7 | The site has no product visuals at all: 0 `<img>`, 0 screenshots, 0 phone mockups. | VERIFIED grep `<img\|next/image` = 0 | High | Med | Add real app screens and a scroll-driven phone story (`05` concept A). |
| 8 | Pages contradict each other on install: "no download / PWA" vs "Download on Android & iOS", and "Q3 2026" mobile dates that have already passed. | VERIFIED `AppsSection.tsx:30` vs `how-it-works/page.tsx:19,34`, `ObjectionsSection.tsx:18`. Q3 2026 ended 2026-09-30 | High | Low | Remove the dates. Pick one channel statement (`07` Q1). |
| 9 | The home page has 11 sections. 4 repeat the "3 apps live" grid, and 3 sell investor-style "compounding intelligence / AI-native OS" to store owners. | VERIFIED `app/page.tsx:16-26`, `PlatformVisionSection.tsx:9`, `TestimonialsSection.tsx:82-83` | Med-High | Low | Cut to 7 sections and move the vision content off the store funnel (`06`). |
| 10 | The contact form is the only conversion path, and it's weak on a11y: labels aren't linked to inputs, only the phone is validated, and there's no lead source/UTM. The ROI calculator hard-codes ₹2,999 and assumes 100% recovery. | VERIFIED `ContactForm.tsx:47,120,218-228`, `RoiSection.tsx:11,43` | Med | Low | Fix labels/validation, add a qualification field, re-base the ROI calculator (`04`). |


## Status after Phases 1–4 (branch `website-redesign-2026-10`, not pushed — 2026-10-26)

| # | Finding | Status | Where it was handled / what remains |
|---|---|---|---|
| 1 | "Live/Operational" while shoppers can't pay | **Done** on the site · **needs product action** | Status badges, "All Systems Live" and app links removed; copy says "Now onboarding founding stores". A pilot still can't go live until the Android app reaches stores (08 PB-6) |
| 2 | Pricing features with no code | **Done** | Tiers replaced by the Founding Partner offer: free 90-day pilot, no card, no contract, pricing not final |
| 3 | "6 Indian languages" | **Done** | "English & Hindi" everywhere incl. JSON-LD; Hindi hero + owner-control lines (`lang="hi"`) |
| 4 | Seven deployment-time claims | **Done** | One claim: "Set up in under 5 minutes once your barcoded product list is ready"; "Live in 3 screens" stepper |
| 5 | Hero not understood in 5 s | **Done** | "Your customers scan, pay and walk out. No billing queue." + "Android app for shoppers" |
| 6 | Real differentiators missing | **Done** | Owner-control approval flow (20% → 10% → immutable log), price lock, analytics preview (sample data) |
| 7 | No product visuals | **Partially done** | HTML/CSS recreations labelled "Illustrative" behind `<Screen>`; real WebP captures still to come (07 Q11) |
| 8 | Install/channel contradictions, stale dates | **Done** | Channel decided: DQ Android app (Q1); iPhone "Not yet"; no web/PWA/app-store wording; no dates |
| 9 | 11-section home, investor content | **Done** | 9 sections in the 06 order; investor/AI/moat copy removed |
| 10 | Weak form a11y, ROI with a hard-coded price | **Done** | Linked labels, full validation, `aria-invalid`/`aria-describedby`, focus first error, barcode question, UTM fields; ROI re-based (adoption slider, no price) |
| — | `www.dqstore.in` 522, email obfuscation, HTML not edge-cached | **Needs dashboard action** | 08 CF-1 … CF-3 |
| — | Home LCP ≤ 3.0 s | **Unconfirmed** | Lighthouse on the build machine is in a slow-paint mode (unchanged control build 3.23 s now vs 2.86 s earlier). Measure with PageSpeed Insights on the Pages preview (10_release_checklist §B) |


## Also worth fixing early (cheap)
- **`www.dqstore.in` is down (522).** `www` isn't attached to the Pages project (VERIFIED `09`).
- Favicon/app-icon PNGs 404 on live because they were never committed (VERIFIED `09`).
- Live mobile Lighthouse Perf 59 on home; TTFB 950 ms, HTML not edge-cached (VERIFIED `09`).
- OG image is an SVG (`layout.tsx:49`). WhatsApp, LinkedIn, Facebook and X don't render SVG `og:image`, so shared links have no preview. Ship a 1200×630 PNG. VERIFIED file. Platform support is ASSUMPTION based on known behaviour.
- The footer names "DQ Technologies Pvt Ltd" (`Footer.tsx:119`, `terms/page.tsx:62`). Master context says the company isn't incorporated, and the legal templates name "Digital Queue Private Limited". This is a CONFLICT (`07` Q6).
- "RBI-compliant digital payments" (`CtaBanner.tsx:78`, `InfrastructureSection.tsx:166`). All customer money currently lands in DQ's own Razorpay account, which is payment-aggregator exposure. Remove the claim. VERIFIED via `docs/project_knowledge/00_MASTER_CONTEXT.md §3`.
- Staff push alerts are claimed (`AppsSection.tsx:57`, `how-it-works/page.tsx:28`), but push is skipped on web, which is the only channel that's live. VERIFIED `dq_staff/.../notification_service.dart:18`.
- Discount codes need the `coupons` feature, which is **off on Starter**, so the headline control feature isn't in the cheapest plan. VERIFIED `resolvers.js:1289`, `seed_subscription_plans.js:50`.

## Order of work (RECOMMENDATION)
1. **Truth pass** (≈1 day): implement `01` actions.
2. **IA + copy** (2–3 days): implement `06`.
3. **Visuals** (needs real screens): mockups, then `05` concepts A + B.
4. **Motion polish**: `05` concepts C–E.

## Files
`01_claims_audit` · `02_page_by_page` · `03_user_flows` · `04_ux_findings` · `05_motion_plan` · `06_proposed_ia_and_copy` · `07_open_questions`

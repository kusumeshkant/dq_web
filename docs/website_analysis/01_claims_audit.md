# 01 — Claims audit

Paths are relative to `dq_website/` unless prefixed. Backend = `dq_backend/de_backend/src/`. All "Reality" entries VERIFIED on 2026-10-25 unless labelled.
Action: **KEEP** · **REWORD** · **REMOVE**.

## A. Payments, channels, "live" status

| ID | Claim on site | File:line | Reality in code | Action |
|---|---|---|---|---|
| C-01 | "Web Live", "LIVE ↗", "3 Apps · All Live", "All Systems Live" (pulsing dot), "Operational" | `HeroSection.tsx:18-21,132,178` · `AppsSection.tsx:20,46,72,167` · `InfrastructureSection.tsx:10,21,32,147` · `SocialProofStrip.tsx:7,14,21` · `Footer.tsx:39-48` · `CtaBanner.tsx:70` · `StoresHero.tsx:49` | Web checkout is blocked: `dq_app/.../cart_bottom_bar.dart:346` shows "Open the DQ app on your phone to complete payment", and `razorpay_service.dart:31` shows a "Mobile Only" snackbar. A fix exists only on the unmerged branch `feature/web-checkout` (`e477962`, in `dq_app_webcheckout`). Android release builds are signed with the debug keystore, so none are published (master context §3). Status dots are hard-coded, with no health check behind them. | **REMOVE** status badges. **REWORD** to "Pilot programme — onboarding founding stores". |
| C-02 | "Pay via UPI, cards, or wallets" / "No POS terminal needed" | `AppsSection.tsx:32` · `SolutionSection.tsx:25` · `SocialProofStrip.tsx:35` · `InfrastructureSection.tsx:166` | Razorpay is integrated on native only. Web can't pay (C-01). | **REWORD**: "Shoppers pay in-app via Razorpay (UPI, cards)". Show it only once a channel actually works. |
| C-03 | "Mobile browser PWA — no download required" vs "Download DQ — Free app on Android and iOS" vs "available on Android and iOS" | `AppsSection.tsx:30` · `InfrastructureSection.tsx:12,45` vs `how-it-works/page.tsx:19,34` · `ObjectionsSection.tsx:10,18` | Neither is true end-to-end today: on web you can scan but not pay, and the native apps aren't published. | **REWORD** once you decide on the channel (`07` Q1). |
| C-04 | "Android & iOS · Q3 2026", "shipping Q3 2026" | `SocialProofStrip.tsx:28` · `AppsSection.tsx:26-27,52-53,78-79,167` · `HeroSection.tsx:21` · `InfrastructureSection.tsx:54,92` · `SolutionSection.tsx:18` | Q3 2026 ended 2026-09-30, so this date has already slipped. | **REMOVE** dates. Use "Native apps in progress" at most. |
| C-05 | "Tablet Experience — Coming Soon" | `InfrastructureSection.tsx:63-72` | No tablet-specific UI found. ASSUMPTION: it's responsive Flutter only. | **REMOVE**. |
| C-06 | "RBI-compliant digital payments" | `CtaBanner.tsx:78` · `InfrastructureSection.tsx:166` | One platform Razorpay account, no Route or sub-merchants. Store money is pooled in DQ's account, which is payment-aggregator exposure (master context §3). | **REMOVE**. KEEP "Payments processed by Razorpay". |
| C-07 | "Card data never stored" (privacy) | `app/privacy/page.tsx:55-56` | True. Razorpay handles card data and DQ stores only payment ids. | **KEEP**. Surface it on the trust section. |
| C-08 | "Production-grade infrastructure / cloud" | `HeroSection.tsx:102` · `CtaBanner.tsx:74` | One Vercel backend serves dev/UAT/prod, with no monitoring or alerting (master context §3, §8). | **REMOVE**. |

## B. Deployment time — 7 contradictory versions

| ID | Claim | File:line | Reality | Action |
|---|---|---|---|---|
| C-09 | "48-hour deployment" / "48hrs" / "Deployed in 48 hours" | `layout.tsx:43,62,79,89` · `HeroSection.tsx:6,68,99` · `WhyDQSection.tsx:17-19,114` · `CtaBanner.tsx:26,40,50` · `contact/page.tsx:8,11,52,88` · `StoresHero.tsx:51` · `WhyNowSection.tsx:42` | Admin onboarding has 3 steps: store details with map picker → inventory upload (skippable) → done with store code (`dq_admin/lib/src/presentation/onboarding/onboarding_page.dart:46,277-302`). That is self-serve and takes minutes. | **REWORD** everywhere (see C-12). |
| C-10 | "Live in under 1 hour" / "< 1 hr" / "Under an hour" | `for-stores/page.tsx:10,14` · `AboutStatsBar.tsx:7` · `ObjectionsSection.tsx:30` · `lib/constants.ts:115,117` (unused) | same | **REWORD** |
| C-11 | "Live in one afternoon" / "10 min + 30 min + Same day" | `GettingStarted.tsx:10,16,22,35` | Closest to the truth because it counts catalogue time. | **REWORD** to match C-12 |
| C-12 | *(proposed single claim)* | — | "Store set up in under 5 minutes. Your barcoded product list (Excel) is the only prep." | **RECOMMENDATION** |
| C-13 | "A store owner can go live alone in an afternoon" (sits right next to "48-hour deployment") | `WhyNowSection.tsx:42` | Contradicts itself within one card. | **REWORD** |

## C. Languages

| ID | Claim | File:line | Reality | Action |
|---|---|---|---|---|
| C-14 | "6 Indian languages" / "Hindi · Tamil · Telugu · Kannada · Bengali · English" | `HeroSection.tsx:7,27` · `SocialProofStrip.tsx:41-42` · `AppsSection.tsx:35` · `WhyDQSection.tsx:36` · `AboutStatsBar.tsx:8` · `WhyNowSection.tsx:40` · `layout.tsx:26` (JSON-LD) · `lib/constants.ts:132` (unused) | Two locales: `en_US`, `hi_IN` (`dq_app/lib/src/l10n/language_controller.dart:9-17`). Only the customer app was checked. Staff/admin l10n: ASSUMPTION that they're English only. | **REWORD**: "English & Hindi" (customer app). Fix JSON-LD. |

## D. Pricing page (`lib/constants.ts:15-82`, `PricingCards.tsx`, `PricingFaq.tsx`)

| ID | Claim | File:line | Reality | Action |
|---|---|---|---|---|
| C-15 | ₹2,999 / ₹5,999 / annual ₹29,990 / ₹59,990, "Save 2 months" | `constants.ts:18-21,42-43` · `PricingCards.tsx:36` · `layout.tsx:39` (JSON-LD Offer) · `pricing/page.tsx:21,24` · `StoresHero.tsx:29` · `for-stores/page.tsx:10,14` · `RoiSection.tsx:11,206` | The numbers match the seed (`seed_subscription_plans.js:48,78`). Business status: free during the founding-partner phase, pricing TBD (per brief). The subscription plan isn't bound to a payment (master context §7, open security item). | **REMOVE** committed prices. **REWORD** to the founding-partner offer (`06`). |
| C-16 | "Staff App (up to 3 devices)" | `constants.ts:28` | The limit is `maxStaff: 3` **staff accounts**, not devices (`seed_subscription_plans.js:61`). | **REWORD** if kept: "3 staff logins" |
| C-17 | "Basic Analytics (7-day)" vs "Advanced Analytics (30-day + trends)" | `constants.ts:30,50` | No per-plan analytics window. The `advancedReports` flag is defined but never asserted: it appears only in `constants/feature_keys.js`, `models/SubscriptionPlan.js` and `schema/typeDefs.js`. Analytics compute this-week/last-week and 30-day for everyone (`services/orderService.js:310,432`). | **REMOVE** the 7/30 split. |
| C-18 | "Up to 500 orders/month" | `constants.ts:32` | `maxOrdersPerMonth: 500` is enforced (`plan_limit_service.js:80-106`). | KEEP only if plans return. |
| C-19 | "₹2 per order above 500" | `constants.ts:36` | No overage billing exists. Checkout is **hard-blocked** at the cap with LIMIT_REACHED (`plan_limit_service.js:86-106`). | **REMOVE** |
| C-20 | "Loyalty Points System" | `constants.ts:51` | Absent: no model, field or reference (master context §4). | **REMOVE** |
| C-21 | "Promotional Coupon Engine" | `constants.ts:52` | What exists: **staff-issued, single-use discount codes**. They're capped at the staff member's admin-granted max %, expire after 15 min, and are logged to DiscountLog (`services/discountService.js:7,16-35,76-90`). They're gated by the `coupons` flag, which is **off on Starter** (`resolvers.js:1289`, seed `:50`). There's no promotional or campaign coupon engine. | **REWORD**: "Staff discounts with owner-set limits + full log". Show it as a core feature (`07` Q4). |
| C-22 | "Up to 3 outlets" / "Unlimited outlets" / "Multi-store management (chains and franchises)" / "Multi-Store" tag | `constants.ts:53,74` · `AppsSection.tsx:85` · `InfrastructureSection.tsx:35,37` · `PlatformVisionSection.tsx:26` | Seed says `maxStores: 3`, but tenancy is one store per user (`User.storeId`). A second store is an unreachable orphan (master context §3-4). | **REMOVE** |
| C-23 | "White-label (your brand)", "API access" | `constants.ts:72-73` | `customBranding` is a flag only. No API product exists. | **REMOVE** |
| C-24 | "Dedicated account manager", "Priority phone support", "SLA guarantee", "Priority email support" | `constants.ts:55,75-78` | ASSUMPTION: a solo founder can't honour an SLA. `prioritySupport: false` on every plan (seed). | **REMOVE** (keep "Founder-led onboarding") |
| C-25 | "30-day free trial" | `PricingFaq.tsx:12` · `terms/page.tsx:41` | A Trial plan exists: 30 days, 1 store, 15 staff, 5,000 orders (`seed_subscription_plans.js:136-154`). The FAQ JSON-LD says just "free trial" (`pricing/page.tsx:12`). | **REWORD** to founding-partner terms. Align the Terms page. |
| C-26 | "Billing is prorated" | `PricingFaq.tsx:17` · `pricing/page.tsx:13` | No proration code (grep `prorat` = 0 hits in backend). | **REMOVE** |
| C-27 | "No credit card required. Cancel anytime." / "No long-term contracts" | `PricingCards.tsx:126` · `WhyDQSection.tsx:98` | Nothing contradicts it, and no billing flow is live. | **KEEP** as "No card, no contract during the pilot" |
| C-28 | "Pays for itself in week 1 / 30x calculated ROI" | `constants.ts:108-111` (unused) | Unused constant. Delete it. | **REMOVE** |

## E. Feature claims (apps)

| ID | Claim | File:line | Reality | Action |
|---|---|---|---|---|
| C-29 | Exit QR validation, "Green = cleared, Red = hold" | `SolutionSection.tsx:37` · `WhyDQSection.tsx:25-27` · `how-it-works/page.tsx:23,30` | The customer exit pass exists: DQX1 QR + typeable 24-char code (`dq_app` commits `4f7d87e`, `9097f54`). Staff verify flow is live per the prod deploy record. I didn't check the green/red UI in this pass (UNVERIFIED). | **KEEP**, after checking the colours. |
| C-30 | "Zero scan-and-walk risk" / "Shrinkage eliminated by architecture" / "Theft-proof" | `WhyDQSection.tsx:25,27` · `SolutionSection.tsx:42` · `constants.ts:122-123` | Exit QR only proves an order was paid. It doesn't prove the basket matches the order: an unscanned item in the bag isn't detected. | **REWORD**: "Every exit is checked against a paid order." |
| C-31 | "Push alerts on every new order" / "Push notification the moment a customer pays" | `AppsSection.tsx:57` · `how-it-works/page.tsx:28` · `InfrastructureSection.tsx:23` | Push is skipped on web (`dq_staff/.../notification_service.dart:18-21`), and web is the only live staff channel. | **REWORD**: "Live order feed" |
| C-32 | "One-tap order status: Accept / Hold / Reject" / "Pending → Preparing → Ready → Completed" / "Product fulfilment checklist" | `AppsSection.tsx:58,60` · `how-it-works/page.tsx:29` | The Order enum is `pending, preparing, ready, completed, cancelled` (`models/Order.js:38`). There are no Accept/Hold/Reject states. "Preparing/Ready" is a food-service framing that doesn't fit fashion scan-and-go. | **REWORD** around exit verification |
| C-33 | "Silent background sync" / "orders queue locally and sync when connection restored" / "offline support" | `AppsSection.tsx:61` · `ObjectionsSection.tsx:22` · `InfrastructureSection.tsx:57` | No offline order queue found. Hive is used for auth/session only (`dq_app/lib/core/manager/hive_manager.dart`, `auth_local_ds.dart`). | **REMOVE** and answer honestly: "Needs internet. Shoppers can fall back to your till." |
| C-34 | "Inventory velocity and low-stock alerts" / "Reorder signals that calibrate with each week" | `AppsSection.tsx:84` · `TestimonialsSection.tsx:18-19` | There's a `reorderLevel` field and a low-stock filter (`services/productService.js:63-66`). There are no alerts or reorder signals: InventoryAlert doesn't exist (master context §4). | **REWORD**: "Low-stock list" |
| C-35 | "Staff performance and shift analytics" / "Shift-by-shift comparison" | `AppsSection.tsx:85` · `TestimonialsSection.tsx:25-26` | Staff performance analytics exist but are gated to Growth (`resolvers.js:569`). There's no shift model (StaffShift absent). | **REWORD**: "Per-staff sales & discount report" |
| C-36 | "Revenue and GMV by hour and day", "Week-over-week" | `AppsSection.tsx:82,87` · `TestimonialsSection.tsx:12` | `peakHours`, `peakDays` and week comparison exist (`schema/typeDefs.js:546-547`, `orderService.js:310`). | **KEEP** |
| C-37 | *(missing)* Basket abandonment | — | `abandonedChecks`, `abandonmentRate` from CartCheckEvent (`typeDefs.js:264,555-556`) | **ADD** |
| C-38 | *(missing)* Staff discount authority + approval at a lower % + immutable log | — | Staff request a max % (≤ 50) with a reason (`services/permissionService.js:35-38`). Admin can grant less (`models/PermissionRequest.js:35-36`, `permissionService.js:96`). Every use writes an append-only DiscountLog with staff, %, original and final amount (`models/DiscountLog.js`). | **ADD** as a core differentiator |
| C-39 | *(missing)* Staff can't change price/stock | — | Staff edits exclude price, stock and MRP (`resolvers.js:1135-1151`, comment `:1140`). Product edits need an admin grant, and every change goes to ProductChangeLog. | **ADD** |
| C-40 | "Bulk product upload via Excel" | `AppsSection.tsx:86` · `GettingStarted.tsx:18` | Exists with column mapping (`dq_admin/.../excel_parser_service.dart`, `column_mapping_screen.dart`). | **KEEP** |
| C-41 | "App shows nearby DQ-enabled stores" | `how-it-works/page.tsx:20` | `get_nearby_stores_usecase.dart` exists. Store code entry is on a WIP branch (memory). UNVERIFIED which one is live. | **KEEP** pending `07` Q2 |
| C-42 | "Pay ... under 10 seconds" / "scan to exit in under 5 minutes" | `how-it-works/page.tsx:22,60` | Not measured anywhere. | **REWORD**: drop the numbers |

## F. Positioning, market, company

| ID | Claim | File:line | Reality | Action |
|---|---|---|---|---|
| C-43 | "Checkout Intelligence Platform" / "Every transaction compounds platform intelligence" / "Intelligence at Every Transaction" | `HeroSection.tsx:55,61-62,74` · `layout.tsx:28,34,58-89` · `Footer.tsx:21,24` · `MobileCtaBar.tsx:33` · `CtaBanner.tsx:22` · `TestimonialsSection.tsx:42,79-83` · `PlatformVisionSection.tsx:54,140` | Positioning language, not something a store owner can understand. The brief says no moat claims. | **REMOVE** from the store funnel |
| C-44 | "AI-Native Retail OS", "Cross-store AI", "Demand forecasting", "Autonomous reorder" | `PlatformVisionSection.tsx:7-12,17-20` | Absent. The brief forbids "AI-native". | **REMOVE** |
| C-45 | "Real-time queue elimination" / "Queue elimination confirmation" / "Queue-free checkout measured" | `PlatformVisionSection.tsx:34` · `TestimonialsSection.tsx:25-26` | Nothing measures queues, and there's no queue entity. Saying "removes the queue" is fine. Claiming to measure the queue isn't. | **REWORD** |
| C-46 | "What makes DQ hard to replicate" (moat card) | `WhyNowSection.tsx:38-43,88` | It's a moat claim built on two false items (6 languages, 48 h). | **REMOVE** |
| C-47 | "1 in 3 fashion customers walk out", "20+ min average billing wait" | `constants.ts:86-93` · `ProblemSection.tsx:51` ("observed patterns") | No source given. | **REWORD**: qualitative, or cite a source |
| C-48 | "180,000 mid-market stores" / "180K+" | `StorySection.tsx:32` · `WhyNowSection.tsx:31-32` · `AboutStatsBar.tsx:9` | No source given. It's an investor framing. | **REMOVE** from store pages |
| C-49 | "Perpule … acquired by Amazon" | `StorySection.tsx:30` · `WhyNowSection.tsx:32` | ASSUMPTION: broadly true (2021). It's investor framing and invites "why didn't it work?". | **REMOVE** from store pages |
| C-50 | "UPI crossed 10 billion monthly transactions" | `WhyNowSection.tsx:10` | ASSUMPTION: true but understated (well above 10 bn now). | **REWORD** with a dated source, or drop |
| C-51 | "Every Indian has wasted 30 minutes … ₹200 worth of groceries" | `StorySection.tsx:11` | Grocery framing contradicts the fashion ICP. | **REWORD** |
| C-52 | "© 2026 DQ Technologies Pvt Ltd" | `Footer.tsx:119` · `terms/page.tsx:62` | Not incorporated. Templates name "Digital Queue Private Limited" (master context §3). | **REWORD** once you confirm the entity (`07` Q6) |
| C-53 | "Investor Relations" link → `/contact` | `Footer.tsx:108-110` | No IR content behind the link. | **REMOVE** or point it at a real page |
| C-54 | Industries: Jewellery, Books & Stationery | `IndustriesSection.tsx:22-26,46-50` | Off-ICP. High-value jewellery doesn't suit self-scan. | **REWORD**: lead with fashion/footwear/lifestyle and drop jewellery |
| C-55 | "We'll call you within 24 hours, Mon–Sat 10–7" | `contact/page.tsx:50` · `ContactForm.tsx:95` | Operational promise (ASSUMPTION: achievable for the founder). | **KEEP** if it's true |

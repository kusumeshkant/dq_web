# 05 — Motion plan

## Current state (VERIFIED)
- **Library:** `framer-motion` `^11.1.9` in `package.json:16`, resolved **11.18.2** in `node_modules`. **0 imports** in `app/`, `components/`, `hooks/`.
- **Framework:** Next.js **14.2.3** App Router, `output: 'export'` (`next.config.js:3`), React **18.3.1**.
- **Existing animation is CSS only:**
  - `animate-fade-up` hero entrance (`globals.css:16-29`), gated by `prefers-reduced-motion`.
  - `.reveal` + `useInView` IntersectionObserver fade-up, used on 11 sections (`globals.css:32-50`, `hooks/useInView.ts`). Gated, but hides content before JS runs (U-14).
  - Tailwind `animate-pulse` on "live" dots. Not gated (U-13). Remove it together with the false status claims.
  - Hover lifts (`hover:-translate-y-*`) and the mobile drawer/CTA bar slide.
- **Assessment:** everything is generic "fade up on scroll". Nothing animates the product.

## Library decision (RECOMMENDATION)
- **Stay on `framer-motion` 11.x**, already installed and React-18 compatible. The `motion` package (v12, `motion/react`) is the same engine renamed. Migrate later with an import swap. Moving to v12 now buys nothing and risks a React-19-era peer churn (ASSUMPTION).
- **Bundle discipline:**
  - Use `LazyMotion features={domAnimation}` with `m.*` components site-wide, ≈ 15 kB gz vs ≈ 34 kB for full `motion` (ASSUMPTION based on published figures).
  - Load `domMax` (layout animations) only inside concept C via dynamic `import()`.
- **Global policy:**
  - Wrap the app in `<MotionConfig reducedMotion="user">`. Transforms are then dropped automatically for reduced-motion users, and opacity stays.
  - Each concept also branches on `useReducedMotion()` to a static, complete end-state. Never hide content behind motion.
  - Everything works under static export. All motion components are `'use client'` leaf islands, and page shells stay server components.
- **Shared tokens** (add to `lib/motion.ts`):
  - `ease.out = [0.22, 1, 0.36, 1]`, `ease.inOut = [0.65, 0, 0.35, 1]`
  - `dur.fast = 0.18`, `dur.base = 0.32`, `dur.slow = 0.6`
  - `spring.ui = { type: 'spring', stiffness: 380, damping: 32 }`
  - Stagger 0.06–0.08 s
  - Animate only `transform`/`opacity`. No layout-thrashing properties.

---

## A. Scroll-driven "Scan → Cart → Pay → Exit QR" phone story ★ core explainer
- **Purpose:** explain the whole shopper journey in about 10 seconds of scrolling, with no reading needed.
- **Where:** home section 3 and the `/how-it-works` hero.
- **Trigger:** scroll. A pinned section of `height: 400vh` containing a sticky phone.
- **Components:**
  - `PhoneStory` (section, `useScroll({ target, offset: ['start start','end end'] })`)
  - `PhoneFrame` (SVG device frame)
  - `Screen` × 4: real app captures as WebP, or lightweight HTML recreations
  - `StepCaption` × 4 (right column)
  - `ProgressRail`
- **Primitives:**
  - `useScroll`. Map `scrollYProgress` to an active step: `useTransform(p, [0,.25,.5,.75,1], [0,1,2,3,3])` + `useMotionValueEvent` to set the step index.
  - `AnimatePresence mode="popLayout"` crossfades screens (`opacity`, `y: 16 → 0`).
  - Micro-moments per screen:
    - **Scan:** a laser line `y` loops over a barcode, then a "+1" chip springs into the cart badge.
    - **Cart:** line items stagger in. Total counts up via `useSpring` on a motion value.
    - **Pay:** button press scale 0.97, then a Razorpay-style sheet slides up, then a ✓ path draws (`pathLength 0 → 1`).
    - **Exit:** QR fades in with a scan-sweep. The 6-group code types in (stagger 0.04).
  - `ProgressRail` fill = `scaleY: scrollYProgress`.
- **Duration/easing:** screen crossfade `dur.base` `ease.out`. Micro-moments 0.4–0.8 s. The scroll mapping itself is linear.
- **Mobile fallback (< 768 px):** no pinning, since tall sticky sections feel broken on mobile Safari. Use a horizontal swipeable carousel (CSS `scroll-snap`). Each card animates its micro-moment with `whileInView` once (`viewport={{ once: true, amount: 0.6 }}`).
- **Reduced motion:** a static 4-up grid of screens with numbered captions. No pin, no loops.
- **Perf cost:** medium. 4 WebP screens ≈ 4 × 40 kB, lazy below the fold with `loading="lazy"` and explicit size. Scroll-linked values bypass React renders. Target: no added CLS, INP unaffected.
- **Dependency:** needs real app screenshots. Honesty rule: if web pay is still disabled at launch, label the Pay screen "Android app" or show it as "Coming to web" (`07` Q1).

## B. "Queue disappears" before/after
- **Purpose:** the emotional hook. A queue at the till becomes shoppers scanning at the rack.
- **Where:** hero background or right column (desktop), or directly under the hero (mobile).
- **Trigger:** `inView` once, plus an optional toggle "Without DQ / With DQ". A `role="switch"` gives the user control.
- **Components:** `QueueScene` (SVG). 8 `Shopper` glyphs (simple pictograms, no faces), `Counter`, `Rack`, `PhoneGlyph`.
- **Primitives:**
  - `variants` for the `before` / `after` states.
  - `layout` + `layoutId` per shopper, so each glyph glides from its queue slot to a rack position. This needs `domMax`; or animate `x/y` explicitly to stay on `domAnimation`.
  - Phones pop in with a stagger.
  - Counter's "waiting" timer fades out.
- **Duration/easing:** 1.2 s total, stagger 0.07, `spring.ui` for each glyph.
- **Mobile fallback:** same scene at 2/3 scale with 5 shoppers. Auto-plays once in view, then shows a "Replay" button.
- **Reduced motion:** two static side-by-side panels labelled "Today" / "With DQ".
- **Perf cost:** low. Inline SVG ≈ 6 kB, transforms only.
- **Copy guardrail:** caption "Shoppers pay on their phone. Your till stays for anyone who wants it." Don't say "queue management".

## C. Staff discount-approval flow ★ owner-trust differentiator
- **Purpose:** show the control story DQ actually has (`03` journey b): request → owner grants lower → immutable log.
- **Where:** home "Owner control" band and `/for-stores`.
- **Trigger:** `inView` (`amount: 0.5`, once). Then a "Play again" button.
- **Components:** `ApprovalFlow`. `StaffCard` ("Ravi requests up to 20% · Regular customer") → animated connector → `OwnerCard` (slider drops 20 → **10%**, "Approve 10%") → connector → `LogRow` (slides into a `DiscountLog` table: Ravi · Bill #1042 · 10% · ₹1,200 → ₹1,080 · 4:12 pm, with a lock icon).
- **Primitives:**
  - Parent `variants` with `staggerChildren: 0.5` to sequence the beats.
  - Connector `pathLength` 0 → 1.
  - Number change via `useSpring` + `useTransform` to a rounded display.
  - `AnimatePresence` for the log row insert.
  - `layout` on the table so existing rows shift down. This is the only place `domMax` is lazy-loaded.
- **Duration/easing:** each beat 0.5 s `ease.out`, whole sequence ≈ 3 s.
- **Mobile fallback:** cards stack vertically and the connector runs vertically. Same sequence.
- **Reduced motion:** the final state with all three cards and the logged row, plus a numbered caption.
- **Perf cost:** low-medium (~3 kB code + `domMax` chunk on demand).
- **Truth notes:**
  - Requested max must be ≤ 50% (`permissionService.js:38`).
  - Codes expire after 15 min (`discountService.js:7`).
  - The feature is plan-gated (`resolvers.js:1289`).
  - Data shown is sample data, so label it "Example".

## D. Admin analytics reveal
- **Purpose:** prove "you'll finally see your store", using only metrics that exist: peak hours, peak days, abandonment, discount depth, top products (`schema/typeDefs.js:531-556`).
- **Trigger:** `inView` once per card.
- **Components:** `AnalyticsPreview` with:
  - `PeakHoursBars`: 12 bars, `scaleY` from 0, `transformOrigin: bottom`, stagger 0.04.
  - `AbandonmentFunnel`: Scanned → Checked out → Paid, widths animate.
  - `DiscountDepth`: per-staff horizontal bars.
  - `KpiTile` ×3 with count-up.
- **Primitives:** `useInView`. Count-up with the `animate(motionValue, target, { duration: 1.2, ease: ease.out })` imperative API and rounded `onUpdate`. `variants` for the stagger.
- **Duration/easing:** bars 0.6 s, counts 1.2 s, `ease.out`.
- **Mobile fallback:** a single column with swipeable cards. Counts still animate, but faster (0.8 s).
- **Reduced motion:** final values rendered immediately. Count-up skipped.
- **Perf cost:** low. Pure SVG/divs, no chart library.
- **Truth notes:** clearly label it "Sample store data". Don't show the Staff-performance tile without noting the plan if tiers return (`resolvers.js:569`).

## E. "Live in 3 screens" onboarding stepper
- **Purpose:** replace the 7 conflicting deployment claims with the real 3-step flow (`onboarding_page.dart:46`).
- **Trigger:** `inView`, auto-advancing every 2.2 s. Pauses on hover/focus. Steps are also clickable tabs.
- **Components:** `OnboardingStepper`. Three tabs (Store details · Upload Excel · Store code ready) with a mini laptop/phone frame:
  - Step 1 shows the form fields filling in.
  - Step 2 shows an Excel icon flying to "312 products imported".
  - Step 3 shows the store code + printable QR poster.
- **Primitives:**
  - `AnimatePresence mode="wait"` for panel swaps.
  - `layoutId="activeTab"` underline (can be done with `x` transforms on `domAnimation`).
  - `useInView` to start and stop the timer.
  - Count-up on the import count.
- **Duration/easing:** panel 0.32 s `ease.inOut`. Auto-advance 2.2 s.
- **Mobile fallback:** vertical stepper with all three visible. Each animates when it enters view.
- **Reduced motion:** no auto-advance. Static tabs, user-driven.
- **A11y:** `role="tablist"`. Auto-rotation needs a visible pause control (WCAG 2.2.2).
- **Perf cost:** low.
- **Copy:** "Under 5 minutes once your barcoded product list is ready."

---

## Priority & effort (RECOMMENDATION)
| Concept | Value | Effort | Prereq | Order |
|---|---|---|---|---|
| A Phone story | Very high | M-L (2–3 d) | Real screenshots, Q1 decision | 1 |
| C Discount approval | High (unique) | M (1–1.5 d) | none | 2 |
| E Onboarding stepper | High (kills claim mess) | S-M (1 d) | admin screenshots | 3 |
| B Queue disappears | Medium (hook) | M (1 d) | illustration style | 4 |
| D Analytics reveal | Medium | S-M (1 d) | sample data agreed | 5 |

**Global replacements:**
- Retire `.reveal` and `useInView` in favour of one `<Reveal>` wrapper (`m.div` `whileInView`, `viewport={{ once: true, margin: '-10% 0px' }}`).
- Keep content visible in SSR HTML: set `initial={false}` when reduced motion is on, and apply the hidden state only after mount.

**Budget:** ≤ 40 kB gz of added JS across all concepts. Lighthouse mobile performance ≥ 90. CLS < 0.05.

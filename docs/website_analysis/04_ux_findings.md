# 04 — UX / UI / a11y / performance findings

Severity: **S1** blocks users or is a legal/trust risk · **S2** significant · **S3** polish.
I didn't render the site in a browser in this pass. Contrast ratios were computed from the Tailwind tokens (`tailwind.config.ts:13-21`) using the WCAG 2.1 formula.

## Accessibility

| ID | Sev | Finding | Evidence | Fix (RECOMMENDATION) |
|---|---|---|---|---|
| U-01 | S1 | **Primary CTA contrast fails AA.** White on `#2E86FF` ≈ **3.5:1**. Buttons are 14–16 px semibold, which isn't "large text", so they need 4.5:1. | `HeroSection.tsx:81`, `NavbarClient.tsx:68`, `Button.tsx:29`, all CTAs | Darken the button to `#1A6FD4` (≈ 4.9:1) or `#1560C4`. Keep `#2E86FF` for accents on navy. |
| U-02 | S1 | `text-gray-400` (`#9CA3AF`) on white ≈ **2.5:1**, used **26×**, including body copy. | e.g. `IndustriesSection.tsx:83`, `ProblemSection.tsx:43,50`, `PricingCards.tsx:126`, `ContactForm.tsx:184-195` | Use `gray-500` (4.8:1) at minimum and `gray-600` for body. |
| U-03 | S2 | `enterprise-blue` text on white ≈ 3.5:1 on small text (badges are 10 px uppercase). | `SectionHeading.tsx:34`, `IndustriesSection.tsx:91`, `TestimonialsSection.tsx:62` | Use `#1560C4` for blue text on light backgrounds. |
| U-04 | S2 | `enterprise-muted/60` on navy ≈ **4.1:1**, and `/50`, `/40`, `white/40` are lower. All used on 10–11 px text. | `CtaBanner.tsx:49,55`, `Footer.tsx:38,46,118`, `PlatformVisionSection.tsx:85,106`, `AppsSection.tsx:135` | Minimum `enterprise-muted` at 100% for text under 14 px. Rendered values (VERIFIED `09`): `/60` 4.12 on navy and 4.28 on footer; `/70` on `#2E3F52` 3.65; `/50` 3.32; `/40` 2.40–2.51; `white/40` 3.66. |
| U-05 | S2 | **Only 2 of 6 marketing pages have an `<h1>`.** `SectionHeading` renders `<h2>`, so `/about`, `/pricing`, `/contact` and `/how-it-works` have none. | `SectionHeading.tsx:40`. H1 found only in `HeroSection.tsx`, `StoresHero.tsx`, privacy, terms | Add an `as="h1"` prop for page heroes. |
| U-06 | S2 | 28 uses of `text-[10px]`, including meaningful labels (platform chips, stat labels). | grep count. Rendered: 97 nodes at 10 px + 4 at **9 px** on home (VERIFIED `09`). | Minimum 12 px; 11 px only for decorative overlines. |
| U-07 | S1 | **The 2 `<select>`s have no accessible name** (axe `select-name`, serious, VERIFIED `09`). Text inputs get a name only from the placeholder. No `<label>` is programmatically linked (no `htmlFor`/`id`). | `ContactForm.tsx:218-228,246-259` | Use `useId()`, `htmlFor`/`id`, `aria-invalid`, and `aria-describedby` for errors. |
| U-08 | S1 | `noValidate` is set, but only the phone is validated, so empty name/store/city/email submit. Required `*` is shown visually but not enforced. | `ContactForm.tsx:47,120` | Validate every required field and focus the first error. |
| U-09 | S2 | `<select>` has `appearance-none` with no replacement chevron, so it looks like a text input. | `ContactForm.tsx:254` | Add a chevron icon. |
| U-10 | S2 | Mobile CTA bar has `aria-hidden` when hidden, but its links stay focusable, so keyboard focus lands off-screen. | `MobileCtaBar.tsx:26-29` | Add `inert` when hidden, or render `null`. |
| U-11 | S2 | Mobile drawer has no focus trap and no scroll lock. Focus doesn't move into it on open. | `NavbarClient.tsx:86-126` | Trap focus, focus the first link, return focus to the toggle. |
| U-12 | S3 | FAQ accordion buttons have `aria-expanded` but no `aria-controls` or region id. Content unmounts, so there's no height animation either. | `ObjectionsSection.tsx:59-75`, `PricingFaq.tsx:55-71` | Add the ids. Use `AnimatePresence` height (see `05`). |
| U-13 | S2 | **Reduced motion isn't fully honoured.** `animate-pulse` status dots and `scroll-behavior: smooth` aren't gated. Hover `-translate-y` is fine. | `AppsSection.tsx:119`, `InfrastructureSection.tsx:146`, `globals.css:5-7` | `motion-safe:animate-pulse`. Wrap smooth-scroll in `@media (prefers-reduced-motion: no-preference)`. |
| U-14 | S2 | `.reveal` starts at `opacity:0` and only shows after JS hydration and IntersectionObserver. If JS is slow or fails, 11 home sections stay invisible. | `globals.css:32-45`, `hooks/useInView.ts` | Make it progressive: add a `js` class on `<html>` and hide only under `.js .reveal`. VERIFIED with JS disabled: 33/33 reveal blocks invisible on home, 4/4 on for-stores, 12/12 on about (`screenshots/local_nojs_*`). |
| U-15 | S3 | `<html lang="en">` only, and Inter is loaded with the `latin` subset only. Any Hindi copy would be mis-announced and fall back to a system Devanagari font. | `layout.tsx:9-13,96` | If Hindi ships, add `lang="hi"` spans and Noto Sans Devanagari via `next/font`. |
| U-16 | S3 | Whole-card `<a>` wraps headings and lists. Its accessible name is the entire card text. | `AppsSection.tsx:108-161` | Make only the CTA the link, or add an `aria-label`. |

## Visual / layout

| ID | Sev | Finding | Evidence | Fix |
|---|---|---|---|---|
| U-17 | S1 | **No product imagery anywhere.** Zero `<img>` or `next/image`. The product is a phone flow, and the site shows only icons. | grep | Add real screen captures in device frames (`05` A). |
| U-18 | S2 | Every section uses the same pattern: pill badge + h2 + subtitle + 3-card grid. There's no visual rhythm, and 4 sections repeat the app list. | `app/page.tsx` sections | Vary layouts: split-sticky, full-bleed, checklist, table. |
| U-19 | S2 | Navy/white alternation produces 6 dark↔light jumps on home. The Hero → SocialProof → Vision run is three dark blocks with no product. | `app/page.tsx:16-18` | Hero dark → light content → one dark "control" band → light CTA. |
| U-20 | S3 | Token drift: the `Badge` "green" variant renders blue (`Badge.tsx:11`). Hex is hard-coded alongside tokens (`#2E86FF` in `NavbarClient.tsx:50,68`, `AppsSection.tsx:156`). Legacy `dq.*` tokens are unused (`tailwind.config.ts:23-30`). Radius is mixed (`rounded-xl`/`rounded-2xl`). | files cited | Clean up tokens in one PR. |
| U-28 | S1 | WhatsApp "Chat with us" `#25D366` on white = **1.98:1**, the worst contrast on the site, present on every page (VERIFIED `09`). | `WhatsAppButton.tsx:41` | Use a darker label colour or an icon-only control with `aria-label`. |
| U-29 | S2 | White on `yellow-500` step badges = **1.92:1**. Required `*` red-400 = 2.77:1 (VERIFIED `09`). | `SolutionSection.tsx:26`, `how-it-works/page.tsx:74`, `ContactForm.tsx:219` | Use a darker amber with dark text, or a tokenised accent ≥ 3:1. |
| U-21 | S2 | The hero mobile stat grid is 4 columns × 10 px labels at 375 px, which is cramped. 2 of its 4 stats are false. | `HeroSection.tsx:107-114` | Remove, or make it 2×2 with true facts. |
| ~~U-22~~ | — | *Removed after verification (`09`):* `lg:scale-105` causes no collision. Card gaps are 24.5 / 23.9 / 22.4 px at 1024 / 1100 / 1280. | `PricingCards.tsx:50` | None needed. |
| U-23 | S3 | The WhatsApp pill (147×46 px) at `bottom-20 right-4` plus the mobile CTA bar cover **11.8%** of a 375×800 viewport (9% at 768). The pill sits 3 px above the bar and **covers page content**, including the hero micro-trust line, the ROI formula and the pricing lists (VERIFIED, `09`). | `WhatsAppButton.tsx:15`, `MobileCtaBar.tsx` | On mobile, merge WhatsApp into the CTA bar as an icon. |

## Navigation / IA

| ID | Sev | Finding | Evidence |
|---|---|---|---|
| U-24 | S2 | Nav labels don't match page purposes ("Platform" → how-it-works, "Solutions" → for-stores). Having both "Home" and the logo link is redundant. | `lib/constants.ts:1-8` |
| U-25 | S2 | "Sign In ↗" (admin app) sits at equal weight next to the primary CTA, and appears in the mobile bar too. Prospects tap it and land on a login page. | `NavbarClient.tsx:60-66`, `MobileCtaBar.tsx:36-43` |
| U-26 | S3 | Footer "Investor Relations" points to `/contact`. Pricing appears in two footer columns. | `Footer.tsx:4,106-110` |
| U-27 | S3 | No custom 404 page. Next's default `out/404.html` is unbranded. | `app/` has no `not-found.tsx`. Correct 404 status confirmed on live (`09`). |

## Performance (static export)

| ID | Sev | Finding | Evidence |
|---|---|---|---|
| P-01 | OK | Static export, `next/font` Inter self-hosted with `display: swap`, no images, lucide tree-shaken. Good baseline. | `next.config.js:3`, `layout.tsx:9-13` |
| P-02 | S3 | 19 client components, most of them only for `useInView`. Every section hydrates. | grep `'use client'` = 19 |
| P-03 | S3 | `framer-motion` 11.18.2 is in deps but unused. It costs nothing now, but adding it naively costs ~34 kB gz. Use `LazyMotion` + `m` + `domAnimation` (~15 kB gz). Size is ASSUMPTION based on published figures. | `package.json:16`, `node_modules/framer-motion/package.json` |
| P-04 | S2 | No analytics or conversion tracking at all (no GA/Plausible/Cloudflare beacon), so you can't measure the 5-second test or form conversion. | grep = 0 |
| P-05 | S2 | The OG image is an SVG, which most social and messaging crawlers don't render. WhatsApp is the main sharing channel in India. | `layout.tsx:48-53`, `public/og-image.svg` |
| P-06 | S3 | Sitemap `lastmod` is 2026-04-25 and maintained by hand. | `public/sitemap.xml` |
| P-08 | S2 | Live Lighthouse mobile: Perf **59** (home) / 66 (for-stores), LCP 7.1 / 4.6 s, CLS 0, A11y 92, SEO 100. TTFB 950 ms because HTML isn't edge-cached (`cf-cache-status: DYNAMIC`) (VERIFIED `09`). | Lighthouse |
| P-09 | S2 | `/icon-192.png` and `/apple-touch-icon.png` are referenced in `layout.tsx:68-71` but untracked in git, so they 404 on live. | curl, `git ls-files` |
| P-10 | S1 | `www.dqstore.in` returns **522**; `www` isn't attached to Pages project `dq-web`. | curl, `wrangler pages project list` |
| P-11 | S3 | Cloudflare Email Obfuscation hides `support@dqstore.in` without JS. | live HTML |
| P-07 | S3 | `out/` and `.next/` exist in the working tree. Check they're git-ignored. `tsconfig.tsbuildinfo` is tracked and modified. | `git status` |

## SEO

| ID | Sev | Finding | Evidence |
|---|---|---|---|
| S-01 | S2 | Title and description lead with "Checkout Intelligence Platform", which has no search demand (ASSUMPTION). Better terms: "scan and go", "self checkout app for retail stores", "billing queue". | `layout.tsx:58,62` |
| S-02 | S2 | JSON-LD asserts 6 languages, ₹2,999 Offer valid to 2027, and "48 hours". Structured data with false facts is a trust and policy risk. | `layout.tsx:15-46` |
| S-03 | S3 | `keywords` meta is ignored by Google. Harmless, but it's noise. | `layout.tsx:63-64` |
| S-04 | S3 | No Hindi landing page or `hreflang`. Optional (`07` Q8). | — |

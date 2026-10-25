# 09 — Verification pass (2026-10-25)

Read-only. No source edited, nothing deployed or committed. Outputs: this file + 39 PNGs in `screenshots/`.

## Method (VERIFIED)
- **Local build of HEAD.** `git archive HEAD` (`ec74f7e`) was exported to a scratchpad copy, so the repo's own `out/` and `.next/` were left untouched. Then `npm ci` → `next build`, which succeeded with 11 static pages. First-load JS: 114 kB home, 87.1 kB shared.
- **Serving.** A small node static server served the export with trailing-slash routing and 404.html for unknown paths. It does **no gzip**, so local byte weights run high.
- **Tooling.** Playwright 1.56.1 driving system Chrome; `@axe-core/playwright`; Lighthouse CLI with the default mobile emulation (throttled Moto G profile). All tools were installed only in the scratchpad, so `package.json` is untouched.
- **Coverage.** 9 routes (including `/no-such-page-xyz/`) × 375/768/1280 px. Each page was scrolled top to bottom before measuring so `.reveal` sections had fired.
  - axe ran at 375 and 1280.
  - A JS-disabled run covered `/`, `/for-stores/`, `/about/`.
  - Pricing was also checked at 1024 and 1100 px.
- **Live site.** curl with a Chrome User-Agent on all routes, plus a visible-text and meta diff against the local build, plus read-only `wrangler pages project list` and `wrangler pages deployment list`.

Screenshot naming: `local_<route>_<width>.png`, `local_drawer_<w>.png`, `local_nojs_<route>_1280.png`, `local_pricing_viewport_<w>.png`, `live_<route>_<w>.png`.

---

## (a) Part 1 — local render findings

### Per route/width summary (VERIFIED, from Playwright report)
| Route | Status | Console errors | Failed requests | Horizontal scroll (375/768/1280) | Text < 12 px (home counts at 1280) | `<h1>` | axe serious/critical (375 / 1280) |
|---|---|---|---|---|---|---|---|
| `/` | 200 | 0 | 0 | none | 9px×4, 10px×97, 11px×9 | 1 | aria-hidden-focus 1 + color-contrast 101 / color-contrast 106 |
| `/how-it-works/` | 200 | 0 | 0 | none | 10px×5, 11px×1 | **0** | a-h-f 1 + c-c 14 / c-c 16 |
| `/for-stores/` | 200 | 0 | 0 | none | 10px×7, 11px×2 | 1 | a-h-f 1 + c-c 29 / c-c 32 |
| `/pricing/` | 200 | 0 | 0 | none | 10px×2, 11px×4 | **0** | a-h-f 1 + c-c 22 / c-c 24 |
| `/about/` | 200 | 0 | 0 | none | 10px×4, 11px×1 | **0** | a-h-f 1 + c-c 17 / c-c 19 |
| `/contact/` | 200 | 0 | 0 | none | 10px×2 | **0** | c-c 15 + **select-name 2** / c-c 18 + select-name 2 |
| `/privacy/`, `/terms/` | 200 | 0 | 0 | none | 10px×1 | 1 | a-h-f 1 + c-c 12 / c-c 13 |
| bogus URL | **404** | 1 (the expected 404 resource) | 0 | none | 10px×1 | 1 ("404") | a-h-f 1 + c-c 9 / c-c 10 |

Notes:
- `aria-hidden-focus` appears only below 1024 px, because the mobile CTA bar only renders there.
- The 404 is Next's default page "404: This page could not be found." inside the site chrome.

### Lighthouse (mobile) — VERIFIED (`lh_*.json` in scratchpad)
| Target | Perf | A11y | Best practices | SEO | LCP | CLS | FCP | TBT |
|---|---|---|---|---|---|---|---|---|
| local `/` | 76 | 92 | 100 | 100 | 5.6 s | 0 | 2.6 s | 40 ms |
| local `/for-stores/` | 77 | 92 | 100 | 100 | 5.6 s | 0 | 2.1 s | 30 ms |
| **live `/`** | **59** | 92 | 100 | 100 | **7.1 s** | 0 | **5.0 s** | 40 ms |
| **live `/for-stores/`** | **66** | 92 | 100 | 100 | 4.6 s | 0 | 4.6 s | 0 ms |

- Failing a11y audits are the same on all four runs: `aria-hidden-focus` and `color-contrast`.
- Live is slower because of **root document 950 ms** (`cf-cache-status: DYNAMIC`, HTML `max-age=0`) and about 1.78 s of render-blocking CSS (Lighthouse insight).
- Local has 0 ms TTFB but no compression (796 KiB vs live 316 KiB).
- LCP is 4.6–7.1 s despite no images. ASSUMPTION: the hero `<h1>` starts at `opacity:0` under `animate-fade-up` (`globals.css:23-24`), which delays the LCP paint. Lighthouse didn't return an element snippet to confirm this.
- SEO 100 doesn't cover the SVG OG image or the missing `<h1>`s, because Lighthouse doesn't check those.

### Confirmed / corrected / new
| ID | Audit statement | Result | Evidence |
|---|---|---|---|
| U-01 | CTA white on `#2E86FF` ≈ 3.5:1 | **CONFIRMED** at 3.52:1. Computed `rgb(255,255,255)` on `rgb(46,134,255)`, 16 px/600 hero and 14 px/600 nav. 96 text nodes use this pair. | Playwright `ctaSample` + contrast grouping; axe `color-contrast` |
| U-02 | `gray-400` on white ≈ 2.5:1 | **CONFIRMED** at 2.54:1 (58 nodes across routes at 375+1280) | contrast grouping |
| U-03 | Blue text on white ≈ 3.5:1 | **CONFIRMED** at 3.52:1 on white (118 nodes). 3.36–3.37 on `#F8FAFC`/`#F9FAFB`, 3.23 for the active nav link on `blue-50`. | contrast grouping |
| U-04 | `muted/60` on navy ≈ 4.1:1 | **CONFIRMED** at 4.12:1 on `#0D1B2A`. **Refined:** 4.28 on footer `#090F17`, `/70` on `#2E3F52` = 3.65, `/50` on footer = 3.32, `/40` on surfaces = 2.40–2.51, `white/40` = 3.66. | contrast grouping |
| U-05 | 4 of 6 marketing pages lack `<h1>` | **CONFIRMED**: `/how-it-works`, `/pricing`, `/about`, `/contact` have 0 (axe `page-has-heading-one` on contact) | report `h1` |
| U-06 | 28 uses of `text-[10px]` | **CONFIRMED and worse rendered**: home alone renders 97 text nodes at 10 px plus 4 at **9 px** ("DQ" logo tiles, ✓ marks) | report `smallText` |
| U-07 | Form labels not associated | **PARTLY CORRECTED**: the 2 `<select>`s fail axe `select-name` (serious). Text inputs **pass** axe because the placeholder supplies an accessible name. The labels are still not programmatically linked (best practice), so the fix is unchanged. | axe `contact@375/1280` |
| U-08 | Only phone is validated | Source-level, unchanged. Not exercised, because the brief forbids submitting. | — |
| U-10 | Hidden mobile CTA bar links focusable | **CONFIRMED**: `aria-hidden="true"`, off-screen, 2 focusable links, not `inert`. axe `aria-hidden-focus` (serious) on every route < 1024 px. | report `hiddenBar` |
| U-11 | Drawer: no focus trap / scroll lock / focus move | **CONFIRMED**. On open, focus stays on the toggle. Tab walks 8 drawer links, then **leaves the drawer** into page content. The page scrolls underneath (`body overflow: visible`). Esc closes it but focus isn't returned to the toggle. There's **no backdrop**, so page content stays visible under the drawer. | report `drawer`; `local_drawer_375.png` |
| U-13 | `animate-pulse` not reduced-motion gated | Source-level, unchanged. Reduced-motion emulation wasn't run. UNVERIFIED in render. | — |
| U-14 | `.reveal` content invisible without JS | **CONFIRMED**. JS disabled: home **33/33** `.reveal` elements at `opacity:0`, for-stores 4/4 (ROI calculator and setup steps), about 12/12. The page renders large blank bands. | `local_nojs_home_1280.png`, `local_nojs_for-stores_1280.png`, `local_nojs_about_1280.png` |
| U-21 | Hero mobile stats cramped | **CONFIRMED, refined**: 4 tiles × 79 px wide with 10 px labels, and no overflow. Still shows false "48hrs" and "6" languages. | report `heroStats`; `local_home_375.png` |
| U-22 | `lg:scale-105` may collide | **WRONG**: gaps between cards are 24.5 px at 1024, 23.9 px at 1100 and 22.4 px at 1280. No overlap. | report `pricing@1024/1100/1280`; `local_pricing_viewport_1024.png` |
| U-23 | WhatsApp + CTA bar cover ~20% of viewport | **CORRECTED**: they cover **11.8%** of a 375×800 viewport and 9% at 768. The WhatsApp pill (147×46) sits **3 px** above the CTA bar at 375, with no overlap between them. It **does cover page content**: H3 "AI-Native Retail OS", the ROI formula on /for-stores, pricing feature lists, and the hero micro-trust line ("48-hour deployment" is half hidden in `local_drawer_375.png`). | report `overlap` |
| P-05 | OG image SVG | **CONFIRMED live**: `og:image` = `https://dqstore.in/og-image.svg`, and `/og-image.png` returns 404 | curl |
| 02 Global | WhatsApp pill overlaps content on small screens | **CONFIRMED** (see U-23) | — |
| 02 /pricing | Growth `lg:scale-105` overlap ("ASSUMPTION, not rendered") | **WRONG**, as U-22 | — |
| NEW N-01 | — | WhatsApp "Chat with us" label `#25D366` on white is **1.98:1**, the worst contrast on the site. It's present on every page. | contrast grouping |
| NEW N-02 | — | White step numbers on `yellow-500` (`SolutionSection`, how-it-works staff steps) are **1.92:1**. Required `*` `red-400` on white is 2.77:1. | contrast grouping |
| NEW N-03 | — | **Broken icons on live**. `layout.tsx:68-71` references `/icon-192.png` and `/apple-touch-icon.png`, and both **404 on dqstore.in**. They exist only as **untracked** files in `public/` (`git status ??`), so a Git-built deploy never receives them. `/logos/favicon.svg` works. | curl statuses; `git ls-files public` |
| NEW N-04 | — | **`www.dqstore.in` is down**, returning HTTP 522 on both http and https. The record is Cloudflare-proxied, but `www` isn't a domain of Pages project `dq-web`, which lists only `dqstore.in`. | curl; `wrangler pages project list` |
| NEW N-05 | — | Live HTML isn't edge-cached (`cf-cache-status: DYNAMIC`, `Cache-Control: public, max-age=0, must-revalidate`), which gives 950 ms TTFB in Lighthouse. Static chunks are cached (`max-age=14400`). | headers |
| NEW N-06 | — | Cloudflare **Email Obfuscation** is on. Live HTML shows `[email protected]` and needs `cdn-cgi/.../email-decode.min.js` to reveal `support@dqstore.in`. Without JS, and for some crawlers, the email isn't visible. | live HTML |
| NEW N-07 | — | Lighthouse mobile performance is 59 on live home, below the ≥ 90 budget proposed in `05`. | Lighthouse |
| NEW N-08 | — | 404 page is the unbranded Next default inside site chrome. It returns the correct 404 status on both local and live. | report; curl |
| OK | — | 0 console errors, 0 failed requests and 0 horizontal scroll on all 27 route/width combinations, local and live. | report |

---

## (b) Part 2 — live vs local build (HEAD `ec74f7e`)

### HTTP (VERIFIED, curl with Chrome UA, 2026-10-25 15:24 UTC)
| URL | Result |
|---|---|
| `https://dqstore.in/` + all 7 routes | 200, no redirect. `Server: cloudflare`, `cf-cache-status: DYNAMIC`, `Cache-Control: public, max-age=0, must-revalidate`, no ETag/Last-Modified on HTML. CF-RAY present. |
| `https://dqstore.in/this-page-does-not-exist/` | **404** with the Next default page |
| `http://dqstore.in/` | 301 → `https://dqstore.in/` |
| `https://dqstore.in/pricing` | 308 → `/pricing/` (trailing slash) |
| `http://www.dqstore.in/`, `https://www.dqstore.in/` | **522**, origin unreachable |
| `robots.txt`, `sitemap.xml`, `og-image.svg`, `logos/favicon.svg` | 200. **md5 identical to repo** files. Sitemap `lastmod` = 2026-04-25 on all 8 URLs. |
| `og-image.png`, `favicon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, `favicon.ico` | 404 |
| Web3Forms `OPTIONS https://api.web3forms.com/submit` with browser UA and `Origin: https://dqstore.in` | **200**, `access-control-allow-origin: *`, methods `OPTIONS,POST`. The endpoint is reachable and CORS-OK. A curl UA without browser headers gets 403, which is bot filtering. **Form not submitted.** |

### Build identity (VERIFIED)
- Live `buildId` is `NpLp16JU-PwHWG3Vh5KCP`. The repo's stale `out/` (built 2026-05-29 10:43, **9 min before** the `ec74f7e` commit) has `82cbbONGag_GlQW3eICPZ`. My fresh HEAD build has `9Hh0ot6gOrP26keUHJjmd`. Build ids are per build, so they're expected to differ.
- Live CSS `7e9ff8ad1f77e2e5.css` is **byte-identical** (md5 `62f068a5…`) to the repo `out/` CSS. My fresh build's CSS differs only in the `next/font` Inter hash and Google Fonts unicode-range. ASSUMPTION: that's caused by today's Google Fonts response, and all Tailwind classes are identical.
- Shared chunks `23-…`, `231-…`, `868-…`, `916-…`, `fd9d1056-…` and `polyfills-…` are identical. App, layout and page chunk hashes differ, as expected for separate builds.

### Text / meta / string comparison (VERIFIED, `cmp.js`, after normalising Cloudflare email obfuscation)
- **Visible text: identical live ↔ local HEAD on all 9 routes.** It's also identical to the repo's old `out/`.
- `<title>`, meta description, canonical, `og:title`, `og:image`, `twitter:title`: **identical** on all routes.
- JSON-LD: identical (home, pricing).
- Nav labels (Home · Platform · Solutions · Pricing · About · Contact) and footer: identical.
- Decoded live email is `support@dqstore.in`. That's the change in `ec74f7e`; the previous commit `32614e0` had a Gmail address (`git show 32614e0:lib/constants.ts`).

| String | Live (occurrences in HTML) | Local HEAD build | Routes |
|---|---|---|---|
| "48-hour" | ✔ 51 | ✔ 51 | all 9 |
| "48 hours" | ✔ 43 | ✔ 43 | all 9 |
| "6 Indian languages" | ✔ 4 | ✔ 4 | home |
| "All Systems Live" | ✔ 1 | ✔ 1 | home |
| "Operational" | ✔ 58 | ✔ 58 | all 9 (footer) |
| "₹2,999" | ✔ 16 | ✔ 16 | home, for-stores, pricing, 404 (meta) |
| "Loyalty" | ✔ 1 | ✔ 1 | pricing |
| "Up to 3 outlets" | ✔ 1 | ✔ 1 | pricing |
| "Q3 2026" | ✔ 14 | ✔ 14 | home |
| "RBI-compliant" | ✔ 10 | ✔ 10 | home, how-it-works, for-stores, pricing, about (CtaBanner) |
| "DQ Technologies Pvt Ltd" | ✔ 26 | ✔ 26 | all 9 (terms ×10) |

Counts include the RSC payload, so each visible string appears about twice. Both sides were counted the same way.

### Cloudflare Pages (VERIFIED, read-only wrangler 4.125.0)
- Project **`dq-web`**: domains `dq-web-18s.pages.dev`, `dqstore.in` (**no `www`**), Git provider: **Yes**.
- Repo `origin` = `github.com/kusumeshkant/dq_web`, `main` = `origin/main` = `ec74f7e`.
- Latest **Production** deployment: `9dbaf449-7542-4d33-b5f7-7db7d33104ea`, branch `main`, source **`ec74f7e`**, about 4 months ago, preview `https://9dbaf449.dq-web-18s.pages.dev`.
- Previous production deployments: `32614e0`, `326e33b`, `4b44ec4`, `914bd21`, `943502a`.
- Still to check manually in the dashboard:
  - the build command and output dir (ASSUMPTION: `npx next build` → `out`)
  - whether "Email Address Obfuscation" should stay on (Scrape Shield)
  - the DNS record for `www` (add `www` as a Pages custom domain, or add a redirect rule `www` → apex)

### Live axe/Lighthouse vs local
- axe serious/critical on live `/` and `/for-stores/` at 375 and 1280 are **the same counts as local** (home 101/106 contrast nodes, for-stores 29/32, plus aria-hidden-focus at 375). Live had 0 console errors and 0 failed requests.
- Lighthouse a11y 92 on both. Performance is lower on live (see table), and the cause is hosting (TTFB, no HTML caching), not code.

---

## (c) Verdict on Q16
**Live matches HEAD.** `dqstore.in` is Cloudflare Pages project `dq-web`, auto-built from GitHub `main` at commit **`ec74f7e`**. The rendered text, meta, JSON-LD and the 11 audit strings are identical to a fresh build of `ec74f7e`.

The only differences are deployment-level:
1. `www.dqstore.in` returns 522.
2. `/icon-192.png` and `/apple-touch-icon.png` 404, because those files were never committed.
3. Cloudflare email obfuscation rewrites the email address.
4. The build id and chunk hashes differ, as they do for any separate build.

The repo's local `out/` (2026-05-29 10:43) is a pre-commit build with the same text. It isn't what's deployed.

---

## (d) Corrections to 00–07 (proposed, NOT applied)

| File | Current text | Proposed edit |
|---|---|---|
| `04_ux_findings.md` U-22 | "`lg:scale-105` on the highlighted pricing card can collide with neighbours at a narrow `lg` width (ASSUMPTION)." | → "**Verified no collision**: card gaps are 24.5 / 23.9 / 22.4 px at 1024 / 1100 / 1280. Keep it or drop it with the pricing redesign. Severity: none." |
| `04` U-23 | "…cover about 20% of a 640 px viewport." | → "WhatsApp pill (147×46 px) + CTA bar cover **11.8%** of a 375×800 viewport (9% at 768). The pill sits 3 px above the bar and **covers page content**, including the hero micro-trust line and the ROI formula (VERIFIED, `09`)." |
| `04` U-07 | "Screen readers announce unlabeled fields." | → "The 2 `<select>`s have **no accessible name** (axe `select-name`, serious). Text inputs get a name only from the placeholder. Labels aren't programmatically linked. Fix unchanged." |
| `04` U-04 | "≈ 4.1:1, and `/50`, `/40`, `white/40` are lower" | Append: "Rendered values: `/60` 4.12 on navy and 4.28 on footer; `/70` on `#2E3F52` 3.65; `/50` 3.32; `/40` 2.40–2.51; `white/40` 3.66 (VERIFIED, `09`)." |
| `04` U-06 | "28 uses of `text-[10px]`" | Append: "Rendered: 97 nodes at 10 px + 4 at **9 px** on home." |
| `04` U-14 | (assumption-style wording) | Append: "VERIFIED with JS disabled: 33/33 reveal blocks invisible on home, 4/4 on for-stores, 12/12 on about (`screenshots/local_nojs_*`)." |
| `04` contrast table | — | **Add U-28** (S1): "WhatsApp 'Chat with us' `#25D366` on white = **1.98:1**." **Add U-29** (S2): "White on `yellow-500` step badges = 1.92:1. Required `*` red-400 = 2.77:1." |
| `04` performance | — | **Add P-08** (S2): "Live Lighthouse mobile: Perf **59** (home) / 66 (for-stores), LCP 7.1 / 4.6 s, CLS 0, A11y 92, SEO 100. TTFB 950 ms because HTML isn't edge-cached (`cf-cache-status: DYNAMIC`)." **Add P-09** (S2): "`/icon-192.png` and `/apple-touch-icon.png` are referenced in `layout.tsx:68-71` but untracked in git, so they 404 on live." **Add P-10** (S1): "`www.dqstore.in` returns 522; `www` isn't attached to Pages project `dq-web`." **Add P-11** (S3): "Cloudflare Email Obfuscation hides `support@dqstore.in` without JS." |
| `04` U-27 | "Next's default `out/404.html` is unbranded." | Append: "Correct 404 status confirmed on live." |
| `02_page_by_page.md` /pricing | "`lg:scale-105` on the Growth card … can overlap neighbours at the `lg` breakpoint (ASSUMPTION, not rendered)." | → Delete that sentence (VERIFIED no overlap). |
| `02` Global, WhatsAppButton | "It overlaps content on small screens at `bottom-20 right-4`" | → "VERIFIED: it covers content (hero micro-trust line, ROI formula, pricing lists) and sits 3 px above the mobile CTA bar." |
| `00_summary.md` "Also worth fixing early" | OG bullet: "…don't render SVG…" | Append bullets: "**`www.dqstore.in` is down (522)**", "Favicon/app-icon PNGs 404 on live (never committed)", "Live mobile Lighthouse Perf 59". |
| `00_summary.md` header | "Repo HEAD `ec74f7e` (2026-05-29)." | → "Repo HEAD `ec74f7e` (2026-05-29) = **live production** (Cloudflare Pages `dq-web`, deployment `9dbaf449`; VERIFIED in `09`)." |
| `07_open_questions.md` Q16 | "UNVERIFIED. Confirm the deploy source on Cloudflare Pages." | → "**Answered:** live = `ec74f7e` via Pages Git build (`09` §c). New action: attach `www` or add a redirect, and commit the icon PNGs." |
| `01_claims_audit.md` (all rows) | — | No edits needed. All 11 audited strings are present live exactly as cited. |

---

## Summary
1. I built HEAD `ec74f7e` locally in a scratchpad copy and rendered all 9 routes at 375/768/1280 in Chrome via Playwright: 0 console errors, 0 failed requests, 0 horizontal scroll.
2. **Q16:** live is `ec74f7e` (Pages project `dq-web`, deployment `9dbaf449`). Visible text, meta and JSON-LD match a fresh HEAD build on all routes.
3. All 11 audited strings ("48-hour" through "DQ Technologies Pvt Ltd") are present on live, with the same counts as the local build.
4. **New S1:** `www.dqstore.in` returns 522, because `www` isn't attached to Pages.
5. **New:** the favicon/app-icon PNGs 404 on live because they were never committed. Email obfuscation is on. HTML isn't edge-cached, so TTFB is 950 ms.
6. Contrast U-01 to U-04 confirmed from computed styles: 3.52, 2.54, 3.52, 4.12. Worst is the new WhatsApp label at 1.98:1, and step badges are 1.92:1.
7. U-14 confirmed: with JS off, every `.reveal` block is invisible (33/33 on home).
8. U-10 and U-11 confirmed: axe `aria-hidden-focus` on all mobile routes; the drawer has no focus trap, no scroll lock, no backdrop, and focus isn't returned after Esc.
9. Two audit claims were wrong: no `lg:scale-105` pricing collision, and fixed overlays cover 11.8% of the viewport, not 20%. U-07 is refined to the selects failing `select-name`.
10. Lighthouse mobile: live home Perf 59 / A11y 92 / SEO 100 / CLS 0 / LCP 7.1 s; local 76 / 92 / 100 / 0 / 5.6 s. Exact edits for 00, 02, 04 and 07 are proposed in (d) and not applied.

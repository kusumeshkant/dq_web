# 02 — Page by page

Routes (VERIFIED `app/`): `/`, `/how-it-works`, `/for-stores`, `/pricing`, `/about`, `/contact`, `/privacy`, `/terms`. No 404 page exists beyond the Next default. Nav labels don't match the routes: "Platform" goes to `/how-it-works` and "Solutions" goes to `/for-stores` (`lib/constants.ts:3-4`).

Every page except `/contact` ends with the same `CtaBanner`, which repeats "48 hours" three times (`CtaBanner.tsx:26,40,50`).

---

## `/` Home — `app/page.tsx`
**Should do:** explain DQ in 5 seconds, show the phone flow, show the owner what they control, then capture a pilot lead.

**Current section order (VERIFIED `app/page.tsx:16-26`), with the issues in each:**
| # | Section | Issue |
|---|---|---|
| 1 | Hero | Abstract headline. "48 h", "6 languages" and "All Live" are false (C-01/09/14). The right panel lists 3 apps + status rather than showing the product. Mobile stats grid is 4 columns of 10 px text (`HeroSection.tsx:107-114`). |
| 2 | SocialProofStrip | It isn't social proof: it repeats the app list for the 2nd time. Component is named `AuthorityStrip` while the file is `SocialProofStrip` (`:48`). |
| 3 | PlatformVisionSection | Four-phase AI roadmap shown to store owners before they've learned what the product is. Phase "04" sits on top, so the reading order is reversed. |
| 4 | ProblemSection | Strong headline (`ProblemSection.tsx:22`). The stats have no source (C-47). Should come right after the hero. |
| 5 | SolutionSection | Scan → Pay → Go is the correct core explainer. Static icons only. Should be the #2 section and the motion centrepiece. |
| 6 | AppsSection | 3rd repeat of the app list. Cards link to the live apps, where nobody can pay. False feature bullets (C-31/32/33/34). |
| 7 | TestimonialsSection | File name is misleading: it has no testimonials and is an "Intelligence" section. "This is not a feature. It is the architecture." (`:83`) |
| 8 | InfrastructureSection | 4th repeat. Lists Tablet/Mobile/Web as "platforms". "All Systems Live" pulse. |
| 9 | IndustriesSection | 8 verticals dilute the ICP (C-54). |
| 10 | WhyDQSection | False "48 h" and "6 languages". Also overlaps with Problem. |
| 11 | CtaBanner | Good structure. False numbers. |

**Recommended structure (RECOMMENDATION, detail in `06`):** Hero (plain promise + phone visual) → Problem (queue cost) → How it works (scroll story) → Keep your till (no hardware) → Owner control (discount authority, price lock, log) → Analytics preview → What you need to start → Founding-partner offer + form → FAQ.

## `/how-it-works` — `app/how-it-works/page.tsx`
**Should do:** the three journeys, accurate to the code.
- Issues:
  - Customer step 1 says "Download, free on Android/iOS" (`:19`), but there's no published app.
  - Admin step 1 says "Android, iOS, or tablet — install once" (`:34`), which conflicts with the web-first copy elsewhere.
  - Staff steps use food-service statuses (`:29`).
  - Push claim on web is false (`:28`).
  - No discount journey and no onboarding journey.
  - Text-only vertical lists with zero visuals (`FlowSection.tsx`).
  - `accentColor` prop is passed but unused (`FlowSection.tsx:18`).
- Recommended: tabbed or stacked journeys (Shopper / Staff / Owner), each with phone screens. See `03`.

## `/for-stores` — `app/for-stores/page.tsx`
**Should do:** convert the store owner by handling objections and stating requirements.
- Issues:
  - Deployment time contradicts itself on the same page: meta "under 1 hour" (`:10`), hero "48-hour" (`StoresHero.tsx:51`), "one afternoon / same day" (`GettingStarted.tsx:22,35`), FAQ "under an hour" (`ObjectionsSection.tsx:30`).
  - Price "From ₹2,999" (`StoresHero.tsx:29`).
  - The ROI calculator assumes every lost customer is recovered, at ₹2,999 cost (`RoiSection.tsx:43-46`).
  - FAQ answers are wrong on downloads, offline and hardware (C-03/33).
  - "Customers find you on DQ app" (`GettingStarted.tsx:24`) doesn't say how (store code / QR poster).
  - No "what you need" checklist.
- Hero headline "Turn every customer's phone into a checkout terminal" (`StoresHero.tsx:23-24`) is the clearest line on the site. KEEP it, or promote it to the home page.
- Recommended: Hero → What you need (checklist) → 3-step setup → ROI calculator (re-based) → Objections FAQ (rewritten) → Pilot CTA.

## `/pricing` — `app/pricing/page.tsx`
**Should do:** be honest about pilot status and still capture intent.
- Issues: three committed tiers full of absent features (`01` §D). The annual toggle encourages commitment that the product can't support. The FAQ JSON-LD drifts from the visible FAQ (`pricing/page.tsx:12` vs `PricingFaq.tsx:12`).- Recommended: one "Founding Partner" card (free during the pilot, what's included, what we ask in return) + "Pricing after the pilot" explainer + FAQ. Copy is in `06`.

## `/about` — `app/about/page.tsx`
**Should do:** founder credibility and why this product.
- Issues: the story opens on groceries (`StorySection.tsx:11`). Investor material (Perpule, 180K TAM, "Why Now", moat) is aimed at store owners. Stats bar has 2 false items out of 4 (`AboutStatsBar.tsx:7-8`). No founder name, photo, or LinkedIn. That is the biggest trust gap for a pre-revenue startup (ASSUMPTION).
- Recommended: Founder note (who, why fashion retail, what's built) → What's built today vs next (honest) → How we work with pilot stores → Contact. Move the market thesis to an unlinked `/investors` page or to the deck.

## `/contact` — `app/contact/page.tsx` + `ContactForm.tsx`
**Should do:** pilot application.
- Issues:
  - Title "Request a Demo" + "48-hour deployment" (`:8,11,52,88`).
  - Form a11y and validation problems (`04` U-07/U-08).
  - No question about whether the store's products have barcodes, which is the #1 qualifier (ASSUMPTION).
  - "Daily orders" uses "orders" where a retailer thinks in "bills/footfall".
- Recommended: rename to "Apply to be a founding store". Fields: name, store, city, mobile, category, "Do your products have barcodes? Yes / Some / No", "Bills per day", "Current billing software". Keep WhatsApp as a parallel path.

## `/privacy`, `/terms`
- Privacy: correct on card data (`privacy/page.tsx:55-56`). Names Firebase and Razorpay as processors (`:46`). No DPDP Act 2023 grievance-officer details (ASSUMPTION: needed for Indian compliance, legal review required).
- Terms: entity name conflict (C-52). The 30-day trial (`:41`) conflicts with the founding-partner model.
- Recommended: legal review before any pilot signs. Flagged in `07`.

## Global
- `Navbar`: "Sign In ↗" sends prospects to the admin app (`NavbarClient.tsx:60-66`). It's fine for existing stores, but in the mobile bar it competes with the primary CTA (`MobileCtaBar.tsx:36-43`).
- `Footer`: hard-coded "System Status — Operational" (`:37-49`), and "Investor Relations" points to `/contact`.
- `WhatsAppButton`: always visible. VERIFIED (`09`): it covers content (hero micro-trust line, ROI formula, pricing lists) and sits 3 px above the mobile CTA bar, at `bottom-20 right-4` (`WhatsAppButton.tsx:15`). See `04`.

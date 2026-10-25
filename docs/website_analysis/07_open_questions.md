# 07 — Open questions (decisions needed from you)

Each question says why it blocks something and gives my default if you don't decide.

| # | Question | Why it matters | Blocks | My default (RECOMMENDATION) |
|---|---|---|---|---|
| Q1 | ~~Which shopper channel do we market?~~ **CLOSED — Android app** (decided 2026-10-25). | Site copy now says shoppers use the DQ Android app; iPhones not supported yet; no web/browser/PWA wording; no Play Store claim, badge or link. | — | Distribution and release signing tracked as PB-6 in `08_backend_followups.md`. |
| Q2 | How does a shopper pick the store in production today: nearby (GPS) list, store code, or entrance QR? | "Scan the store QR" is the copy I drafted. Store code entry is on WIP branch `wip/web-store-code-entry` (memory). | `03` (a), `05` A step 1 | Entrance QR poster with the store code as fallback. Confirm what prod supports. |
| Q3 | **Settlement model:** today all shopper money settles to DQ's single Razorpay account. Will stores need their own Razorpay account (Route / sub-merchant), and what fee do we state? | It's regulatory (payment aggregator) and a prerequisite on the "What you need" list. It also changes the pricing wording. | `06` §4–5, Terms | Say nothing about settlement on the site until this is decided. Handle it in the pilot agreement. |
| Q4 | Should staff discount control be in every tier? Right now `coupons` is off on Starter (`resolvers.js:1289`, seed `:50`). | It's the strongest differentiator, and the site will lead with it. | Pricing copy, `05` C | Include it for all founding partners. Change the plan flags before tiers return. |
| Q5 | Confirm the pricing status wording: "free during pilot, pricing shared before the pilot ends, no auto-charge". How long is the pilot (60/90 days)? | Replaces ₹2,999/₹5,999 everywhere, including JSON-LD and the ROI calculator. | `/pricing`, CTA | Free pilot, 90 days, no card. |
| Q6 | **Legal entity name** for the footer and Terms: "DQ Technologies Pvt Ltd" (site) vs "Digital Queue Private Limited" (templates) vs not yet incorporated. | Naming an entity that doesn't exist is a legal risk. | Footer, Terms, Privacy | Use "DQ (operated by [founder name], India)" until incorporation. Get legal review. |
| Q7 | Can the About page show the **founder's name, photo, LinkedIn** and a short story? | It's the biggest trust lever a pre-revenue startup has, and today there's no human on the site. | `/about`, hero trust line | Yes: founder note + photo. |
| Q8 | Hindi: a full `/hi` page, Hindi lines on the English home page, or neither for now? | Needs a Devanagari font, `lang` attributes, and translation QA. | `06` §3 | Hindi hero + owner-control lines only, then a full page after the first pilot. |
| Q9 | Should investor content (Perpule, 180K TAM, "Why Now", phased AI roadmap) go to a `noindex` `/investors` page or be removed from the site entirely? | It's currently on store-facing pages. | `/about`, home §3 | Remove from the site. Keep it in the deck. |
| Q10 | Is the **staff app usable in production** today? Staff-invite v2 is unmerged (memory), and on `main` registration created customer accounts (master context §3). | The staff journey and the "3 apps" claim depend on it. | `03` (b), how-it-works | Treat it as UNVERIFIED and check before relaunch. |
| Q11 | May we use **real app screenshots** (customer, staff, admin)? Who captures them, and from which build? | Required for `05` A/C/E and U-17. | Visual work | Capture from UAT with sample "Demo Store" data. |
| Q12 | Do you have permission to name brands (Zudio / Puma / Brand Factory) as ICP examples on the public site? | Naming brands implies a relationship with them. | Copy | Use "value fashion and branded lifestyle stores", without brand names. |
| Q13 | Analytics tool for the site (Cloudflare Web Analytics, Plausible, GA4)? | Without it, the conversion work can't be measured (P-04). | Launch | Cloudflare Web Analytics: free, no cookie banner, fits Pages hosting. |
| Q14 | Should the lead form also post to a CRM or sheet, not just Web3Forms email? Should it capture UTM/source? | The marketing OS (memory) tracks leads. | Form rebuild | Web3Forms + hidden UTM fields now, CRM later. |
| Q15 | Keep the WhatsApp floating button? It overlaps content on mobile (U-23). | WhatsApp is likely the best channel in India (ASSUMPTION). | Layout | Keep it, merged into the mobile CTA bar. |
| Q16 | ~~Is the deployed site built from HEAD `ec74f7e`?~~ **CLOSED** | **Answered:** live = `ec74f7e` via Pages Git build (project `dq-web`, deployment `9dbaf449`; `09` §c). | — | New actions: attach `www` or add a redirect, and commit the icon PNGs. |

**When you've decided, I'd do it in this order:** truth pass (`01` REMOVE/REWORD) → IA + copy (`06`) → form + a11y fixes (`04` S1s) → visuals → motion (`05` A, C, E, B, D).


## Status after Phases 1–4 (2026-10-26)

**Closed / decided:** Q1 (Android app), Q5 (free 90-day pilot, no card, no contract, pricing not final), Q7 (founder block — see Q18), Q8 (Hindi on hero + owner control only, device fonts), Q9 (investor content removed from the site), Q11 (Phase 3 uses HTML recreations labelled "Illustrative"; real captures can replace them via `<Screen src>`), Q15 (WhatsApp merged into the mobile CTA bar; desktop pill kept), Q16 (live = `ec74f7e`).

**Still open:**

| # | Question | Why it still matters |
|---|---|---|
| Q2 | How do shoppers pick the store (nearby list, store code, entrance QR)? | The store-QR screen is built but deliberately not shown until this is decided |
| Q3 | Settlement model (single DQ Razorpay account vs per-store) | Regulatory; affects Terms and the "What you need" list. The site says nothing about settlement |
| Q4 | Staff discounts on every plan (`coupons` is off on Starter) | The site leads with discount control; founding stores must be on a plan with `coupons: true` (08 PB-2) |
| Q6 | Legal entity name | Site and Terms say "DQ" only; legal review needed (08 PB-5) |
| Q10 | Is the staff app usable in production? | The site now says "in the pilot build" for the staff app |
| Q12 | Naming brands as ICP examples | Moot on the site today (no brand names used); keep for sales material |
| Q13 | Site analytics tool | Still none; conversion can't be measured |
| Q14 | CRM/sheet for leads | UTM/page/referrer now captured in the Web3Forms email; CRM not decided |
| **Q17** | **Is 918754886595 (the WhatsApp number in every `wa.me` link) a business number or the founder's personal phone?** | The brief says no founder phone number on the site. It is not visible text, but it is in every WhatsApp link |
| **Q18** | **Approve the founder note** in `lib/site.ts` → `FOUNDER.note` (still marked DRAFT) | No approval has been received; the text shown on /about is the draft |
| **Q19** | Accept "Response within 24 hours / We call you within 24 hours, Mon–Sat 10am–7pm IST" as an operational promise? | It is the only service-level promise on the site |

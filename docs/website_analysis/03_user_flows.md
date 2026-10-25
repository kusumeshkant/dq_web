# 03 — User flows

For each journey: what the code does (VERIFIED), what the site says today, the gaps, and a proposed explainer section (RECOMMENDATION).

---

## (a) Shopper: enter store → scan → cart → pay → exit QR

**Code reality**
1. Pick the store: nearby-store lookup (`dq_app/lib/src/domain/usecase/get_nearby_stores_usecase.dart`). Store code entry is on the `wip/web-store-code-entry` branch (memory; UNVERIFIED whether it's live).
2. Scan barcodes with the camera. The cart validates stock against the server.
3. Pay with Razorpay native SDK (`service_core/payment/razorpay_service.dart`). **Blocked on web** (`cart_bottom_bar.dart:346`). The web fix is on unmerged `feature/web-checkout` (`e477962`).
4. Exit pass: DQX1 QR + typeable 24-char code shown in 6 groups (`dq_app` commits `4f7d87e`, `9097f54`).
5. Languages: English, Hindi (`l10n/language_controller.dart:14-17`).

**Where the site explains it**
| Step | Site location | Status |
|---|---|---|
| Find store | `how-it-works/page.tsx:20` | Partial (nearby only, no store code / QR poster) |
| Scan | `SolutionSection.tsx:13`, `how-it-works:21` | OK |
| Pay | `SolutionSection.tsx:25`, `how-it-works:22` | **False today** on web |
| Exit QR | `SolutionSection.tsx:37`, `how-it-works:23` | OK, but over-claims theft-proofing (C-30) |
| Install / open | `how-it-works:19` vs `AppsSection.tsx:30` | **Contradictory** |

**Gaps:** no visual of any screen. Nothing says the store can keep its till for shoppers who prefer it. No fallback when the network is down.

**Proposed explainer: "Shop. Scan. Pay. Walk out."** (motion concept A, `05`)
- Sticky phone mockup on the left, steps scrolling on the right: 1 Scan the store QR → 2 Scan tags → 3 Pay in app → 4 Show exit pass.
- Each step: one line of copy + one real screen.
- Footnote: "Prefer the counter? Your till still works."

---

## (b) Staff: verify exit · request discount authority · issue discount

**Code reality**
- **Exit verification:** staff scan or type the customer's exit code (Task 6 live per `project_prod_deploy_state` memory; UNVERIFIED in this pass).
- **Discount authority (request):** staff submit a reason and a requested max % (must be > 0 and ≤ 50) (`backend services/permissionService.js:35-38`). Only one pending request per staff/store/type (`models/PermissionRequest.js:8-9`).
- **Admin decision:** approve at the requested % **or a lower one** (`grantedMaxDiscountPercent`, `PermissionRequest.js:35-36`, `permissionService.js:96`). Reject and revoke are supported. History is kept forever.
- **Issue discount:** staff generate a code ≤ their granted max %, which expires in 15 min (`services/discountService.js:7,16-35`). The customer applies it. When it's consumed, an **append-only DiscountLog** records staff, %, original, discount and final amount (`models/DiscountLog.js`).
- **Guardrails:** staff can't change price, stock or MRP even with an edit grant (`resolvers.js:1135-1151`). All product edits are logged (ProductChangeLog).
- **Plan gate:** discount codes need `coupons`, which is false on Starter (`resolvers.js:1289`; seed `:50`).
- **Push:** skipped on web (`dq_staff/.../notification_service.dart:18`).

**Where the site explains it**
| Step | Site | Status |
|---|---|---|
| Verify exit | `how-it-works:30`, `SolutionSection.tsx:37` | OK |
| Order status management | `how-it-works:29`, `AppsSection.tsx:58` | **Wrong model** (Accept/Hold/Reject) |
| Request discount authority | — | **Missing** |
| Admin approves lower % | — | **Missing** |
| Discount log | — | **Missing** |
| Staff can't edit price | — | **Missing** |

**Proposed explainer: "Discounts your staff can't abuse."** (motion concept C)
- 3 cards connected by an animated path: Staff asks "Up to 20%: regular customer" → Owner approves **10%** → Every discount is logged with name, bill and amount.
- Side note: "Staff never touch price or stock."
- This is the strongest owner-trust message DQ has, and it's currently invisible.

---

## (c) Owner: onboarding (3 screens) → catalogue → go live → analytics

**Code reality**
- **Onboarding:** `dq_admin/.../onboarding_page.dart:46` has 3 steps. (1) Store details with map picker (`stores/map_picker_page.dart`). (2) Inventory upload, which can be skipped (`:299`). (3) Done, showing the store code (`:642`).
- **Catalogue:** Excel bulk upload with column mapping (`data/services/excel_parser_service.dart`, `bulk_upload/column_mapping_screen.dart`). Fields include barcode, name, price, MRP, stock, reorder level, and apparel fields (size, colour, gender) (`backend services/productService.js:137`).
- **Staff:** invite-gated registration is on an unmerged branch (memory: staff-invite v2). On `main`, staff registration was broken (master context §3). This is a CONFLICT/UNVERIFIED for production today.
- **Analytics:** peak hours and peak days, abandonment rate, week-over-week, top products, 30-day revenue (`schema/typeDefs.js:531-556`, `orderService.js:310,432`). Staff performance is Growth-gated (`resolvers.js:569`). Discount log is per store and per staff (`discountService.js:113,121`).
- **Prerequisites (from code + ASSUMPTION):**
  - Every SKU has a scannable barcode (required).
  - Product list in Excel.
  - One staff phone/browser at the exit.
  - Store Wi-Fi/4G.
  - Shoppers with smartphones.
  - Razorpay: **no per-store account today**. All funds settle to DQ's account (master context §3). Don't list "your Razorpay account" until the settlement model is decided (`07` Q3).

**Where the site explains it**
| Step | Site | Status |
|---|---|---|
| Sign up / store details | `GettingStarted.tsx:9-13` | OK (says 10 min) |
| Catalogue | `GettingStarted.tsx:15-19` | **Good**: names the barcode/name/price/stock fields |
| Staff setup | `how-it-works:27` | Vague |
| Go live / customers find you | `GettingStarted.tsx:21-25` | Vague ("find you on DQ app") |
| Analytics | `AppsSection.tsx:82-87`, `TestimonialsSection.tsx` | Mix of real items and fiction |
| Requirements checklist | — | **Missing** |

**Proposed explainers**
1. **"Live in 3 screens"** stepper (motion concept E): Store details → Upload Excel → Your store code + QR poster. Caption: "Under 5 minutes once your barcoded product list is ready."
2. **"What you need"** checklist (static, no motion): barcoded products ✔ · Excel list ✔ · one staff phone ✔ · internet ✔ · no new hardware.
3. **"See your store clearly"** analytics preview (motion concept D): peak-hour bars, abandonment funnel, discount depth by staff, with count-up values. Use **labelled sample data** ("Sample store").

---

## Cross-journey diagram (for the How-it-works hero)
```
Shopper phone ──scan──▶ Cart ──pay (Razorpay)──▶ Paid order ──▶ Exit pass (QR / code)
                                                       │                    │
Staff app  ◀──── live order feed ──────────────────────┘     verify at exit ┘
   │  request discount authority ──▶ Owner (admin) approves ≤ requested %
   └─ issue 15-min code ──▶ shopper applies ──▶ DiscountLog (immutable)
Owner admin ◀── peak hours · abandonment · discount depth · top products
```

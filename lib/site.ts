// ─────────────────────────────────────────────────────────────────────────────
// SITE CLAIMS — single source of truth for every product / offer claim on the
// website. Each string here has been checked against the code
// (docs/website_analysis/01_claims_audit.md). Do not add a claim anywhere else;
// add it here, with the C-ID it answers to.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_URL = 'https://dqstore.in'
export const BRAND = 'DQ'

export const CLAIMS = {
  /** Category line — replaces "Checkout Intelligence Platform" (C-43) */
  category:      'Scan-and-go self-checkout for fashion & lifestyle stores',
  categoryShort: 'Scan-and-go self-checkout',

  /** Setup time — replaces 48 h / < 1 h / one afternoon / same day (C-09–C-13) */
  setup:      'Set up in under 5 minutes once your barcoded product list is ready',
  setupShort: 'Set up in under 5 minutes',

  /** Languages — replaces "6 Indian languages" (C-14) */
  languages: 'English & Hindi',

  /** Status — replaces Live / Operational / All Systems Live (C-01) */
  status: 'Now onboarding founding stores',
  pilotNote: 'DQ is in its founding-partner pilot.',

  /** Payments — replaces "UPI, cards, or wallets" + RBI-compliant (C-02, C-06) */
  payments: 'Shoppers pay in the app through Razorpay (UPI and cards)',
  cardData: 'Card data is never stored by DQ — payments are handled by Razorpay',
  cardDataShort: 'Card data never stored by DQ',

  /** Hardware + till (C-02 "No POS terminal" reworded) */
  hardware: 'No new hardware',
  till:     'Works alongside your existing till',

  /** Exit — replaces "theft-proof / shrinkage eliminated" (C-30) */
  exit: 'Every exit is checked against a paid order',

  /** Discount control — replaces "Promotional Coupon Engine" (C-21, C-38, C-39) */
  discounts:     'Staff discounts with owner-set limits and a full log',
  priceLock:     'Staff can never change a price or stock count',
  discountLog:   'Every discount is logged with the staff name, bill and amount',
  approveLower:  'You approve staff discount limits — or set a lower one',
} as const

export const OFFER = {
  name:       'Founding Partner',
  pilotDays:  90,
  headline:   'Free 90-day pilot',
  terms:      'No card. No contract.',
  termsShort: 'No card · No contract',
  /** Pricing status — replaces ₹2,999 / ₹5,999 tiers (C-15–C-28) */
  afterPilot: "Pricing isn't final yet. We'll share it with you before your pilot ends, and you decide whether to continue. There's no automatic charge.",
  included: [
    'Shopper, staff and owner apps',
    'Excel product upload',
    'Staff discount limits and discount log',
    'Peak hours, peak days and basket analytics',
    'Founder-led onboarding on WhatsApp',
  ],
  ask: 'Use DQ on your shop floor, tell us what works, and tell us what is missing.',
} as const

export const CTA = {
  primary:   'Apply as a founding store',
  short:     'Apply for the pilot',
  secondary: 'See how it works',
  storeLogin: 'Store login',
} as const

/** The three apps, described only with verified behaviour (C-29–C-41) */
export const APPS = [
  {
    key: 'shopper',
    title: 'Shopper app',
    tagline: 'Checkout on the shopper’s own phone',
    features: [
      'Scan product barcodes to build a cart',
      CLAIMS.payments,
      'Exit pass: a QR code plus a short typeable code',
      `Available in ${CLAIMS.languages}`,
    ],
  },
  {
    key: 'staff',
    title: 'Staff app',
    tagline: 'For the team on your shop floor',
    features: [
      'Live feed of paid orders',
      'Verify every exit pass against a paid order',
      'Give one-time discount codes within the owner’s limit',
      'Ask the owner for a higher limit, with a reason',
    ],
  },
  {
    key: 'owner',
    title: 'Owner dashboard',
    tagline: 'For store owners and managers',
    features: [
      'Upload your products from Excel',
      CLAIMS.approveLower,
      'Discount log by staff member and bill',
      'Peak hours, peak days and baskets not paid',
      'Low-stock list and week-on-week sales',
    ],
  },
] as const

/** True facts for stat tiles (replaces 48hrs / 6 languages / "3 Live apps") */
export const FACTS = [
  { value: '₹0',     label: 'New hardware' },
  { value: '3 apps', label: 'Shopper · Staff · Owner' },
  { value: 'EN · HI', label: CLAIMS.languages },
  { value: '90 days', label: 'Free pilot' },
] as const

export const PRICING_FAQ = [
  { q: 'What does the pilot cost?', a: `Nothing. Founding partners use DQ free for ${OFFER.pilotDays} days. ${OFFER.terms}` },
  { q: 'What happens after the pilot?', a: OFFER.afterPilot },
  { q: 'Is there a setup fee?', a: 'No.' },
  { q: 'Do my shoppers pay anything to use DQ?', a: 'No. Shoppers pay only for what they buy.' },
  { q: 'How do shoppers pay?', a: `${CLAIMS.payments}. ${CLAIMS.cardData}.` },
  { q: 'What do you ask from founding partners?', a: OFFER.ask },
] as const

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
  /** Shown under every phone/app flow. */
  illustrative: 'Illustrative flow. Pilot stores are set up with the founder.',

  /**
   * Shopper channel — decided: Android app (Q1). Never mention web checkout,
   * browsers or app stores; Android builds are not published (no store
   * listing, badge or link). iPhones are not supported yet — say so plainly.
   */
  channel:      'Shoppers use the DQ Android app on their own phone',
  channelShort: 'Android app for shoppers',
  iphone:       'The shopper app is Android today. Shoppers with other phones can still use your counter.',
  frameLabel:   'Android app · Illustrative',
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
    'Shopper (Android), staff and owner apps',
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
    tagline: 'The DQ Android app, on the shopper’s own phone',
    features: [
      'Scan product barcodes to build a cart',
      CLAIMS.payments,
      'Exit pass: a QR code plus a short typeable code',
      `Shopper app languages: ${CLAIMS.languages}`,
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

/** Shopper story (home "How it works" + /how-it-works). Copy from the old Solution section. */
export const STORY_STEPS = [
  {
    key: 'scan',
    title: 'Scan',
    body: 'Shoppers open the DQ Android app and scan product barcodes as they shop — the tags you already use.',
    screen: 'A phone scanning a product barcode; the product is added to the cart',
  },
  {
    key: 'cart',
    title: 'Cart',
    body: 'The cart builds as they go, with prices from your product list. No staff needed.',
    screen: 'The cart with two items and a running total',
  },
  {
    key: 'pay',
    title: 'Pay',
    body: `${CLAIMS.payments}, directly on their phone. ${CLAIMS.cardDataShort}.`,
    screen: 'A payment sheet with UPI and card options, then a payment-confirmed tick',
  },
  {
    key: 'exit',
    title: 'Exit pass',
    body: 'Shoppers show their exit pass at the door — a QR code plus a short typeable code. Staff check it against the paid order in one tap.',
    screen: 'An exit pass with a QR code and a six-group code',
  },
] as const

/** Sample data used by the illustrative screens. Fictional store, no real brands. */
export const SAMPLE = {
  store: 'Demo Store',
  cart: [
    { name: 'Linen shirt', size: 'M', price: 1299 },
    { name: 'Slim-fit chinos', size: '32', price: 1499 },
  ],
  exitCode: ['7KQ2', 'M9TA', '4F8P', 'ZC3N', 'W6HR', 'B2JD'],
} as const

/** Discount-approval example (ApprovalFlow). Labelled "Example" on the page. */
export const APPROVAL_EXAMPLE = {
  staff: 'Ravi',
  requestedPct: 20,
  approvedPct: 10,
  reason: 'Regular customer',
  bill: '#1042',
  original: 1200,
  final: 1080,
  time: '4:12 pm',
  earlier: [
    { staff: 'Meena', bill: '#1038', pct: 5,  original: 2400, final: 2280, time: '3:41 pm' },
    { staff: 'Ravi',  bill: '#1031', pct: 10, original: 900,  final: 810,  time: '1:05 pm' },
  ],
  steps: [
    { who: 'Staff', title: 'Asks for a discount limit', body: 'With a reason, from the staff app.' },
    { who: 'You',   title: 'Approve it — or a lower limit', body: 'Approve 20%, approve 10%, or say no. You can take the limit away at any time.' },
    { who: 'DQ',    title: 'Logs every discount', body: `${CLAIMS.discountLog}. The log can’t be edited.` },
  ],
} as const

export const formatINR = (n: number) => `₹${n.toLocaleString('en-IN')}`

/** Concept E — "Live in 3 screens" (mirrors dq_admin onboarding_page.dart). Owner app platform is not claimed. */
export const ONBOARDING = {
  title:      'Live in 3 screens',
  caption:    'Under 5 minutes once your barcoded product list is ready.',
  panelLabel: 'Owner dashboard · Illustrative',
  steps: [
    { key: 'details', tab: 'Store details',    title: 'Store details',           body: 'Enter your store name and address, and pin the store on the map.' },
    { key: 'upload',  tab: 'Upload Excel',     title: 'Upload your products',    body: 'Upload your product list from Excel and map the columns once.' },
    { key: 'code',    tab: 'Store code ready', title: 'Your store code is ready', body: 'Share it with shoppers and give your staff their logins.' },
  ],
  sample: { address: '12 Market Road', file: 'products.xlsx', imported: 312, storeCode: 'DEMO-4821' },
} as const

/** Concept B — before/after scene. Never claims DQ measures queues or wait times. */
export const QUEUE_SCENE = {
  without: 'Without DQ',
  with:    'With DQ',
  caption: 'Shoppers pay in the DQ Android app. Your till stays for anyone who wants it.',
  label:   'Illustrative',
  describeWithout: 'Illustration: eight shoppers stand in one line at the billing counter.',
  describeWith:    'Illustration: seven shoppers spread out at the racks, each holding a phone; one shopper still uses the counter.',
} as const

/**
 * Concept D — owner analytics preview. Fictional, small single-store numbers,
 * and only metrics the backend computes: peak hours, basket abandonment,
 * discount depth (DiscountLog), sales and paid orders.
 */
export const SAMPLE_ANALYTICS = {
  label: 'Sample store data · Demo Store',
  // Paid orders by hour across one sample week (sums to 112).
  peakHours: [
    { h: '10', v: 3 }, { h: '11', v: 5 }, { h: '12', v: 7 }, { h: '1', v: 8 },
    { h: '2', v: 9 },  { h: '3', v: 10 }, { h: '4', v: 9 },  { h: '5', v: 11 },
    { h: '6', v: 14 }, { h: '7', v: 16 }, { h: '8', v: 12 }, { h: '9', v: 8 },
  ],
  peakSummary: 'Busiest hour: 7–8 pm (16 paid orders this week).',
  funnel: [
    { label: 'Scanned',     v: 148 },
    { label: 'Checked out', v: 121 },
    { label: 'Paid',        v: 112 },
  ],
  discounts: [
    { staff: 'Ravi',  pct: 8 },
    { staff: 'Meena', pct: 5 },
    { staff: 'Arjun', pct: 3 },
  ],
  kpis: [
    { key: 'sales',  label: 'Sales this week',       value: 184200, kind: 'inr' },
    { key: 'orders', label: 'Paid orders this week', value: 112,    kind: 'count' },
    { key: 'unpaid', label: 'Baskets not paid',      value: 7,      kind: 'pct' },
  ],
} as const

/** What a store needs before it starts (06 §4 "What you need"). No settlement wording. */
export const REQUIREMENTS = {
  have: [
    { title: 'Products with barcodes or tags', desc: 'The tags you already use for billing.' },
    { title: 'Your product list in Excel',     desc: 'Barcode, name, price and stock for each product.' },
    { title: 'One staff phone at the exit',    desc: 'For the staff app. Any phone your team already has.' },
    { title: 'Internet in the store',          desc: 'Wi-Fi or mobile data for staff and shoppers.' },
    { title: 'Shoppers with Android phones',   desc: 'The shopper app is Android today. Everyone else can still use your counter.' },
  ],
  notNeeded: [
    'No new hardware — no scanners, kiosks or card machines',
    'No IT team',
    'No change to your existing billing software',
  ],
} as const

/** Hindi lines (06 §3–4). Rendered with lang="hi". */
export const HINDI = {
  headline: 'ग्राहक ख़ुद स्कैन करें, फ़ोन पर पेमेंट करें, और निकल जाएँ — बिलिंग की लाइन नहीं।',
  sub:      'DQ आपके मौजूदा बिलिंग काउंटर के साथ चलता है — कोई नई मशीन नहीं।',
  control:  'डिस्काउंट पर पूरा कंट्रोल — आपके हाथ में।',
} as const

/** Store-owner FAQ (06 §4 objections), shared by home and /for-stores. */
export const STORE_FAQ = [
  {
    q: 'How do shoppers use DQ?',
    a: `${CLAIMS.channel}: they scan product tags, pay in the app and show an exit pass. Anyone who prefers the counter can still use it — ${CLAIMS.till.toLowerCase()}.`,
  },
  {
    q: 'Does it work on iPhones?',
    a: `Not yet. ${CLAIMS.iphone}`,
  },
  {
    q: 'What about theft?',
    a: 'Every shopper shows an exit pass at the door — a QR code plus a short code. It proves the shopper paid for an order, and staff check it in one tap. It does not check what is in the bag, so your staff can still spot-check a basket against the order, just as they would today.',
  },
  {
    q: 'Do I need hardware?',
    a: 'No. Your staff use their own phone for the staff app, and shoppers use the DQ Android app on their own phone.',
  },
  {
    q: 'What if the internet drops?',
    a: 'DQ needs an internet connection. If it drops, shoppers can pay at your counter as usual.',
  },
  {
    q: 'Will it replace my billing software?',
    a: 'No. DQ runs alongside it. Many stores keep one counter for shoppers who prefer traditional billing.',
  },
  {
    q: 'How long does setup take?',
    a: `${CLAIMS.setup}. Preparing that list is the main job, and we help you with it.`,
  },
  {
    q: 'Can my staff give discounts?',
    a: `Only within the limit you approve. Staff ask for a limit with a reason, and you can approve it or set a lower one. ${CLAIMS.discountLog}. ${CLAIMS.priceLock}.`,
  },
] as const

/** About page: what exists today vs what comes next. No dates. */
export const BUILD_STATUS = {
  today: [
    'Shopper Android app: scan barcodes, cart, exit pass',
    'Staff app: exit-pass checks and discount codes within owner-set limits — in the pilot build',
    'Owner dashboard: Excel upload, discount approvals and log',
    'Owner analytics: peak hours and days, unpaid baskets, low-stock list',
  ],
  next: [
    'Shopper app for iPhone',
    'The features our founding stores ask for most',
  ],
} as const

/** Founder (decision Q7). No phone, email, employer names or CV details on the site. */
export const FOUNDER = {
  name:     'Kusumeshkant Sharma',
  role:     'Founder, DQ',
  linkedin: 'https://www.linkedin.com/in/kusumeshkantsharma/',
  photo:    null as string | null,
  initials: 'KS',
  /** DRAFT — awaiting founder approval. Uses only the facts provided. */
  note: [
    'I’m a Flutter engineer, and I’ve been shipping mobile apps for more than five years.',
    'I’m building DQ so fashion and lifestyle stores can remove the billing queue.',
    'If your store joins the pilot, I’ll set DQ up with you myself, over WhatsApp.',
    'In return, I want your honest feedback — what works on your shop floor and what doesn’t.',
  ],
} as const

export const PRICING_FAQ = [
  { q: 'What does the pilot cost?', a: `Nothing. Founding partners use DQ free for ${OFFER.pilotDays} days. ${OFFER.terms}` },
  { q: 'What happens after the pilot?', a: OFFER.afterPilot },
  { q: 'Is there a setup fee?', a: 'No.' },
  { q: 'Do my shoppers pay anything to use DQ?', a: 'No. Shoppers pay only for what they buy.' },
  { q: 'How do shoppers pay?', a: `${CLAIMS.payments}. ${CLAIMS.cardData}.` },
  { q: 'What do you ask from founding partners?', a: OFFER.ask },
] as const

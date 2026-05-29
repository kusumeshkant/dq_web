export const NAV_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'Platform',    href: '/how-it-works' },
  { label: 'Solutions',   href: '/for-stores' },
  { label: 'Pricing',     href: '/pricing' },
  { label: 'About',       href: '/about' },
  { label: 'Contact',     href: '/contact' },
]

// ─────────────────────────────────────────────────────────────────────────────
// PRICING — source of truth for the website.
// Admin app reads plans live from the backend API (seed_subscription_plans.js).
// When you change prices here, mirror the change in the seed and re-run it.
// ─────────────────────────────────────────────────────────────────────────────
export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹2,999',
    annualPerMonth: '₹2,499',
    period: '/month',
    annual: '₹29,990/year — save ₹5,998',
    description: 'Perfect for a single store getting started.',
    bestFor: 'Best for single-outlet stores testing DQ',
    cta: 'Request Access',
    highlight: false,
    features: [
      'Customer App (unlimited users)',
      'Staff App (up to 3 devices)',
      'Admin Dashboard',
      'Basic Analytics (7-day)',
      'Bulk Excel Upload',
      'Up to 500 orders/month',
      '1 outlet',
      'Email support',
    ],
    note: '₹2 per order above 500',
  },
  {
    name: 'Growth',
    price: '₹5,999',
    annualPerMonth: '₹4,999',
    period: '/month',
    annual: '₹59,990/year — save ₹11,998',
    description: 'For stores ready to scale with advanced tools.',
    bestFor: 'Best for established stores with repeat customers',
    cta: 'Request Access',
    highlight: true,
    features: [
      'Everything in Starter',
      'Advanced Analytics (30-day + trends)',
      'Loyalty Points System',
      'Promotional Coupon Engine',
      'Up to 3 outlets',
      'Unlimited orders',
      'Priority email support',
      'Onboarding assistance',
    ],
    note: 'Most popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    annualPerMonth: null,
    period: '',
    annual: 'Talk to us',
    description: 'Multi-outlet chains and large-format retail.',
    bestFor: 'Best for chains, malls & large-format retail',
    cta: 'Talk to Enterprise Team',
    highlight: false,
    features: [
      'Everything in Growth',
      'White-label (your brand)',
      'API access',
      'Unlimited outlets',
      'Dedicated account manager',
      'Priority phone support',
      'Custom onboarding',
      'SLA guarantee',
    ],
    note: '',
  },
]

export const PROBLEM_STATS = [
  {
    stat: '1 in 3',
    label: 'fashion store customers walk out without buying when they see a long billing queue',
    context: 'Your products did the selling. The queue at the counter undid it.',
    icon: '🛍️',
  },
  {
    stat: '20+ min',
    label: 'average billing wait during weekends and festive season in Indian fashion stores',
    context: 'Your highest footfall days are also your worst checkout experience.',
    icon: '⏱️',
  },
  {
    stat: 'Peak hours',
    label: 'leave all your billing staff stuck at the counter — and no one left to assist on the floor',
    context: 'Customers who can\'t find help on the floor leave. Customers stuck in queues also leave.',
    icon: '🏷️',
  },
]

export const WHY_DQ_DIFFERENTIATORS = [
  {
    icon: 'TrendingUp',
    title: 'Pays for itself in week 1',
    description: 'Recovering just 5 abandoned purchases per day at ₹500 average covers your entire monthly plan. The math works at any store size.',
    highlight: '30x calculated ROI',
    accent: 'green',
  },
  {
    icon: 'Zap',
    title: 'Live in under 1 hour',
    description: 'No hardware to buy, no IT team needed. Upload inventory from Excel, log in your staff, share your store code — done.',
    highlight: '< 1hr setup',
    accent: 'amber',
  },
  {
    icon: 'ShieldCheck',
    title: 'Theft-proof by design',
    description: 'Every exit is validated by QR code scan. Green = paid and cleared. Red = hold for review. Zero scan-and-skip theft.',
    highlight: 'Exit QR validation',
    accent: 'blue',
  },
]

export const WHY_DQ_METRICS = [
  { value: '₹0',          label: 'Hardware cost' },
  { value: 'UPI · Cards', label: 'Payment methods' },
  { value: '6 languages', label: 'Hindi · Tamil · Telugu · Kannada · Bengali · English' },
  { value: '3 apps',      label: 'Customer · Staff · Admin' },
]

export const INDUSTRIES = [
  {
    icon: '👗',
    name: 'Fashion & Apparel',
    desc: 'Eliminate billing queues at branded clothing stores, boutiques, and apparel chains.',
  },
  {
    icon: '👟',
    name: 'Footwear & Bags',
    desc: 'Faster checkout for footwear stores — no waiting after a long try-on session.',
  },
  {
    icon: '💍',
    name: 'Jewellery & Accessories',
    desc: 'Speed up billing at jewellery counters where customers expect a premium experience.',
  },
  {
    icon: '💄',
    name: 'Beauty & Personal Care',
    desc: 'No counter wait for cosmetics, skincare, and personal care retail stores.',
  },
  {
    icon: '🏠',
    name: 'Home & Lifestyle',
    desc: 'Streamline checkout for home décor, gifting, and lifestyle concept stores.',
  },
  {
    icon: '💪',
    name: 'Sports & Fitness',
    desc: 'Quick billing for branded sports stores, activewear, and fitness equipment retail.',
  },
  {
    icon: '📚',
    name: 'Books & Stationery',
    desc: 'Fast checkout for bookstores, stationery chains, and school supply shops.',
  },
  {
    icon: '🌟',
    name: 'Specialty & Concept Retail',
    desc: 'Korean lifestyle, branded gift stores, niche retail — any tagged-product store with a checkout queue.',
  },
]

// ── Production app URLs ───────────────────────────────────────────────────────
export const APP_URLS = {
  customer: 'https://dq.dqstore.in',
  staff:    'https://staff.dqstore.in',
  admin:    'https://app.dqstore.in',
} as const

export const CONTACT_EMAIL   = 'support@dqstore.in'
export const WHATSAPP_NUMBER = '918754886595'
export const WEB3FORMS_KEY   = '76c6c6dd-e2aa-4c97-b1a5-f1fca47d329b'

export const STORE_TYPES = [
  'Fashion & Apparel',
  'Footwear & Bags',
  'Jewellery & Accessories',
  'Beauty & Personal Care',
  'Home & Lifestyle',
  'Sports & Fitness',
  'Books & Stationery',
  'Specialty / Concept Store',
  'Other',
]

export const DAILY_ORDER_RANGES = [
  'Under 50 orders/day',
  '50–150 orders/day',
  '150–500 orders/day',
  '500+ orders/day',
]

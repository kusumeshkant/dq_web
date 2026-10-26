// Product / offer claims live in lib/site.ts. This file holds navigation,
// contact details and form options only.

// The logo links home; /contact is reached through the Apply button.
export const NAV_LINKS = [
  { label: 'How it works', href: '/how-it-works' },
  { label: 'For stores',   href: '/for-stores' },
  { label: 'Pricing',      href: '/pricing' },
  { label: 'About',        href: '/about' },
]

export const PROBLEM_POINTS = [
  {
    title: 'Shoppers walk out at the counter',
    body: 'A full basket and a long billing line. Some shoppers put it down and leave.',
  },
  {
    title: 'Your busiest days are your slowest checkout',
    body: 'Weekends, festive season and sale days bring the most shoppers — and the longest waits.',
  },
  {
    title: 'Staff are stuck billing, not selling',
    body: 'At peak hours your team is at the counter. No one is left to help on the floor.',
  },
]

// Store login for existing stores (owner dashboard)
export const STORE_LOGIN_URL = 'https://app.dqstore.in'

export const CONTACT_EMAIL   = 'support@dqstore.in'
export const WHATSAPP_NUMBER = '918884133322'
export const WEB3FORMS_KEY   = '76c6c6dd-e2aa-4c97-b1a5-f1fca47d329b'

export const STORE_TYPES = [
  'Fashion & Apparel',
  'Footwear & Bags',
  'Beauty & Personal Care',
  'Home & Lifestyle',
  'Sports & Activewear',
  'Specialty / Concept Store',
  'Other',
]

export const DAILY_ORDER_RANGES = [
  'Under 50 bills/day',
  '50–150 bills/day',
  '150–500 bills/day',
  '500+ bills/day',
]

export const BARCODE_OPTIONS = [
  'Yes — all products',
  'Some products',
  'No',
]

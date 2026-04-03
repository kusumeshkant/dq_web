export const NAV_LINKS = [
  { label: 'Home',          href: '/' },
  { label: 'For Stores',    href: '/for-stores' },
  { label: 'How It Works',  href: '/how-it-works' },
  { label: 'Pricing',       href: '/pricing' },
  { label: 'About',         href: '/about' },
  { label: 'Contact',       href: '/contact' },
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '₹2,999',
    period: '/month',
    annual: '₹29,990/year',
    description: 'Perfect for a single store getting started.',
    cta: 'Start Free Trial',
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
    period: '/month',
    annual: '₹59,990/year',
    description: 'For stores ready to scale with advanced tools.',
    cta: 'Start Free Trial',
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
    period: '',
    annual: 'Talk to us',
    description: 'Multi-outlet chains and large-format retail.',
    cta: 'Talk to Us',
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
    stat: '32%',
    label: 'of shoppers abandon purchases due to long queues',
    icon: '📊',
  },
  {
    stat: '25 min',
    label: 'average checkout wait on weekends in Indian retail',
    icon: '⏱️',
  },
  {
    stat: '₹1.2L Cr',
    label: 'lost annually to queue abandonment in India',
    icon: '💸',
  },
]

export const WHY_DQ_FEATURES = [
  { icon: '📱', text: 'No hardware needed — works on any Android phone' },
  { icon: '🔐', text: 'Exit QR validation — prevents scan-and-skip theft' },
  { icon: '📈', text: 'Real-time analytics — know what\'s selling before stock runs out' },
  { icon: '🔔', text: 'FCM push notifications — customers updated at every step' },
  { icon: '📦', text: 'Bulk inventory upload — onboard your full catalogue in minutes' },
  { icon: '🇮🇳', text: 'Hindi + English — built for Bharat' },
  { icon: '💰', text: '₹2,999/month — less than the daily wage of one checkout staff' },
]

export const STORE_TYPES = [
  'Fashion',
  'Electronics',
  'Grocery',
  'Specialty',
  'Pharmacy',
  'Other',
]

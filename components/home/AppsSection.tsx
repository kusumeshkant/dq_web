'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const CUSTOMER_URL = 'https://dq.dqstore.in'
const STAFF_URL    = 'https://staff.dqstore.in'
const ADMIN_URL    = 'https://app.dqstore.in'

const apps = [
  {
    title:       'Customer App',
    tagline:     'The checkout experience — in every customer\'s pocket',
    gradient:    'from-dq-dark to-dq-green',
    ring:        'ring-dq-green/20',
    icon:        '🛍️',
    status:      'Web App Live',
    statusDot:   'bg-green-400',
    href:        CUSTOMER_URL,
    cta:         'Open Customer App',
    platforms: [
      { label: 'Web',     note: 'Live',        live: true  },
      { label: 'Android', note: 'Coming Soon', live: false },
      { label: 'iOS',     note: 'Coming Soon', live: false },
    ],
    features: [
      'Scan barcodes, build cart',
      'Pay via UPI, card, or wallet',
      'Real-time order tracking',
      'QR code for exit validation',
      'Full order history',
      'Hindi, Tamil, Telugu, Kannada, Bengali & English',
    ],
  },
  {
    title:       'Staff App',
    tagline:     'Full order control for your floor team',
    gradient:    'from-slate-800 to-slate-600',
    ring:        'ring-slate-400/20',
    icon:        '👥',
    status:      'Web Portal Live',
    statusDot:   'bg-blue-400',
    href:        STAFF_URL,
    cta:         'Open Staff Portal',
    platforms: [
      { label: 'Web',     note: 'Live',        live: true  },
      { label: 'Android', note: 'Coming Soon', live: false },
      { label: 'iOS',     note: 'Coming Soon', live: false },
    ],
    features: [
      'Live incoming order feed',
      'Push alerts on every new order',
      'One-tap status updates',
      'Product fulfilment checklist',
      'Exit QR scan & validation',
      'Silent background sync',
    ],
  },
  {
    title:       'Admin Dashboard',
    tagline:     'Analytics and full store control — from anywhere',
    gradient:    'from-blue-900 to-blue-600',
    ring:        'ring-blue-400/20',
    icon:        '📊',
    status:      'Dashboard Live',
    statusDot:   'bg-amber-400',
    href:        ADMIN_URL,
    cta:         'Open Admin Dashboard',
    platforms: [
      { label: 'Web',     note: 'Live',        live: true  },
      { label: 'Android', note: 'Coming Soon', live: false },
      { label: 'iOS',     note: 'Coming Soon', live: false },
    ],
    features: [
      'Revenue analytics dashboard',
      'Inventory management',
      'Bulk Excel upload',
      'Live order monitoring',
      'Low stock alerts',
      'Week-over-week trends',
    ],
  },
]

export default function AppsSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="3 Apps, 1 Ecosystem"
          title="One system. Three apps. Complete store coverage."
          subtitle="Customer checkout, staff order management, and admin analytics — all connected in real time. No integration work, no IT team."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <a
              key={app.title}
              href={app.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 hover:border-gray-200 transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* ── Gradient header ────────────────────────────────── */}
              <div className={`relative bg-gradient-to-br ${app.gradient} px-6 pt-6 pb-8`}>

                {/* Live status badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/25 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/20">
                  <span className={`w-1.5 h-1.5 ${app.statusDot} rounded-full animate-pulse flex-shrink-0`} />
                  <span className="text-white text-[10px] font-bold tracking-wide">{app.status}</span>
                </div>

                {/* App icon */}
                <div
                  className={`w-14 h-14 bg-white/15 rounded-2xl ring-2 ${app.ring} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-2xl select-none`}
                  aria-hidden="true"
                >
                  {app.icon}
                </div>

                <h3 className="text-xl font-bold text-white">{app.title}</h3>
                <p className="text-white/70 text-xs mt-1 leading-relaxed">{app.tagline}</p>

                {/* Platform availability pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {app.platforms.map((p) => (
                    <span
                      key={p.label}
                      className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${
                        p.live
                          ? 'bg-green-400/20 text-green-200 border-green-400/35'
                          : 'bg-white/8 text-white/50 border-white/15'
                      }`}
                    >
                      {p.live && (
                        <span className="w-1 h-1 bg-green-400 rounded-full" />
                      )}
                      {p.label} · {p.note}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Feature list ───────────────────────────────────── */}
              <ul className="px-6 py-5 space-y-2.5 flex-1">
                {app.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-dq-green font-bold mt-0.5 flex-shrink-0 leading-none">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* ── CTA button ─────────────────────────────────────── */}
              <div className="px-6 pb-6 pt-1">
                <div className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-dq-light border border-dq-muted text-dq-dark text-sm font-bold group-hover:bg-dq-green group-hover:text-white group-hover:border-dq-green transition-all duration-200">
                  <span>{app.cta}</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-base">↗</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-xs text-gray-400 mt-8">
          All three web portals are live and available now. Android and iOS mobile apps are coming soon.
        </p>
      </div>
    </section>
  )
}

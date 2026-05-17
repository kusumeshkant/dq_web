'use client'

import { QrCode, Users, LayoutDashboard } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const CUSTOMER_URL = 'https://dq.dqstore.in'
const STAFF_URL    = 'https://staff.dqstore.in'
const ADMIN_URL    = 'https://app.dqstore.in'

const APPS = [
  {
    title:    'Customer Checkout',
    tagline:  'The zero-friction checkout terminal in every customer\'s pocket',
    Icon:     QrCode,
    iconBg:   'bg-enterprise-blue/15',
    iconColor:'text-enterprise-blue',
    headerBg: 'bg-enterprise-navy',
    accent:   'border-enterprise-blue/30',
    status:   'Web Live',
    statusDot:'bg-enterprise-live',
    href:     CUSTOMER_URL,
    cta:      'Open Customer App',
    platforms: [
      { label: 'Web',     note: 'Live',       live: true  },
      { label: 'Android', note: 'Q3 2026',    live: false },
      { label: 'iOS',     note: 'Q3 2026',    live: false },
    ],
    features: [
      'Mobile browser PWA — no download required',
      'Scan product barcodes to build cart',
      'Pay via UPI, cards, or wallets',
      'Real-time order confirmation',
      'Exit QR code for staff validation',
      '6 Indian languages supported',
    ],
  },
  {
    title:    'Staff Operations Portal',
    tagline:  'Real-time order control for your floor team',
    Icon:     Users,
    iconBg:   'bg-enterprise-muted/10',
    iconColor:'text-enterprise-muted',
    headerBg: 'bg-enterprise-surface',
    accent:   'border-enterprise-elevated',
    status:   'Web Live',
    statusDot:'bg-enterprise-blue',
    href:     STAFF_URL,
    cta:      'Open Staff Portal',
    platforms: [
      { label: 'Web',     note: 'Live',       live: true  },
      { label: 'Android', note: 'Q3 2026',    live: false },
      { label: 'iOS',     note: 'Q3 2026',    live: false },
    ],
    features: [
      'Live incoming order feed',
      'Push alerts on every new order',
      'One-tap order status: Accept / Hold / Reject',
      'Exit QR scan and validation',
      'Product fulfilment checklist',
      'Silent background sync',
    ],
  },
  {
    title:    'Admin Intelligence Dashboard',
    tagline:  'Operational clarity for store owners and GMs',
    Icon:     LayoutDashboard,
    iconBg:   'bg-yellow-400/10',
    iconColor:'text-yellow-400',
    headerBg: 'bg-enterprise-navy',
    accent:   'border-yellow-400/20',
    status:   'Web Live',
    statusDot:'bg-yellow-400',
    href:     ADMIN_URL,
    cta:      'Open Admin Dashboard',
    platforms: [
      { label: 'Web',     note: 'Live',       live: true  },
      { label: 'Android', note: 'Q3 2026',    live: false },
      { label: 'iOS',     note: 'Q3 2026',    live: false },
    ],
    features: [
      'Revenue and GMV analytics by hour and day',
      'Inventory velocity and low-stock alerts',
      'Staff performance and shift analytics',
      'Multi-store management (chains and franchises)',
      'Bulk product upload via Excel',
      'Week-over-week trend comparison',
    ],
  },
]

export default function AppsSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Three Operational Surfaces"
          title="One platform. Three apps. Complete store coverage."
          subtitle="Customer checkout, staff order management, and admin analytics — all connected in real time. No integration work. No IT team."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS.map((app, i) => {
            const { Icon } = app
            return (
              <a
                key={app.title}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1.5 hover:border-gray-200 transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Header */}
                <div className={`relative ${app.headerBg} border-b border-enterprise-elevated px-6 pt-6 pb-6`}>
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/10">
                    <span className={`w-1.5 h-1.5 ${app.statusDot} rounded-full animate-pulse flex-shrink-0`} />
                    <span className="text-white text-[10px] font-bold tracking-wide">{app.status}</span>
                  </div>
                  <div className={`w-12 h-12 ${app.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${app.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{app.title}</h3>
                  <p className="text-enterprise-muted text-xs mt-1 leading-relaxed">{app.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {app.platforms.map((p) => (
                      <span
                        key={p.label}
                        className={`inline-flex items-center gap-1 text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${
                          p.live
                            ? 'bg-enterprise-live/15 text-enterprise-live border-enterprise-live/30'
                            : 'bg-white/5 text-white/40 border-white/10'
                        }`}
                      >
                        {p.live && <span className="w-1 h-1 bg-enterprise-live rounded-full" />}
                        {p.label} · {p.note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <ul className="px-6 py-5 space-y-2.5 flex-1">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-enterprise-blue font-bold mt-0.5 flex-shrink-0 leading-none text-xs">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="px-6 pb-6 pt-1">
                  <div className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gray-50 border border-gray-100 text-gray-700 text-sm font-semibold group-hover:bg-[#2E86FF] group-hover:text-white group-hover:border-[#2E86FF] transition-all duration-200">
                    <span>{app.cta}</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200 text-sm">↗</span>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          All three web portals are live and operational. Android and iOS mobile apps shipping Q3 2026.
        </p>
      </div>
    </section>
  )
}

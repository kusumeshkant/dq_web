'use client'

import Image from 'next/image'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const apps = [
  {
    logo:    '/logos/dq-app-customer.svg',
    title:   'Customer App',
    tagline: 'The checkout experience in every pocket',
    color:   'from-dq-dark to-dq-green',
    ring:    'ring-dq-green/20',
    platform: 'Android · iOS',
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
    logo:    '/logos/dq-app-staff.svg',
    title:   'Staff App',
    tagline: 'Full order control for your floor team',
    color:   'from-slate-800 to-slate-600',
    ring:    'ring-slate-400/20',
    platform: 'Android · iOS · Tablet',
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
    logo:    '/logos/dq-app-admin.svg',
    title:   'Admin App',
    tagline: 'Analytics and control from anywhere',
    color:   'from-blue-900 to-blue-600',
    ring:    'ring-blue-400/20',
    platform: 'Android · iOS · Tablet',
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
            <div
              key={app.title}
              className={`group rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Header gradient */}
              <div className={`bg-gradient-to-br ${app.color} px-6 pt-6 pb-8`}>
                <div className={`w-14 h-14 bg-white/15 rounded-2xl ring-2 ${app.ring} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <Image
                    src={app.logo}
                    alt={`${app.title} icon`}
                    width={32}
                    height={32}
                    unoptimized
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{app.title}</h3>
                <p className="text-white/70 text-xs mt-1">{app.tagline}</p>
                <span className="inline-block mt-3 bg-white/15 text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-full tracking-wide">
                  {app.platform}
                </span>
              </div>

              {/* Features */}
              <ul className="px-6 py-5 space-y-2.5">
                {app.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <span className="text-dq-green font-bold mt-0.5 flex-shrink-0 text-base leading-none">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

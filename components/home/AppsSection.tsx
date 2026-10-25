import { QrCode, Users, LayoutDashboard } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'
import { APPS } from '@/lib/site'

const ICONS = {
  shopper: { Icon: QrCode,          color: 'text-enterprise-link' },
  staff:   { Icon: Users,           color: 'text-enterprise-muted' },
  owner:   { Icon: LayoutDashboard, color: 'text-yellow-300' },
} as const

export default function AppsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Three apps"
          title="One for shoppers, one for staff, one for you."
          subtitle="The shopper app, the staff app and the owner dashboard share the same orders, products and discounts."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {APPS.map((app, i) => {
            const { Icon, color } = ICONS[app.key]
            return (
              <Reveal
                key={app.key}
                className="flex flex-col rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden"
                delay={i * 0.1}
              >
                <div className="bg-enterprise-navy border-b border-enterprise-elevated px-6 py-6">
                  <div className="w-12 h-12 bg-enterprise-elevated rounded-xl flex items-center justify-center mb-4">
                    <Icon className={`w-6 h-6 ${color}`} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{app.title}</h3>
                  <p className="text-enterprise-muted text-sm mt-1 leading-relaxed">{app.tagline}</p>
                </div>

                <ul className="px-6 py-5 space-y-2.5 flex-1">
                  {app.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink-body">
                      <span className="text-enterprise-action font-bold mt-0.5 flex-shrink-0 leading-none text-xs" aria-hidden="true">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

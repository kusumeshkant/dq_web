'use client'

import { BarChart3, Package, Activity } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const INTELLIGENCE_CARDS = [
  {
    Icon: BarChart3,
    iconClass: 'bg-enterprise-blue/10 text-enterprise-blue',
    tag: 'Revenue Intelligence',
    heading: 'Your billing counter gives you a receipt. DQ gives you intelligence.',
    body: 'Revenue and GMV tracked by hour, day, and week. Bestselling SKUs. Slow-moving inventory. Peak traffic windows compared week-over-week. The financial picture your billing counter never gave you — from day one.',
  },
  {
    Icon: Package,
    iconClass: 'bg-enterprise-live/10 text-enterprise-live',
    tag: 'Inventory Intelligence',
    heading: 'Real-time stock levels. Low-stock alerts before you run out.',
    body: 'Every completed transaction updates your inventory in real time. Low-stock alerts before shelves are empty. Reorder signals that calibrate with each week of data. Inventory management that works without a manual audit.',
  },
  {
    Icon: Activity,
    iconClass: 'bg-purple-400/10 text-purple-400',
    tag: 'Operational Intelligence',
    heading: 'Staff throughput. Queue elimination confirmation. Shift-by-shift comparison.',
    body: 'Order confirmation times. Exit validation rates. Queue-free checkout measured, not assumed. Shift performance compared across your team. The operational data that turns store management from guesswork to precision.',
  },
]

export default function IntelligenceSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1.5 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#F8FAFC] text-gray-600 border border-gray-200">
            Platform Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Intelligence that compounds<br />with every transaction.
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every DQ transaction generates structured data. Revenue intelligence, inventory signals,
            and operational metrics — surfaced automatically from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {INTELLIGENCE_CARDS.map((item, i) => {
            const { Icon } = item
            return (
              <div
                key={item.heading}
                className={`group bg-white border border-gray-100 rounded-xl p-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 ${item.iconClass} rounded-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold text-enterprise-blue uppercase tracking-widest mb-3">
                  {item.tag}
                </span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">
                  {item.heading}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {item.body}
                </p>
              </div>
            )
          })}
        </div>

        {/* Compounding callout */}
        <div className="mt-10 bg-[#F8FAFC] border border-gray-100 rounded-xl px-6 py-5 text-center">
          <p className="text-gray-900 font-semibold text-sm leading-snug max-w-2xl mx-auto">
            As DQ scales across stores, the intelligence deepens automatically.
          </p>
          <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-2xl mx-auto">
            Transaction patterns, inventory velocity, and operational anomalies emerge from the
            data every store generates. This is not a feature. It is the architecture.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/pricing" className="inline-flex items-center gap-1.5 text-enterprise-blue font-semibold text-sm hover:underline underline-offset-2">
            See pricing and plans →
          </a>
          <span className="hidden sm:block text-gray-200">·</span>
          <a href="/for-stores" className="inline-flex items-center gap-1.5 text-gray-500 font-medium text-sm hover:text-enterprise-blue transition-colors">
            See how DQ works for your store →
          </a>
        </div>

      </div>
    </section>
  )
}

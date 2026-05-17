'use client'

import { ShoppingBag, Clock, Users2 } from 'lucide-react'
import { PROBLEM_STATS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const ICONS = [ShoppingBag, Clock, Users2]
const ICON_COLORS = [
  'bg-red-50 text-red-500',
  'bg-amber-50 text-amber-500',
  'bg-enterprise-blue/10 text-enterprise-blue',
]

export default function ProblemSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Real Cost of Queues"
          title="Fashion stores don't lose customers at the rack. They lose them at the counter."
          subtitle="Your products do the selling. The billing queue undoes it — especially on the days it matters most."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PROBLEM_STATS.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <div
                key={item.stat}
                className={`group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className="relative">
                  <div className={`w-12 h-12 ${ICON_COLORS[i]} rounded-xl flex items-center justify-center mb-5 mx-auto`}>
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <div className="text-5xl font-black text-enterprise-blue mb-3 leading-none tabular-nums">
                    {item.stat}
                  </div>
                  <p className="text-gray-800 text-sm font-semibold leading-snug mb-2">{item.label}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{item.context}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-xs text-gray-400 mt-8">
          Based on observed patterns in Indian fashion and lifestyle retail.
        </p>
      </div>
    </section>
  )
}

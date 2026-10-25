import { ShoppingBag, Clock, Users2 } from 'lucide-react'
import { PROBLEM_POINTS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/motion/Reveal'

const ICONS = [ShoppingBag, Clock, Users2]
const ICON_COLORS = [
  'bg-red-50 text-red-600',
  'bg-amber-50 text-enterprise-amber',
  'bg-blue-50 text-enterprise-action',
]

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The real cost of queues"
          title="Fashion stores don't lose customers at the rack. They lose them at the counter."
          subtitle="Your products do the selling. The billing queue undoes it — especially on the days it matters most."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PROBLEM_POINTS.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <Reveal
                key={item.title}
                className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-gray-200 transition-all duration-300"
                delay={i * 0.12}
              >
                <div className={`w-12 h-12 ${ICON_COLORS[i]} rounded-xl flex items-center justify-center mb-5 mx-auto`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h3 className="text-gray-900 text-lg font-bold leading-snug mb-2">{item.title}</h3>
                <p className="text-ink-body text-sm leading-relaxed">{item.body}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

import { ShoppingBag, Clock, BarChart3 } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const insights = [
  {
    Icon: ShoppingBag,
    iconClass: 'bg-red-50 text-red-500',
    tag: 'Queue abandonment',
    heading: 'The queue loses customers your products already won.',
    body: 'A customer who picks up a product and joins the billing queue has already decided to buy. If the wait is long enough, they put it back. They leave without complaint — just frustration. DQ removes the queue entirely, so the sale you\'ve already made actually completes.',
  },
  {
    Icon: Clock,
    iconClass: 'bg-amber-50 text-amber-500',
    tag: 'Peak hour throughput',
    heading: 'Your busiest days shouldn\'t also be your most painful ones.',
    body: 'Weekends, Diwali, end-of-season — high-footfall days should mean high revenue. Instead, they mean staff stuck at the counter, frustrated customers, and abandoned purchases. DQ handles peak traffic without adding hardware, headcount, or chaos.',
  },
  {
    Icon: BarChart3,
    iconClass: 'bg-blue-50 text-blue-600',
    tag: 'Store intelligence',
    heading: 'A billing counter gives you nothing. Your store can give you everything.',
    body: 'Your current checkout tells you what was sold — nothing more. DQ\'s admin dashboard gives you revenue by hour, bestselling SKUs, peak traffic windows, and week-over-week trends from day one. The data to run your store smarter is already there. DQ surfaces it.',
  },
]

export default function TestimonialsSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-dq-light text-dq-dark border border-dq-muted">
            Why Stores Choose DQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Built around what retail owners actually need.
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Three real problems. Three things DQ was specifically designed to solve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item, i) => {
            const { Icon } = item
            return (
              <div
                key={item.heading}
                className={`group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div className={`w-12 h-12 ${item.iconClass} rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>

                <span className="text-[10px] font-bold text-dq-green uppercase tracking-widest mb-3">
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

      </div>
    </section>
  )
}

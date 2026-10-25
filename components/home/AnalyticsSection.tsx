import Link from 'next/link'
import { BarChart3, ShoppingCart, BadgePercent, Package } from 'lucide-react'
import Reveal from '@/components/motion/Reveal'

// Only metrics the owner dashboard computes today (schema/typeDefs.js
// StoreAnalytics: peakHours, peakDays, abandonmentRate; DiscountLog; reorderLevel).
const CARDS = [
  {
    Icon: BarChart3,
    iconClass: 'bg-blue-50 text-enterprise-action',
    tag: 'Peak hours',
    heading: 'Know your busiest hour and day.',
    body: 'Sales by hour of the day and day of the week, with this week compared to last.',
  },
  {
    Icon: ShoppingCart,
    iconClass: 'bg-amber-50 text-enterprise-amber',
    tag: 'Baskets',
    heading: 'See baskets that were started but not paid.',
    body: 'How many shoppers checked their cart and never paid, and your abandonment rate.',
  },
  {
    Icon: BadgePercent,
    iconClass: 'bg-emerald-50 text-enterprise-success',
    tag: 'Discounts',
    heading: 'See who gave which discount.',
    body: 'Every discount is logged with the staff name, the bill and the amount. The log can’t be edited.',
  },
  {
    Icon: Package,
    iconClass: 'bg-purple-50 text-purple-700',
    tag: 'Products',
    heading: 'Top products and a low-stock list.',
    body: 'Your best sellers, and the products that have dropped to the reorder level you set.',
  },
]

export default function AnalyticsSection() {

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-slate-50 text-ink-body border border-gray-200">
            See your store
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Know your busiest hour, and who&apos;s giving discounts.
          </h2>
          <p className="mt-4 text-ink-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every DQ checkout is recorded, so the owner dashboard can show you what your billing counter never did.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((item, i) => {
            const { Icon } = item
            return (
              <Reveal
                key={item.tag}
                className="bg-white border border-gray-100 rounded-xl p-7 shadow-sm flex flex-col"
                delay={i * 0.1}
              >
                <div className={`w-10 h-10 ${item.iconClass} rounded-lg flex items-center justify-center mb-5`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-xs font-bold text-enterprise-action uppercase tracking-widest mb-3">
                  {item.tag}
                </span>
                <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">
                  {item.heading}
                </h3>
                <p className="text-ink-body text-sm leading-relaxed flex-1">
                  {item.body}
                </p>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-enterprise-action font-semibold text-sm hover:underline underline-offset-2">
            See the founding-partner offer →
          </Link>
          <span className="hidden sm:block text-gray-300" aria-hidden="true">·</span>
          <Link href="/for-stores" className="inline-flex items-center gap-1.5 text-ink-body font-medium text-sm hover:text-enterprise-action transition-colors">
            See how DQ works for your store →
          </Link>
        </div>

      </div>
    </section>
  )
}

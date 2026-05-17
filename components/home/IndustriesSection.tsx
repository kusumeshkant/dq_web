'use client'

import Link from 'next/link'
import { Shirt, ShoppingBag, Gem, Sparkles, Home, Dumbbell, BookOpen, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const INDUSTRIES = [
  {
    Icon: Shirt,
    name: 'Fashion & Apparel',
    desc: 'Eliminate billing queues at branded clothing stores, boutiques, and apparel chains.',
    color: 'bg-enterprise-blue/10 text-enterprise-blue',
  },
  {
    Icon: ShoppingBag,
    name: 'Footwear & Bags',
    desc: 'Faster checkout for footwear stores — no waiting after a long try-on session.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    Icon: Gem,
    name: 'Jewellery & Accessories',
    desc: 'Speed up billing at jewellery counters where customers expect a premium experience.',
    color: 'bg-purple-50 text-purple-500',
  },
  {
    Icon: Sparkles,
    name: 'Beauty & Personal Care',
    desc: 'No counter wait for cosmetics, skincare, and personal care retail stores.',
    color: 'bg-pink-50 text-pink-500',
  },
  {
    Icon: Home,
    name: 'Home & Lifestyle',
    desc: 'Streamline checkout for home décor, gifting, and lifestyle concept stores.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    Icon: Dumbbell,
    name: 'Sports & Fitness',
    desc: 'Quick billing for branded sports stores, activewear, and fitness equipment retail.',
    color: 'bg-orange-50 text-orange-500',
  },
  {
    Icon: BookOpen,
    name: 'Books & Stationery',
    desc: 'Fast checkout for bookstores, stationery chains, and school supply shops.',
    color: 'bg-sky-50 text-sky-500',
  },
  {
    Icon: Star,
    name: 'Specialty & Concept Retail',
    desc: 'Korean lifestyle, branded gift stores, niche retail — any tagged-product store with a checkout queue.',
    color: 'bg-yellow-50 text-yellow-600',
  },
]

export default function IndustriesSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who DQ Is For"
          title="Fashion. Lifestyle. Jewellery. Specialty retail."
          subtitle="Purpose-built for tag-and-barcode retail where customers try, select, and expect a fast checkout experience."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const { Icon } = ind
            return (
              <div
                key={ind.name}
                className={`group bg-white border border-gray-100 rounded-xl p-5 hover:border-enterprise-blue/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className={`w-11 h-11 ${ind.color} rounded-xl flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5 leading-snug">{ind.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{ind.desc}</p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Sell barcode-tagged products and have a billing counter?{' '}
          <Link href="/contact" className="text-enterprise-blue font-semibold hover:underline underline-offset-2">
            DQ likely works for your store →
          </Link>
        </p>
      </div>
    </section>
  )
}

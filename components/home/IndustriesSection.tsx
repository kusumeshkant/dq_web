'use client'

import Link from 'next/link'
import { Shirt, ShoppingBag, Sparkles, Home, Dumbbell, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const INDUSTRIES = [
  {
    Icon: Shirt,
    name: 'Fashion & Apparel',
    desc: 'Clothing stores, boutiques and value fashion — where weekend billing lines are longest.',
    color: 'bg-blue-50 text-enterprise-action',
  },
  {
    Icon: ShoppingBag,
    name: 'Footwear & Bags',
    desc: 'Faster checkout after a long try-on session.',
    color: 'bg-amber-50 text-enterprise-amber',
  },
  {
    Icon: Sparkles,
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare and personal care stores with barcoded products.',
    color: 'bg-pink-50 text-pink-700',
  },
  {
    Icon: Home,
    name: 'Home & Lifestyle',
    desc: 'Home décor, gifting and lifestyle stores.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    Icon: Dumbbell,
    name: 'Sports & Activewear',
    desc: 'Sports stores and activewear retail.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    Icon: Star,
    name: 'Specialty & Concept',
    desc: 'Gift stores and niche retail — any store with tagged products and a billing counter.',
    color: 'bg-yellow-50 text-yellow-800',
  },
]

export default function IndustriesSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who DQ is for"
          title="Fashion. Footwear. Lifestyle."
          subtitle="Built for single-outlet stores where every product has a barcode or tag, and shoppers queue to pay."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const { Icon } = ind
            return (
              <div
                key={ind.name}
                className={`bg-white border border-gray-100 rounded-xl p-5 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.05}s` }}
              >
                <div className={`w-11 h-11 ${ind.color} rounded-xl flex items-center justify-center mb-3.5`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1.5 leading-snug">{ind.name}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{ind.desc}</p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-ink-muted mt-10">
          Sell barcode-tagged products and have a billing counter?{' '}
          <Link href="/contact" className="text-enterprise-action font-semibold hover:underline underline-offset-2">
            DQ likely works for your store →
          </Link>
        </p>
      </div>
    </section>
  )
}

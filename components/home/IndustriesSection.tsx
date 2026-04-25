'use client'

import Link from 'next/link'
import { INDUSTRIES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

export default function IndustriesSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Who DQ Is For"
          title="Fashion. Lifestyle. Jewellery. Specialty retail."
          subtitle="DQ is purpose-built for tag-and-barcode retail stores where customers try, select, and expect a fast checkout."
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={ind.name}
              className={`group bg-white border border-gray-100 rounded-2xl p-5 hover:border-dq-green/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              <div className="w-11 h-11 bg-dq-light rounded-xl flex items-center justify-center text-2xl mb-3.5 group-hover:scale-110 transition-transform">
                {ind.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm mb-1.5 leading-snug">{ind.name}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{ind.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          Sell barcode-tagged products and have a billing counter?{' '}
          <Link href="/contact" className="text-dq-green font-semibold hover:underline underline-offset-2">
            DQ likely works for your store →
          </Link>
        </p>
      </div>
    </section>
  )
}

'use client'

import { useInView } from '@/hooks/useInView'

const stats = [
  { value: '3',      label: 'Integrated apps — Customer, Staff & Admin' },
  { value: '< 1 hr', label: 'Setup time for a new store' },
  { value: '6',      label: 'Indian languages supported' },
  { value: '180K+',  label: 'Target market: mid-market stores in India' },
]

export default function AboutStatsBar() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-14 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-black text-dq-green tabular-nums">{s.value}</div>
              <div className="text-sm text-gray-500 mt-1.5 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

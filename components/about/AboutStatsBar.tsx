'use client'

import { useInView } from '@/hooks/useInView'
import { CLAIMS, OFFER } from '@/lib/site'

const stats = [
  { value: '3',        label: 'Apps that work together — shopper, staff and owner' },
  { value: '< 5 min',  label: 'Store setup once your barcoded product list is ready' },
  { value: '2',        label: `Shopper app languages: ${CLAIMS.languages}` },
  { value: `${OFFER.pilotDays} days`, label: 'Free founding-partner pilot' },
]

export default function AboutStatsBar() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-14 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-3xl md:text-4xl font-black text-enterprise-action">{s.value}</dd>
              <dd className="text-sm text-ink-muted mt-1.5 leading-snug" aria-hidden="true">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

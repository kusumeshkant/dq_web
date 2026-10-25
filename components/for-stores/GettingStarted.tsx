'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { useInView } from '@/hooks/useInView'
import { CTA } from '@/lib/site'

// Mirrors the three onboarding screens in dq_admin (onboarding_page.dart).
const steps = [
  {
    step: '01',
    title: 'Store details',
    desc: 'Enter your store name and address, and pin the store on the map.',
  },
  {
    step: '02',
    title: 'Upload your products',
    desc: 'Upload your product list from Excel and map the columns once. Each product needs a barcode, name, price and stock count.',
  },
  {
    step: '03',
    title: 'Get your store code',
    desc: 'Your store code is ready. Share it with shoppers and give your staff their logins.',
  },
]

export default function GettingStarted() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Getting started"
          title="Set up in under 5 minutes"
          subtitle="Once your barcoded product list is ready. No IT team, no new hardware, no downtime."
          variant="dark"
        />

        <ol className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <li key={s.step} className={`bg-enterprise-surface border border-enterprise-elevated rounded-xl p-6 reveal${inView ? ' is-visible' : ''}`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <span className="w-10 h-10 rounded-xl bg-enterprise-action flex items-center justify-center text-white font-bold text-sm mb-4" aria-hidden="true">
                {s.step}
              </span>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-enterprise-muted text-sm leading-relaxed">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <Button href="/contact" size="lg" className="rounded-lg">
            {CTA.primary} →
          </Button>
        </div>
      </div>
    </section>
  )
}

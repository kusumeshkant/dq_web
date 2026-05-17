'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    step: '01',
    time: '10 minutes',
    title: 'Sign Up',
    desc: 'Register your store on DQ Admin. Enter store name, address, and store code.',
  },
  {
    step: '02',
    time: '30 minutes',
    title: 'Upload Inventory',
    desc: 'Upload your product catalogue from Excel. Or add products one by one. Each product needs a barcode, name, price, and stock count.',
  },
  {
    step: '03',
    time: 'Same day',
    title: 'Go Live',
    desc: "Share your store code with customers. They find you on DQ app. Your staff gets their login. You're live.",
  },
]

export default function GettingStarted() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Getting Started"
          title="Live in one afternoon"
          subtitle="No IT team. No hardware. No downtime."
          variant="dark"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={s.step} className={`bg-enterprise-surface border border-enterprise-elevated rounded-xl p-6 reveal${inView ? ' is-visible' : ''}`} style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-enterprise-blue flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </span>
                <span className="text-xs text-enterprise-muted font-semibold uppercase tracking-wider">
                  {s.time}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-enterprise-muted text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" size="lg" className="bg-enterprise-blue hover:bg-enterprise-blue-hover text-white border-0 shadow-[0_4px_16px_rgba(46,134,255,0.35)]">
            Request a Demo →
          </Button>
        </div>
      </div>
    </section>
  )
}

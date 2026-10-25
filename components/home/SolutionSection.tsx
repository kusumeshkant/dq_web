'use client'

import { ScanLine, Wallet, LogOut } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'
import { CLAIMS } from '@/lib/site'

const steps = [
  {
    number: '01',
    Icon: ScanLine,
    title: 'Scan',
    description:
      'Shoppers open DQ on their phone and scan product barcodes as they shop. The cart builds as they go — no staff needed.',
    bg:     'bg-enterprise-action',
    ring:   'ring-enterprise-action/20',
    accent: 'text-enterprise-action',
    chip:   'bg-blue-50 text-enterprise-action',
    note:   'Barcodes and tags you already use',
  },
  {
    number: '02',
    Icon: Wallet,
    title: 'Pay',
    description:
      `${CLAIMS.payments}, directly on their phone. No card machine at the counter.`,
    bg:     'bg-enterprise-amber',
    ring:   'ring-enterprise-amber/20',
    accent: 'text-enterprise-amber',
    chip:   'bg-amber-50 text-enterprise-amber',
    note:   CLAIMS.cardDataShort,
  },
  {
    number: '03',
    Icon: LogOut,
    title: 'Go',
    description:
      'Shoppers show their exit pass at the door. Staff check it against the paid order in one tap.',
    bg:     'bg-enterprise-success',
    ring:   'ring-enterprise-success/20',
    accent: 'text-enterprise-success',
    chip:   'bg-emerald-50 text-enterprise-success',
    note:   CLAIMS.exit,
  },
]

export default function SolutionSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How it works"
          title="Scan. Pay. Walk out."
          subtitle="Shoppers use their own phone to check out. Your staff check the exit pass. Your till stays for anyone who wants it."
        />

        <div className="mt-14 relative">
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-enterprise-action via-enterprise-amber to-enterprise-success opacity-20" aria-hidden="true" />

          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => {
              const { Icon } = step
              return (
                <li
                  key={step.number}
                  className={`relative flex flex-col items-center text-center reveal${inView ? ' is-visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 ${step.bg} rounded-2xl flex items-center justify-center shadow-lg ring-4 ${step.ring}`}>
                      <Icon className="w-9 h-9 text-white" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div
                      className={`absolute -top-2 -right-2 w-7 h-7 ${step.bg} rounded-full flex items-center justify-center border-2 border-slate-50`}
                      aria-hidden="true"
                    >
                      <span className="text-white text-xs font-black">{i + 1}</span>
                    </div>
                  </div>

                  <span className={`text-xs font-black tracking-[0.2em] ${step.accent} uppercase mb-2`}>
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-ink-body text-sm leading-relaxed max-w-xs">{step.description}</p>

                  <div className={`mt-5 ${step.chip} rounded-xl px-4 py-2`}>
                    <p className="text-xs font-semibold">{step.note}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

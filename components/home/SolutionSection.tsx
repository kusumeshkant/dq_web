'use client'

import { ScanLine, Wallet, LogOut } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const steps = [
  {
    number: '01',
    Icon: ScanLine,
    title: 'Scan',
    description:
      'Customer opens the DQ app and scans product barcodes as they shop — tags, labels, packaged goods. Cart builds in real time. No staff interaction required.',
    color:   'bg-dq-green',
    accent:  'text-dq-green',
    ring:    'ring-dq-green/20',
    light:   'bg-dq-light text-dq-dark',
    note:    'Android · iOS · Tablet · Free app',
  },
  {
    number: '02',
    Icon: Wallet,
    title: 'Pay',
    description:
      'Customer pays via UPI, card, or wallet — directly on their phone. Powered by Razorpay. Payment confirmed in seconds. No POS terminal needed.',
    color:   'bg-dq-amber',
    accent:  'text-dq-amber',
    ring:    'ring-dq-amber/20',
    light:   'bg-amber-50 text-amber-800',
    note:    'UPI · Cards · Wallets',
  },
  {
    number: '03',
    Icon: LogOut,
    title: 'Go',
    description:
      'Customer shows their paid QR code at the store exit. Staff validates in one tap — green means cleared, red means hold. No queue, no counter, no friction.',
    color:   'bg-dq-dark',
    accent:  'text-dq-dark',
    ring:    'ring-dq-dark/20',
    light:   'bg-dq-light text-dq-dark',
    note:    'Exit QR · Theft-proof by design',
  },
]

export default function SolutionSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Scan. Pay. Walk out. Three steps, zero queues."
          subtitle="Customers use their phone as a checkout terminal. Your staff validates at exit. Done — no counter, no congestion, no lost sales."
        />

        <div className="mt-14 relative">
          {/* Connector line — desktop */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-dq-green via-dq-amber to-dq-dark opacity-20" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, i) => {
              const { Icon } = step
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center text-center reveal${inView ? ' is-visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.15}s` }}
                >
                  {/* Icon circle */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center shadow-lg ring-4 ${step.ring}`}
                    >
                      <Icon className="w-9 h-9 text-white" strokeWidth={1.75} />
                    </div>
                    <div
                      className={`absolute -top-2 -right-2 w-6 h-6 ${step.color} rounded-full flex items-center justify-center border-2 border-gray-50`}
                    >
                      <span className="text-white text-[10px] font-black">{i + 1}</span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-black tracking-[0.2em] ${step.accent} uppercase mb-2`}>
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>

                  <div className={`mt-5 ${step.light} rounded-xl px-4 py-2`}>
                    <p className="text-xs font-semibold">{step.note}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { TrendingUp, Zap, ShieldCheck } from 'lucide-react'
import { WHY_DQ_METRICS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const differentiators = [
  {
    Icon:        TrendingUp,
    title:       'Turns your busiest days into your best revenue days',
    description: 'Weekend rush, festive season, sale events — these are exactly when DQ performs best. Faster checkout flow means more customers served, less abandonment, and staff free to help on the floor.',
    highlight:   'Peak-day ready',
    iconClass:   'bg-dq-green/10 text-dq-green',
    border:      'border-dq-green/10 hover:border-dq-green/30',
  },
  {
    Icon:        Zap,
    title:       'Live before your next shift starts',
    description: 'No hardware. No IT team. No integration project. Upload your product catalogue from Excel, log in your staff, share your store code with customers — you\'re live in under an hour.',
    highlight:   '< 1hr to launch',
    iconClass:   'bg-dq-amber/10 text-dq-amber',
    border:      'border-dq-amber/10 hover:border-dq-amber/30',
  },
  {
    Icon:        ShieldCheck,
    title:       'Every exit is verified — no scan-and-walk',
    description: 'Customers show their paid QR code at the store exit. Staff validates in one tap. Green = paid and cleared. Red = hold for review. Shrinkage risk eliminated by design.',
    highlight:   'Exit QR validation',
    iconClass:   'bg-blue-500/10 text-blue-500',
    border:      'border-blue-200/30 hover:border-blue-300/50',
  },
]

export default function WhyDQSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-dq-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why DQ"
          title="Built for how branded retail actually works."
          subtitle="Not a generic SaaS tool. A checkout system designed specifically for fashion, lifestyle, and specialty stores — where the customer experience is everything."
          light
        />

        {/* 3 large differentiator cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {differentiators.map((d, i) => {
            const { Icon } = d
            return (
              <div
                key={d.title}
                className={`group bg-white/5 border ${d.border} rounded-2xl p-7 transition-all duration-300 hover:bg-white/[0.08] reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${d.iconClass} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>

                <div className="inline-block bg-white/10 text-green-200 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-white/10">
                  {d.highlight}
                </div>

                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{d.title}</h3>
                <p className="text-green-200/80 text-sm leading-relaxed">{d.description}</p>
              </div>
            )
          })}
        </div>

        {/* Metrics row */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {WHY_DQ_METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-4 text-center hover:bg-white/10 transition-colors duration-200"
            >
              <p className="text-xl font-black text-white">{m.value}</p>
              <p className="text-xs text-green-300 mt-0.5 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-green-300">
          {['No long-term contracts', 'Cancel anytime', 'Dedicated onboarding support'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-dq-green/40 flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0">✓</span>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-dq-green hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg shadow-dq-green/30 hover:shadow-dq-green/50 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Book a Free Demo →
          </a>
          <p className="mt-3 text-xs text-green-400">30-day free trial · No credit card · Go live in under 1 hour</p>
        </div>
      </div>
    </section>
  )
}

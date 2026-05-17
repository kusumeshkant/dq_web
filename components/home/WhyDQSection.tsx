'use client'

import { TrendingUp, Zap, ShieldCheck } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const DIFFERENTIATORS = [
  {
    Icon:        TrendingUp,
    title:       'Peak hours become your highest-revenue hours',
    description: 'Weekends, Diwali, end-of-season — high-footfall days should mean high revenue. DQ eliminates queue congestion at peak traffic so your staff serves more customers, your sales complete, and your busiest days produce your best numbers.',
    highlight:   'Peak-day ready',
    iconClass:   'bg-enterprise-blue/10 text-enterprise-blue',
    border:      'border-enterprise-elevated hover:border-enterprise-blue/30',
  },
  {
    Icon:        Zap,
    title:       'Operational in 48 hours. No implementation project.',
    description: 'No hardware to buy. No IT team. No integration project. Upload your product catalogue from Excel, log in your staff, share your store code — you are live. Zero-hardware deployment with full operational control from day one.',
    highlight:   '48-hour deployment',
    iconClass:   'bg-yellow-400/10 text-yellow-400',
    border:      'border-enterprise-elevated hover:border-yellow-400/30',
  },
  {
    Icon:        ShieldCheck,
    title:       'Every exit verified. Zero scan-and-walk risk.',
    description: 'Customers show their paid QR code at the store exit. Staff validates in one tap. Green means cleared. Red means hold for review. Exit validation is built into the checkout flow — shrinkage risk eliminated by architecture, not policy.',
    highlight:   'Exit QR validation',
    iconClass:   'bg-enterprise-live/10 text-enterprise-live',
    border:      'border-enterprise-elevated hover:border-enterprise-live/30',
  },
]

const METRICS = [
  { value: '₹0',          label: 'Hardware cost' },
  { value: 'UPI · Cards', label: 'Payment methods' },
  { value: '6 languages', label: 'Supported' },
  { value: '3 apps',      label: 'Production surfaces' },
]

export default function WhyDQSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-blue border border-enterprise-blue/20">
            Why DQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Built for how specialty retail<br />actually operates.
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            Not a generic SaaS tool. A checkout intelligence platform designed specifically for
            fashion, footwear, and lifestyle stores — where checkout is a strategic competitive advantage.
          </p>
        </div>

        {/* 3 differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((d, i) => {
            const { Icon } = d
            return (
              <div
                key={d.title}
                className={`group bg-enterprise-surface border ${d.border} rounded-xl p-7 transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 ${d.iconClass} rounded-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div className="inline-block bg-enterprise-elevated text-enterprise-muted text-[10px] font-semibold px-2.5 py-0.5 rounded-md mb-3 border border-enterprise-elevated">
                  {d.highlight}
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{d.title}</h3>
                <p className="text-enterprise-muted text-sm leading-relaxed">{d.description}</p>
              </div>
            )
          })}
        </div>

        {/* Metrics row */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-enterprise-surface border border-enterprise-elevated rounded-xl px-5 py-4 text-center"
            >
              <p className="text-lg font-bold text-white">{m.value}</p>
              <p className="text-xs text-enterprise-muted mt-0.5 leading-snug">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Trust row */}
        <div className="mt-8 pt-8 border-t border-enterprise-elevated flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-enterprise-muted">
          {['No long-term contracts', 'Cancel anytime', 'Dedicated onboarding support'].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-enterprise-blue/20 flex items-center justify-center text-[9px] font-bold text-enterprise-blue flex-shrink-0">✓</span>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-enterprise-blue hover:bg-enterprise-blue-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(46,134,255,0.3)] hover:shadow-[0_6px_24px_rgba(46,134,255,0.4)] hover:-translate-y-0.5"
          >
            Request a Demo →
          </a>
          <p className="mt-3 text-xs text-enterprise-muted/60">48-hour deployment · No hardware · No long-term commitment</p>
        </div>

      </div>
    </section>
  )
}

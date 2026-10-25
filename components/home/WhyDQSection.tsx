'use client'

import { Store, BadgePercent, ShieldCheck } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { CLAIMS, CTA, FACTS, OFFER } from '@/lib/site'

const DIFFERENTIATORS = [
  {
    Icon:        Store,
    title:       'Keep your counter. Add a faster lane.',
    description: 'DQ isn’t a new POS. Shoppers who want the counter still use it; everyone else checks out on their phone. No scanners, no kiosks, nothing to install in the store.',
    highlight:   CLAIMS.till,
    iconClass:   'bg-enterprise-blue/10 text-enterprise-link',
  },
  {
    Icon:        BadgePercent,
    title:       'Discounts your staff can’t misuse.',
    description: `Staff ask for discount authority and you decide the limit — you can approve less than they asked for. ${CLAIMS.discountLog}. ${CLAIMS.priceLock}.`,
    highlight:   'Owner-set limits',
    iconClass:   'bg-yellow-400/10 text-yellow-300',
  },
  {
    Icon:        ShieldCheck,
    title:       'Every exit is checked.',
    description: 'Shoppers show an exit pass at the door — a QR code plus a short code they can read out. Staff check it against the paid order in one tap.',
    highlight:   'Exit pass',
    iconClass:   'bg-enterprise-live/10 text-emerald-300',
  },
]

const TRUST = ['No card', 'No contract', 'Founder-led onboarding']

export default function WhyDQSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mb-14">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-link border border-enterprise-blue/20">
            Why DQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Built for how specialty retail<br />actually works.
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            Faster checkout for shoppers, and control for you: over discounts, prices and every exit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {DIFFERENTIATORS.map((d, i) => {
            const { Icon } = d
            return (
              <div
                key={d.title}
                className={`bg-enterprise-surface border border-enterprise-elevated rounded-xl p-7 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className={`w-10 h-10 ${d.iconClass} rounded-lg flex items-center justify-center mb-5`}>
                  <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className="inline-block bg-enterprise-elevated text-enterprise-muted text-xs font-semibold px-2.5 py-0.5 rounded-md mb-3">
                  {d.highlight}
                </div>
                <h3 className="text-white font-bold text-base mb-3 leading-snug">{d.title}</h3>
                <p className="text-enterprise-muted text-sm leading-relaxed">{d.description}</p>
              </div>
            )
          })}
        </div>

        <dl className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {FACTS.map((m) => (
            <div key={m.label} className="bg-enterprise-surface border border-enterprise-elevated rounded-xl px-5 py-4 text-center">
              <dt className="sr-only">{m.label}</dt>
              <dd className="text-lg font-bold text-white">{m.value}</dd>
              <dd className="text-xs text-enterprise-muted mt-0.5 leading-snug" aria-hidden="true">{m.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-8 pt-8 border-t border-enterprise-elevated flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-enterprise-muted">
          {TRUST.map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full bg-enterprise-blue/20 flex items-center justify-center text-xs font-bold text-enterprise-link flex-shrink-0" aria-hidden="true">✓</span>
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-enterprise-action hover:bg-enterprise-action-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:-translate-y-0.5"
          >
            {CTA.primary} →
          </a>
          <p className="mt-3 text-sm text-enterprise-muted">{OFFER.headline} · {OFFER.termsShort}</p>
        </div>

      </div>
    </section>
  )
}

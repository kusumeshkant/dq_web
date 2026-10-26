import Link from 'next/link'
import { Store } from 'lucide-react'
import { CLAIMS, CTA, OFFER } from '@/lib/site'

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-enterprise-navy overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
            Be one of our first stores.
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We&apos;re onboarding a small group of founding stores. {CLAIMS.hardware}. {CLAIMS.till}.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-7 flex flex-col gap-5">
            <div className="w-11 h-11 bg-enterprise-blue/10 rounded-xl flex items-center justify-center">
              <Store className="w-5 h-5 text-enterprise-link" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">{OFFER.name}: {OFFER.headline.toLowerCase()}</h3>
              <p className="text-enterprise-muted text-sm mt-2 leading-relaxed">
                You get DQ free for {OFFER.pilotDays} days, with founder-led setup. In return, we ask for your honest feedback.
                {' '}{CLAIMS.setup}.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-enterprise-action hover:bg-enterprise-action-hover text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all duration-200"
            >
              {CTA.primary} →
            </Link>
            <p className="text-sm text-enterprise-muted -mt-2">
              {OFFER.termsShort}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

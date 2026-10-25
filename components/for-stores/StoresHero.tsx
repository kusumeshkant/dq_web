import Button from '@/components/ui/Button'
import { CLAIMS, CTA, OFFER } from '@/lib/site'

const TRUST = [CLAIMS.hardware, CLAIMS.till, OFFER.headline, OFFER.termsShort]

export default function StoresHero() {
  return (
    <section className="relative bg-enterprise-navy py-20 md:py-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-link border border-enterprise-blue/20">
            For store owners &amp; managers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Turn every customer&apos;s phone into a{' '}
            <span className="text-enterprise-link">checkout terminal.</span>
          </h1>
          <p className="mt-6 text-lg text-enterprise-muted leading-relaxed max-w-2xl">
            DQ gives your store scan-and-go checkout, a staff app for exits and discounts,
            and an owner dashboard — with no new hardware and no IT team.{' '}
            <span className="text-white font-semibold">{CLAIMS.setup}.</span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button href="/contact" size="lg" className="rounded-lg">
              {CTA.primary} →
            </Button>
            <Button
              href="/pricing"
              size="lg"
              variant="outline"
              className="rounded-lg border-enterprise-elevated text-enterprise-muted hover:bg-transparent hover:border-enterprise-muted hover:text-white"
            >
              See the offer
            </Button>
          </div>
          <ul className="mt-5 text-sm text-enterprise-muted flex flex-wrap gap-x-5 gap-y-1.5">
            {TRUST.map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <span className="text-enterprise-link font-bold" aria-hidden="true">✓</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

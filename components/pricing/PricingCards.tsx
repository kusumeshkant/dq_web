import Button from '@/components/ui/Button'
import { CLAIMS, CTA, OFFER } from '@/lib/site'

export default function PricingCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border-2 border-enterprise-action p-8 sm:p-10 shadow-xl shadow-blue-900/5">
          <p className="text-xs font-semibold uppercase tracking-widest text-enterprise-action">{OFFER.name}</p>
          <h2 className="mt-2 text-3xl font-black text-gray-900">{OFFER.headline}</h2>
          <p className="mt-2 text-ink-body">
            We&apos;re working closely with a small number of stores while we finish DQ. Founding partners pay
            nothing for the {OFFER.pilotDays}-day pilot. {OFFER.terms}
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">Included</h3>
              <ul className="space-y-2.5">
                {OFFER.included.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-body">
                    <span className="text-enterprise-action font-bold flex-shrink-0 mt-0.5 text-xs" aria-hidden="true">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">What we ask</h3>
                <p className="text-sm text-ink-body leading-relaxed">{OFFER.ask}</p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-2">After the pilot</h3>
                <p className="text-sm text-ink-body leading-relaxed">{OFFER.afterPilot}</p>
              </div>
            </div>
          </div>

          <Button href="/contact" size="lg" className="mt-10 w-full justify-center">
            {CTA.primary} →
          </Button>
          <p className="mt-4 text-center text-sm text-ink-muted">
            {CLAIMS.cardData}.
          </p>
        </div>
      </div>
    </section>
  )
}

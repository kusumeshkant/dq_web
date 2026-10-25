import ContactForm from '@/components/contact/ContactForm'
import { CLAIMS, OFFER } from '@/lib/site'

/** Founding-partner offer with the application form inline (06 §2, home step 8). */
export default function OfferSection() {
  return (
    <section id="apply" className="py-20 lg:py-28 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-link border border-enterprise-blue/20">
            {OFFER.name}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight tracking-tight">
            Be one of our first stores.
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            We&apos;re onboarding a small group of founding stores. You get DQ free for {OFFER.pilotDays} days, with
            founder-led setup. In return, we ask for your honest feedback.
          </p>
          <ul className="mt-8 space-y-3">
            {OFFER.included.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-enterprise-muted">
                <span className="text-enterprise-link font-bold mt-0.5" aria-hidden="true">✓</span>{f}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-enterprise-muted">
            {OFFER.headline} · {OFFER.termsShort} · {CLAIMS.setupShort}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Apply in a minute</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

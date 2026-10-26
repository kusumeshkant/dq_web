import type { Metadata } from 'next'
import ContactForm   from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/constants'
import { CLAIMS, CTA, OFFER, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: CTA.primary,
  description: `Apply to be a DQ founding store. ${OFFER.headline}. ${OFFER.terms} We'll show you the full flow — scan, pay, exit pass and the owner dashboard.`,
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    title: `${CTA.primary} — ${OFFER.headline}`,
    description: `See DQ end to end and set up your store with us. ${OFFER.terms}`,
    url: `${SITE_URL}/contact/`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const NEXT_STEPS = [
  { step: '1', title: 'We call you within 24 hours', desc: 'Mon–Sat 10am–7pm IST.' },
  { step: '2', title: 'A walkthrough of all three apps', desc: 'Scan, pay, exit pass, the staff app and the owner dashboard.' },
  { step: '3', title: 'We set up your store with you', desc: `${CLAIMS.setup}. We help you prepare it.` },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-enterprise-navy py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            badge={OFFER.name}
            title="Apply to be a founding store."
            subtitle={`${OFFER.headline}. ${OFFER.terms} Fill in the form and we'll call you within 24 hours, Mon–Sat 10am–7pm IST.`}
            variant="dark"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your store</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">What happens next?</h2>
                <ol className="space-y-4">
                  {NEXT_STEPS.map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-enterprise-action flex items-center justify-center text-white font-bold text-sm flex-shrink-0" aria-hidden="true">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                        <p className="text-ink-muted text-sm">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <h2 className="font-bold text-gray-900 text-sm">Or reach us directly</h2>
                <p className="text-sm text-ink-body">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-enterprise-action font-medium hover:underline">{CONTACT_EMAIL}</a>
                </p>
                <p className="text-sm text-ink-body">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+know+more+about+DQ+for+my+store`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-enterprise-action font-medium hover:underline"
                  >
                    WhatsApp us
                  </a>
                  {' '}— fastest response
                </p>
                <p className="text-sm text-ink-muted">We call you within 24 hours, Mon–Sat 10am–7pm IST.</p>
              </div>

              <div className="bg-blue-50 border border-enterprise-action/20 rounded-xl p-6">
                <p className="text-enterprise-action font-semibold text-sm">
                  {OFFER.headline} · {CLAIMS.hardware} · {OFFER.termsShort}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

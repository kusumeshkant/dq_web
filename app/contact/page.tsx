import type { Metadata } from 'next'
import ContactForm   from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Request a Demo',
  description: 'Request a demo of DQ. We\'ll show you the full flow — scan, pay, exit validation, and analytics — and help you go live within 48 hours. No commitment required.',
  alternates: { canonical: 'https://dqstore.in/contact/' },
  openGraph: {
    title: 'Request a DQ Demo — 48-Hour Deployment',
    description: 'See DQ running live. We\'ll demo all 3 apps and help you set up your store the same day if you\'re ready.',
    url: 'https://dqstore.in/contact/',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-enterprise-navy py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get Started"
            title="Let's get DQ running in your store."
            subtitle="Fill in the form below. We'll reach out within 24 hours."
            variant="dark"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Request a Demo</h2>
              <ContactForm />
            </div>

            {/* Side info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'We call you within 24 hours', desc: 'Monday–Saturday, 10am–7pm IST.' },
                    { step: '2', title: 'Live demo of all 3 apps', desc: 'We show you the full flow — scan, pay, staff view, analytics.' },
                    { step: '3', title: '48-hour deployment if you\'re ready', desc: 'We help you upload your inventory and get your staff logged in.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-enterprise-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 space-y-3">
                <h3 className="font-bold text-gray-900 text-sm">Or reach us directly</h3>
                <p className="text-sm text-gray-600">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-enterprise-blue font-medium">{CONTACT_EMAIL}</a>
                </p>
                <p className="text-sm text-gray-600">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C+I%27d+like+to+know+more+about+DQ+for+my+store`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-enterprise-blue font-medium"
                  >
                    WhatsApp us
                  </a>
                  {' '}— fastest response
                </p>
                <p className="text-sm text-gray-500">We respond within 24 hours, Monday–Saturday.</p>
              </div>

              <div className="bg-enterprise-blue/5 border border-enterprise-blue/20 rounded-xl p-6">
                <p className="text-enterprise-blue font-semibold text-sm">
                  48-hour deployment · No hardware · No long-term commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

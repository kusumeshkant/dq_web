import type { Metadata } from 'next'
import ContactForm   from '@/components/contact/ContactForm'
import SectionHeading from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Book a Demo — DQ App',
  description: 'Book a free demo. We\'ll get DQ running in your store within a day.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dq-dark to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Get Started"
            title="Let's get DQ running in your store."
            subtitle="Fill in the form below. We'll reach out within 24 hours for a free demo."
            light
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Book a Free Demo</h2>
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
                    { step: '3', title: 'Same-day setup if you\'re ready', desc: 'We help you upload your inventory and get your staff logged in.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 rounded-lg bg-dq-green flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
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

              <div className="bg-gray-50 rounded-2xl p-6 space-y-3">
                <h3 className="font-bold text-gray-900 text-sm">Or reach us directly</h3>
                <p className="text-sm text-gray-600">📧 <a href="mailto:stores@dqstore.in" className="text-dq-green font-medium">stores@dqstore.in</a></p>
                <p className="text-sm text-gray-500">We respond within 24 hours, Monday–Saturday.</p>
              </div>

              <div className="bg-dq-light border border-dq-muted rounded-2xl p-6">
                <p className="text-dq-dark font-semibold text-sm">
                  30-day free trial · No credit card · Setup in under an hour
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for using the DQ platform — scan-and-go self-checkout for Indian retail stores.',
  alternates: { canonical: 'https://dqstore.in/terms/' },
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10">
          <Link href="/" className="text-sm text-dq-green hover:underline">← Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">Terms of Service</h1>
          <p className="text-gray-400 text-sm">Last updated: April 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using DQ (&ldquo;the Platform&rdquo;), operated by DQ Technologies Pvt Ltd, you agree to be bound by
              these Terms of Service. If you do not agree, do not use the Platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Description of Service</h2>
            <p>
              DQ provides a scan-and-go retail platform consisting of customer, staff, and admin applications that enable
              stores to offer self-checkout experiences. Features and pricing are described on our Pricing page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Free Trial & Billing</h2>
            <p>
              New accounts receive a 30-day free trial. No credit card is required during the trial. After the trial period,
              continued use requires a paid subscription. You may cancel at any time before the trial ends without charge.
              Subscriptions renew monthly or annually depending on the plan selected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Store Owner Responsibilities</h2>
            <p>Store owners using DQ agree to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Maintain accurate product inventory in the system</li>
              <li>Ensure staff are properly trained on the exit validation process</li>
              <li>Not use DQ for illegal goods or transactions</li>
              <li>Keep account credentials confidential</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Payments</h2>
            <p>
              Customer payments are processed through Razorpay. DQ is not responsible for payment processing errors or
              failures caused by Razorpay. Subscription billing is managed separately and invoiced by DQ Technologies Pvt Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Limitation of Liability</h2>
            <p>
              DQ is provided &ldquo;as is.&rdquo; To the maximum extent permitted by applicable law, DQ Technologies Pvt Ltd disclaims all
              warranties. Our total liability for any claim is limited to the amount paid by you in the 3 months preceding
              the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Termination</h2>
            <p>
              Either party may terminate at any time. Upon cancellation, your data will be retained for 30 days before
              permanent deletion. You can export your data during this window by contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Disputes shall be resolved in the courts of jurisdiction
              applicable to DQ Technologies Pvt Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Contact</h2>
            <p>
              Questions about these Terms? Email us at:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-dq-green hover:underline font-medium">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

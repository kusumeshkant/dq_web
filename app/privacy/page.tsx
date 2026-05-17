import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How DQ collects, uses, and protects your data. We never sell your data. Payments are secured by Razorpay.',
  alternates: { canonical: 'https://dqstore.in/privacy/' },
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-10">
          <Link href="/" className="text-sm text-enterprise-blue hover:underline">â† Back to Home</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: April 2026</p>
        </div>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
            <p>
              When you use DQ or book a demo, we collect information you provide directly, including your name, email address,
              phone number, store name, and store type. We also collect usage data and analytics when you interact with our
              platform to improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Provide, maintain, and improve the DQ platform</li>
              <li>Contact you about your demo request or account</li>
              <li>Send product updates and relevant communications (you can opt out at any time)</li>
              <li>Analyse usage patterns to improve our product</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share data with trusted service providers (including Firebase, Razorpay,
              and Cloudflare) who assist us in operating our platform, subject to confidentiality obligations. We may disclose
              information if required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Payment Data</h2>
            <p>
              Customer payments are processed by Razorpay. DQ does not store card numbers, CVVs, or other sensitive payment
              information. Please review Razorpay&apos;s privacy policy for details on how payment data is handled.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Data Security</h2>
            <p>
              We implement industry-standard security measures including encryption in transit (TLS), access controls, and
              monitoring. Our infrastructure is hosted on Firebase and protected by Cloudflare.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal data at any time. To exercise these
              rights, contact us at the email below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Contact</h2>
            <p>
              For privacy-related questions or requests, email us at:{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-enterprise-blue hover:underline font-medium">
                {CONTACT_EMAIL}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import PricingCards   from '@/components/pricing/PricingCards'
import PricingFaq     from '@/components/pricing/PricingFaq'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner      from '@/components/home/CtaBanner'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is there a setup fee?',                   acceptedAnswer: { '@type': 'Answer', text: 'No. Never. There is no setup fee on any plan.' } },
    { '@type': 'Question', name: 'What happens after the free trial?',      acceptedAnswer: { '@type': 'Answer', text: "Pick a plan and continue — we'll walk you through it. Or don't — no obligation, no charge." } },
    { '@type': 'Question', name: 'Can I switch plans?',                     acceptedAnswer: { '@type': 'Answer', text: 'Yes. Upgrade or downgrade anytime. Billing is prorated so you only pay for what you use.' } },
    { '@type': 'Question', name: 'Do my customers pay anything?',           acceptedAnswer: { '@type': 'Answer', text: 'No. The DQ Customer App is always free for shoppers.' } },
    { '@type': 'Question', name: 'What payment methods do my customers use?', acceptedAnswer: { '@type': 'Answer', text: 'Customers can pay via UPI, credit card, debit card, or digital wallets — all through Razorpay.' } },
  ],
}

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Simple, transparent pricing for DQ — India\'s checkout intelligence platform for specialty retail. Plans from ₹2,999/month. No setup fee. No hardware. Cancel anytime.',
  alternates: { canonical: 'https://dqstore.in/pricing/' },
  openGraph: {
    title: 'DQ Pricing — From ₹2,999/month',
    description: 'Simple, honest pricing. No setup fee. No hardware. Cancel anytime.',
    url: 'https://dqstore.in/pricing/',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="relative bg-enterprise-navy py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing"
            title="Simple, transparent pricing."
            subtitle="No setup fees. No surprises. No hardware."
            variant="dark"
          />
        </div>
      </section>

      <PricingCards />
      <PricingFaq />
      <CtaBanner />
    </>
  )
}

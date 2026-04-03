import type { Metadata } from 'next'
import PricingCards  from '@/components/pricing/PricingCards'
import PricingFaq    from '@/components/pricing/PricingFaq'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner     from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'Pricing — DQ App',
  description: 'Simple, transparent pricing. Start free for 30 days. Plans from ₹2,999/month.',
}

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dq-dark to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing"
            title="Simple, transparent pricing."
            subtitle="No setup fees. No surprises. Start free for 30 days."
            light
          />
        </div>
      </section>

      <PricingCards />
      <PricingFaq />
      <CtaBanner />
    </>
  )
}

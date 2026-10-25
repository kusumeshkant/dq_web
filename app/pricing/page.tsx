import type { Metadata } from 'next'
import PricingCards   from '@/components/pricing/PricingCards'
import PricingFaq     from '@/components/pricing/PricingFaq'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner      from '@/components/home/CtaBanner'
import { OFFER, PRICING_FAQ, SITE_URL } from '@/lib/site'

// Generated from the same list the visible FAQ renders, so they can't drift.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PRICING_FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export const metadata: Metadata = {
  title: 'Pricing',
  description: `${OFFER.name}: ${OFFER.headline.toLowerCase()} for DQ founding stores. ${OFFER.terms} Pricing after the pilot will be shared before your pilot ends.`,
  alternates: { canonical: `${SITE_URL}/pricing/` },
  openGraph: {
    title: `DQ Pricing — ${OFFER.headline}`,
    description: `${OFFER.name} offer. ${OFFER.terms} No setup fee.`,
    url: `${SITE_URL}/pricing/`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
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
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            badge="Pricing"
            title={`${OFFER.headline} for founding stores.`}
            subtitle={`${OFFER.terms} No setup fee.`}
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

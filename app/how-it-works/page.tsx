import type { Metadata } from 'next'
import FlowSection   from '@/components/how-it-works/FlowSection'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner     from '@/components/home/CtaBanner'
import JourneyMap    from '@/components/how-it-works/JourneyMap'
import PhoneStory    from '@/components/home/PhoneStory'
import AppsSection   from '@/components/home/AppsSection'
import OnboardingSection from '@/components/onboarding/OnboardingSection'
import { CLAIMS, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See the full DQ flow: shoppers scan and pay in the DQ Android app, staff check exit passes and give discounts within your limit, owners see sales.',
  alternates: { canonical: `${SITE_URL}/how-it-works/` },
  openGraph: {
    title: 'How DQ Works — Scan, Pay, Walk Out',
    description: 'Three apps. Shoppers scan and pay in the DQ Android app. Staff check the exit pass. Owners see every sale and discount.',
    url: `${SITE_URL}/how-it-works/`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

const customerSteps = [
  { number: '1', title: 'Open the DQ Android app and sign in', desc: `Shopper app languages: ${CLAIMS.languages}. iPhones aren’t supported yet.` },
  { number: '2', title: 'Choose the store you’re in', desc: 'Pick the store in the app when you walk in.' },
  { number: '3', title: 'Scan products as you shop', desc: 'Point the camera at the barcode. The product is added to your cart and stock is checked.' },
  { number: '4', title: 'Pay in the app', desc: `${CLAIMS.payments}.` },
  { number: '5', title: 'Show your exit pass and walk out', desc: 'A QR code plus a short typeable code. Staff check it against your paid order and you’re done.' },
]

const staffSteps = [
  { number: '1', title: 'Log in to the staff app', desc: 'With the staff login your store owner sets up for you.' },
  { number: '2', title: 'See paid orders as they arrive', desc: 'A live feed of orders, with the full item list for each one.' },
  { number: '3', title: 'Check every exit pass', desc: 'Scan or type the shopper’s exit pass. It must match a paid order.' },
  { number: '4', title: 'Give discounts within your limit', desc: 'Create a one-time discount code up to the limit your owner approved. It expires after 15 minutes.' },
  { number: '5', title: 'Need a higher limit? Ask for it', desc: 'Send a request with a reason. Your owner decides.' },
]

const adminSteps = [
  { number: '1', title: 'Set up your store in 3 screens', desc: 'Store details, product upload and your store code.' },
  { number: '2', title: 'Upload your products from Excel', desc: 'Map your columns once: barcode, name, price and stock.' },
  { number: '3', title: 'Approve staff discount limits', desc: `Approve what staff ask for, or set a lower limit. ${CLAIMS.discountLog}.` },
  { number: '4', title: 'Track sales and peak hours', desc: 'Peak hours and days, baskets started but not paid, top products and week-on-week sales.' },
]

export default function HowItWorksPage() {
  return (
    <>
      <section className="relative bg-enterprise-navy py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            badge="How it works"
            title="Simple for everyone. In control for you."
            subtitle="Three people, three apps, one checkout: the shopper, your staff and you."
            variant="dark"
          />
        </div>
      </section>

      <PhoneStory />
      <JourneyMap />
      <AppsSection />

      <div className="bg-white">
        <FlowSection
          badge="For shoppers"
          title="Shop, scan, pay, walk out"
          subtitle="No training needed. Scan, pay, go."
          steps={customerSteps}
          accentClass="bg-enterprise-action"
          caption={CLAIMS.illustrative}
        />

        <div className="bg-gray-50">
          <FlowSection
            badge="For store staff"
            title="Every exit checked. Discounts within limits."
            subtitle="Less time at the counter. More time helping shoppers."
            steps={staffSteps}
            accentClass="bg-enterprise-amber"
            caption={CLAIMS.illustrative}
          />
        </div>

        <FlowSection
          badge="For store owners"
          title="Run your store from the owner dashboard"
          subtitle="Products, discounts and sales — in one place."
          steps={adminSteps}
          accentClass="bg-enterprise-action-hover"
        />
        <OnboardingSection tone="light" withCta={false} />
      </div>

      <CtaBanner />
    </>
  )
}

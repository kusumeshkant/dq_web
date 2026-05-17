import type { Metadata } from 'next'
import StorySection    from '@/components/about/StorySection'
import WhyNowSection   from '@/components/about/WhyNowSection'
import AboutStatsBar   from '@/components/about/AboutStatsBar'
import SectionHeading  from '@/components/ui/SectionHeading'
import CtaBanner       from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'About DQ',
  description: 'DQ was built to make the checkout queue extinct in Indian fashion and lifestyle retail. We\'re an early-stage product team with a clear mission and a working product.',
  alternates: { canonical: 'https://dqstore.in/about/' },
  openGraph: {
    title: 'About DQ — Built to Make Checkout Queues Extinct',
    description: 'We built DQ because we were tired of waiting in line. Now we\'re building the self-checkout layer for Indian fashion retail.',
    url: 'https://dqstore.in/about/',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-enterprise-navy py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About DQ"
            title="We built DQ because we were tired of waiting in line."
            subtitle="Our mission is simple: make the checkout queue extinct in Indian specialty retail."
            variant="dark"
          />
        </div>
      </section>

      <StorySection />
      <WhyNowSection />
      <AboutStatsBar />
      <CtaBanner />
    </>
  )
}

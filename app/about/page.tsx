import type { Metadata } from 'next'
import StorySection    from '@/components/about/StorySection'
import WhyNowSection   from '@/components/about/WhyNowSection'
import AboutStatsBar   from '@/components/about/AboutStatsBar'
import SectionHeading  from '@/components/ui/SectionHeading'
import CtaBanner       from '@/components/home/CtaBanner'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About DQ',
  description: 'DQ was built to take the billing queue out of Indian fashion and lifestyle stores. The apps are built and we are onboarding a small group of founding stores.',
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    title: 'About DQ — No more billing queues',
    description: 'We built DQ because we were tired of waiting in line. Now we are onboarding our first founding stores.',
    url: `${SITE_URL}/about/`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-enterprise-navy py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            badge="About DQ"
            title="We built DQ because we were tired of waiting in line."
            subtitle="Our mission is simple: take the billing queue out of Indian specialty retail."
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

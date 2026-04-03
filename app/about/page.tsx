import type { Metadata } from 'next'
import StorySection  from '@/components/about/StorySection'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner     from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'About — DQ App',
  description: 'We built DQ because we were tired of waiting in line. Our mission: make the checkout queue extinct in Indian retail.',
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-dq-dark to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="About DQ"
            title="We built DQ because we were tired of waiting in line."
            light
          />
        </div>
      </section>

      <StorySection />

      {/* Stats bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '3',       label: 'Apps in ecosystem' },
              { value: '35+',     label: 'Real orders processed' },
              { value: '₹2,999',  label: 'Starting price/month' },
              { value: '180K+',   label: 'Stores we can serve' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-dq-green">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

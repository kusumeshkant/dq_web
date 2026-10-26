import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import OnboardingStepper from './OnboardingStepper'
import type { Tone } from './OnboardingPanels'
import { CTA, ONBOARDING as O } from '@/lib/site'

/** "Live in 3 screens" section: /for-stores (dark, with CTA) and the /how-it-works owner journey (light). */
export default function OnboardingSection({ tone = 'dark', withCta = true }: { tone?: Tone; withCta?: boolean }) {
  return (
    <section className={`py-20 ${tone === 'dark' ? 'bg-enterprise-navy' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Getting started"
          title={O.title}
          subtitle="Store details, your Excel product list, then your store code. No IT team, no new hardware."
          variant={tone === 'dark' ? 'dark' : 'default'}
        />
        <div className="mt-12">
          <OnboardingStepper tone={tone} />
        </div>
        {withCta && (
          <div className="mt-10 text-center">
            <Button href="/contact" size="lg" className="rounded-lg">
              {CTA.primary} →
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

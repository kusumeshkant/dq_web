import HeroSection         from '@/components/home/HeroSection'
import ProblemSection      from '@/components/home/ProblemSection'
import PhoneStory          from '@/components/home/PhoneStory'
import KeepTillSection     from '@/components/home/KeepTillSection'
import OwnerControlSection from '@/components/home/OwnerControlSection'
import AnalyticsSection    from '@/components/home/AnalyticsSection'
import RequirementsSection from '@/components/shared/RequirementsSection'
import OfferSection        from '@/components/home/OfferSection'
import ObjectionsSection   from '@/components/for-stores/ObjectionsSection'

// Section order: docs/website_analysis/06_proposed_ia_and_copy.md §2
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <PhoneStory />
      <KeepTillSection />
      <OwnerControlSection />
      <AnalyticsSection />
      <RequirementsSection tone="gray" />
      <OfferSection />
      <ObjectionsSection title="Questions store owners ask" limit={6} />
    </>
  )
}

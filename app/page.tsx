import HeroSection       from '@/components/home/HeroSection'
import ProblemSection    from '@/components/home/ProblemSection'
import SolutionSection   from '@/components/home/SolutionSection'
import AppsSection       from '@/components/home/AppsSection'
import AnalyticsSection  from '@/components/home/AnalyticsSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import WhyDQSection      from '@/components/home/WhyDQSection'
import CtaBanner         from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <AppsSection />
      <AnalyticsSection />
      <IndustriesSection />
      <WhyDQSection />
      <CtaBanner />
    </>
  )
}

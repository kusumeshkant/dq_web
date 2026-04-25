import HeroSection          from '@/components/home/HeroSection'
import SocialProofStrip     from '@/components/home/SocialProofStrip'
import ProblemSection       from '@/components/home/ProblemSection'
import SolutionSection      from '@/components/home/SolutionSection'
import IndustriesSection    from '@/components/home/IndustriesSection'
import AppsSection          from '@/components/home/AppsSection'
import WhyDQSection         from '@/components/home/WhyDQSection'
import TestimonialsSection  from '@/components/home/TestimonialsSection'
import CtaBanner            from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <ProblemSection />
      <SolutionSection />
      <IndustriesSection />
      <AppsSection />
      <WhyDQSection />
      <TestimonialsSection />
      <CtaBanner />
    </>
  )
}

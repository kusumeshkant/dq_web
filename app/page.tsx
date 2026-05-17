import HeroSection            from '@/components/home/HeroSection'
import SocialProofStrip       from '@/components/home/SocialProofStrip'
import PlatformVisionSection  from '@/components/home/PlatformVisionSection'
import ProblemSection         from '@/components/home/ProblemSection'
import SolutionSection        from '@/components/home/SolutionSection'
import AppsSection            from '@/components/home/AppsSection'
import TestimonialsSection    from '@/components/home/TestimonialsSection'
import InfrastructureSection  from '@/components/home/InfrastructureSection'
import IndustriesSection      from '@/components/home/IndustriesSection'
import WhyDQSection           from '@/components/home/WhyDQSection'
import CtaBanner              from '@/components/home/CtaBanner'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SocialProofStrip />
      <PlatformVisionSection />
      <ProblemSection />
      <SolutionSection />
      <AppsSection />
      <TestimonialsSection />
      <InfrastructureSection />
      <IndustriesSection />
      <WhyDQSection />
      <CtaBanner />
    </>
  )
}

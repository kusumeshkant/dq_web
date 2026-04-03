import type { Metadata } from 'next'
import StoresHero        from '@/components/for-stores/StoresHero'
import RoiSection        from '@/components/for-stores/RoiSection'
import ObjectionsSection from '@/components/for-stores/ObjectionsSection'
import GettingStarted    from '@/components/for-stores/GettingStarted'
import CtaBanner         from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'For Store Owners — DQ App',
  description: 'Turn every customer\'s phone into a checkout counter. Get DQ for your retail store from ₹2,999/month.',
}

export default function ForStoresPage() {
  return (
    <>
      <StoresHero />
      <RoiSection />
      <ObjectionsSection />
      <GettingStarted />
      <CtaBanner />
    </>
  )
}

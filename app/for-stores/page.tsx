import type { Metadata } from 'next'
import StoresHero        from '@/components/for-stores/StoresHero'
import RoiSection        from '@/components/for-stores/RoiSection'
import ObjectionsSection from '@/components/for-stores/ObjectionsSection'
import GettingStarted    from '@/components/for-stores/GettingStarted'
import RequirementsSection from '@/components/shared/RequirementsSection'
import CtaBanner         from '@/components/home/CtaBanner'
import { CLAIMS, OFFER, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'For Store Owners',
  description: `Give your fashion or lifestyle store scan-and-go checkout. ${CLAIMS.hardware}. ${CLAIMS.setup}. ${OFFER.headline} for founding stores.`,
  alternates: { canonical: `${SITE_URL}/for-stores/` },
  openGraph: {
    title: 'DQ for Store Owners — scan-and-go self-checkout',
    description: `Turn every shopper's phone into a checkout. ${CLAIMS.hardware}. ${OFFER.headline}.`,
    url: `${SITE_URL}/for-stores/`,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export default function ForStoresPage() {
  return (
    <>
      {/* Section order: 06_proposed_ia_and_copy.md §2 */}
      <StoresHero />
      <RequirementsSection />
      <GettingStarted />
      <RoiSection />
      <ObjectionsSection />
      <CtaBanner />
    </>
  )
}

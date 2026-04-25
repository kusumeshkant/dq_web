import type { Metadata } from 'next'
import StoresHero        from '@/components/for-stores/StoresHero'
import RoiSection        from '@/components/for-stores/RoiSection'
import ObjectionsSection from '@/components/for-stores/ObjectionsSection'
import GettingStarted    from '@/components/for-stores/GettingStarted'
import CtaBanner         from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'For Store Owners',
  description: 'Give your fashion or lifestyle store scan-and-go checkout — no hardware, no IT team. Live in under 1 hour. Starting from ₹2,999/month.',
  alternates: { canonical: 'https://dqstore.in/for-stores/' },
  openGraph: {
    title: 'DQ for Store Owners — Scan-and-Go Checkout for Retail',
    description: 'Turn your billing counter into a self-checkout experience. No hardware. Live in under an hour. From ₹2,999/month.',
    url: 'https://dqstore.in/for-stores/',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
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

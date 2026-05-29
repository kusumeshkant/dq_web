import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar        from '@/components/layout/Navbar'
import Footer        from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import MobileCtaBar  from '@/components/layout/MobileCtaBar'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DQ',
    url: 'https://dqstore.in',
    logo: 'https://dqstore.in/logos/favicon.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@dqstore.in',
      contactType: 'sales',
      availableLanguage: ['Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Bengali'],
    },
    description: 'Checkout intelligence platform for India\'s specialty retail — fashion, footwear, jewellery, and lifestyle chains. Every transaction compounds platform intelligence.',
    sameAs: ['https://dqstore.in'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DQ — Checkout Intelligence Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '2999',
      priceCurrency: 'INR',
      priceValidUntil: '2027-12-31',
    },
    description: 'Checkout intelligence platform for India\'s specialty retail. Three-app ecosystem — Customer Checkout, Staff Operations, Admin Analytics — deployed in 48 hours with zero hardware.',
    url: 'https://dqstore.in',
  },
]

const OG_IMAGE = {
  url: '/og-image.svg',
  width: 1200,
  height: 630,
  alt: 'DQ — Checkout Intelligence Platform for India\'s Specialty Retail',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dqstore.in'),
  title: {
    default: 'DQ — Checkout Intelligence Platform for India\'s Specialty Retail',
    template: '%s — DQ',
  },
  description:
    'DQ is a checkout intelligence platform for India\'s specialty retail — fashion, footwear, jewellery, and lifestyle chains. Three production apps. Zero hardware. 48-hour deployment. Every transaction compounds platform intelligence. From ₹2,999/month.',
  keywords:
    'checkout intelligence platform India, specialty retail checkout India, scan and go retail India, retail operations analytics India, fashion store checkout system, DQ checkout platform, queue elimination retail India, retail SaaS India, operational intelligence retail',
  icons: {
    icon: [
      { url: '/logos/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logos/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://dqstore.in/',
  },
  openGraph: {
    title: 'DQ — Checkout Intelligence Platform for India\'s Specialty Retail',
    description:
      'DQ turns every retail transaction into structured operational intelligence. Three production apps. Zero hardware. 48-hour deployment. Intelligence at Every Transaction.',
    siteName: 'DQ',
    locale: 'en_IN',
    type: 'website',
    url: 'https://dqstore.in/',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DQ — Checkout Intelligence Platform for India\'s Specialty Retail',
    description: 'Checkout intelligence platform for fashion, footwear, and lifestyle chains in India. Zero hardware. 48-hour deployment. Every transaction compounds platform intelligence.',
    images: [OG_IMAGE.url],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
        />
      </head>
      <body className="font-sans bg-white text-gray-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-enterprise-navy focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileCtaBar />
      </body>
    </html>
  )
}

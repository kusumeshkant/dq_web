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
      email: 'dqinfo@dqstore.in',
      contactType: 'sales',
      availableLanguage: ['Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Bengali'],
    },
    description: 'Mobile self-checkout platform for fashion, lifestyle, jewellery, and branded retail stores in India.',
    sameAs: ['https://dqstore.in'],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'DQ — Scan & Go Checkout',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '2999',
      priceCurrency: 'INR',
      priceValidUntil: '2026-12-31',
    },
    description: 'Mobile self-checkout app for fashion and lifestyle retail stores in India. Customers scan products, pay via UPI or card, and exit with a QR code.',
    url: 'https://dqstore.in',
  },
]

const OG_IMAGE = {
  url: '/og-image.svg',
  width: 1200,
  height: 630,
  alt: 'DQ — Mobile self-checkout for fashion and lifestyle retail stores in India',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://dqstore.in'),
  title: {
    default: 'DQ — Mobile Self-Checkout for Fashion & Lifestyle Stores',
    template: '%s — DQ',
  },
  description:
    'DQ is a mobile self-checkout platform built for fashion, lifestyle, jewellery, and specialty retail stores in India. Customers scan products, pay via UPI or card, and exit with a QR code — no counter, no queue, no lost sale. No hardware. Live in under 1 hour. From ₹2,999/month.',
  keywords:
    'scan and go fashion store India, self checkout fashion retail, retail queue management India, DQ store checkout, no queue fashion store, mobile checkout India, branded retail technology, jewellery store checkout, lifestyle store billing',
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
    title: 'DQ — Mobile Self-Checkout for Fashion & Lifestyle Stores',
    description:
      'Give your fashion or lifestyle store a smarter checkout. Customers scan, pay on their phone, and walk out — no counter congestion. No hardware. Live in under 1 hour. From ₹2,999/month.',
    siteName: 'DQ',
    locale: 'en_IN',
    type: 'website',
    url: 'https://dqstore.in/',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DQ — No-Queue Checkout for Fashion Retail',
    description: 'Mobile self-checkout for fashion, lifestyle & branded retail stores. No hardware. Live in under 1 hour. From ₹2,999/month.',
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
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-dq-dark focus:text-white focus:text-sm focus:font-semibold focus:shadow-lg"
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

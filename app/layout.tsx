import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar        from '@/components/layout/Navbar'
import Footer        from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import MobileCtaBar  from '@/components/layout/MobileCtaBar'
import MotionProvider from '@/components/motion/MotionProvider'
import { CONTACT_EMAIL } from '@/lib/constants'
import { BRAND, CLAIMS, SITE_URL } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const DESCRIPTION =
  `Let shoppers scan, pay in the DQ Android app and walk out — no billing queue. ${CLAIMS.till}, ${CLAIMS.hardware.toLowerCase()}. ${CLAIMS.status}.`

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND,
    url: SITE_URL,
    logo: `${SITE_URL}/logos/favicon.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi'],
    },
    description: `${CLAIMS.category} in India.`,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: BRAND,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android',
    description: `${CLAIMS.category}. Shopper, staff and owner apps. ${CLAIMS.hardware}. ${CLAIMS.setup}.`,
    url: SITE_URL,
  },
]

// Inline, synchronous: marks JS as present before first paint. globals.css
// uses it to swap static fallbacks (.story-static) for animated versions
// (.story-motion) only when JS runs and the user allows motion.
const JS_FLAG = "document.documentElement.classList.add('js')"

const OG_IMAGE = {
  url: '/og-image.png',
  width: 1200,
  height: 630,
  alt: `${BRAND} — ${CLAIMS.category}. No billing queue.`,
}

// ≤ 65 chars so search results don't truncate it.
const TITLE = `${BRAND} — ${CLAIMS.category}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — DQ',
  },
  description: DESCRIPTION,
  icons: {
    icon: [
      { url: '/logos/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/logos/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: BRAND,
    locale: 'en_IN',
    type: 'website',
    url: `${SITE_URL}/`,
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE.url],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: JS_FLAG }} />
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
        <MotionProvider>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileCtaBar />
        </MotionProvider>
      </body>
    </html>
  )
}

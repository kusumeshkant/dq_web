import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'DQ Store — Skip the Queue. Shop Smarter.',
  description:
    'DQ is India\'s scan-and-go retail platform. Customers scan products, pay on their phone, and walk out. No checkout counter. No waiting. Starting at ₹2,999/month.',
  keywords: 'scan and go, retail technology, India, queue management, self checkout, DQ app',
  openGraph: {
    title: 'DQ Store — Skip the Queue. Shop Smarter.',
    description: 'Scan-and-go retail platform for Indian stores. Starting ₹2,999/month.',
    siteName: 'DQ Store',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

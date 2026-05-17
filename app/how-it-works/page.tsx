import type { Metadata } from 'next'
import FlowSection   from '@/components/how-it-works/FlowSection'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner     from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See the full DQ flow — customers scan products and pay on their phone, staff validates at exit, admins monitor everything in real time. Simple for everyone.',
  alternates: { canonical: 'https://dqstore.in/how-it-works/' },
  openGraph: {
    title: 'How DQ Works — Scan, Pay, Walk Out',
    description: 'Three apps. One seamless experience. Customers scan and pay on their phone. Staff validates at exit. Admins monitor everything.',
    url: 'https://dqstore.in/how-it-works/',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
  },
}

const customerSteps = [
  { number: '1', title: 'Download DQ & Sign Up', desc: 'Free app on Android and iOS. Takes 30 seconds.' },
  { number: '2', title: 'Walk into a DQ store & select it in the app', desc: 'App shows nearby DQ-enabled stores. Tap to confirm yours.' },
  { number: '3', title: 'Scan products as you shop', desc: 'Point camera at any barcode. Product added to cart instantly. Stock validated in real time.' },
  { number: '4', title: 'Tap Checkout & pay', desc: 'Pay via UPI, card, or wallet through Razorpay. Takes under 10 seconds.' },
  { number: '5', title: 'Show QR code at exit & walk out', desc: 'Staff scans your QR. Green light. You\'re done.' },
]

const staffSteps = [
  { number: '1', title: 'Open Staff App & log in', desc: 'Your store credentials, provided by your manager.' },
  { number: '2', title: 'See live orders as they arrive', desc: 'Push notification the moment a customer pays. No refresh needed.' },
  { number: '3', title: 'Tap an order → see full item list → update status', desc: 'Pending → Preparing → Ready → Completed in one tap each.' },
  { number: '4', title: 'At exit — scan customer\'s QR', desc: 'Green = paid, let them go. Red = issue, handle it.' },
]

const adminSteps = [
  { number: '1', title: 'Log in to Admin App', desc: 'Android, iOS, or tablet — install once, manage from anywhere.' },
  { number: '2', title: 'Upload inventory from Excel', desc: 'One file, one click. Entire catalogue live in minutes.' },
  { number: '3', title: 'Monitor orders in real time', desc: 'See every order as it happens. Filter by status.' },
  { number: '4', title: 'Track revenue and analytics daily', desc: 'Revenue trends, top products, low stock alerts — all in one place.' },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-enterprise-navy py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Simple for everyone. Powerful underneath."
            subtitle="Three different users. Three different apps. One seamless experience."
            variant="dark"
          />
        </div>
      </section>

      <div className="bg-white">
        <FlowSection
          badge="For Customers"
          title="From scan to exit in under 5 minutes"
          subtitle="No training. No confusion. Just scan, pay, go."
          steps={customerSteps}
          accentColor="#2E86FF"
          accentClass="bg-enterprise-blue"
        />

        <div className="bg-gray-50">
          <FlowSection
            badge="For Store Staff"
            title="Real-time orders. One-tap status updates."
            subtitle="Less running around. More time helping customers."
            steps={staffSteps}
            accentColor="#EAB308"
            accentClass="bg-yellow-500"
          />
        </div>

        <FlowSection
          badge="For Store Admins"
          title="Full control from your phone or laptop"
          subtitle="Inventory, orders, and analytics — always at your fingertips."
          steps={adminSteps}
          accentColor="#2563EB"
          accentClass="bg-blue-600"
        />
      </div>

      <CtaBanner />
    </>
  )
}

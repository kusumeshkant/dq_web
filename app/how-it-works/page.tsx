import type { Metadata } from 'next'
import FlowSection   from '@/components/how-it-works/FlowSection'
import SectionHeading from '@/components/ui/SectionHeading'
import CtaBanner     from '@/components/home/CtaBanner'

export const metadata: Metadata = {
  title: 'How It Works — DQ App',
  description: 'Scan, pay, go. See the full DQ flow for customers, staff, and store admins.',
}

const customerSteps = [
  { number: '1', title: 'Download DQ & Sign Up', desc: 'Free app, takes 30 seconds.' },
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
  { number: '1', title: 'Log in to Admin App', desc: 'Android or web browser — your choice.' },
  { number: '2', title: 'Upload inventory from Excel', desc: 'One file, one click. Entire catalogue live in minutes.' },
  { number: '3', title: 'Monitor orders in real time', desc: 'See every order as it happens. Filter by status.' },
  { number: '4', title: 'Track revenue and analytics daily', desc: 'Revenue trends, top products, low stock alerts — all in one place.' },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-dq-dark to-green-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How It Works"
            title="Simple for everyone. Powerful underneath."
            subtitle="Three different users. Three different apps. One seamless experience."
            light
          />
        </div>
      </section>

      <div className="bg-white">
        <FlowSection
          badge="For Customers"
          title="From scan to exit in under 5 minutes"
          subtitle="No training. No confusion. Just scan, pay, go."
          steps={customerSteps}
          accentColor="#16A34A"
        />

        <div className="bg-gray-50">
          <FlowSection
            badge="For Store Staff"
            title="Real-time orders. One-tap status updates."
            subtitle="Less running around. More time helping customers."
            steps={staffSteps}
            accentColor="#F59E0B"
          />
        </div>

        <FlowSection
          badge="For Store Admins"
          title="Full control from your phone or laptop"
          subtitle="Inventory, orders, and analytics — always at your fingertips."
          steps={adminSteps}
          accentColor="#2563EB"
        />
      </div>

      <CtaBanner />
    </>
  )
}

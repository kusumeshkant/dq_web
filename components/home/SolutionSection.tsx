import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: '📷',
    title: 'Scan',
    description:
      'Customer opens DQ app, scans product barcodes as they shop. Cart builds in real time. No staff interaction needed.',
  },
  {
    number: '02',
    icon: '💳',
    title: 'Pay',
    description:
      'Customer pays via UPI, card, or wallet — directly on their phone. Powered by Razorpay. Instant confirmation.',
  },
  {
    number: '03',
    icon: '🚪',
    title: 'Go',
    description:
      'Customer shows QR code at exit. Staff validates in one scan. Done. No queue. No counter.',
  },
]

export default function SolutionSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How It Works"
          title="Three steps. Zero queues."
          subtitle="DQ transforms any store into a self-checkout experience in under an hour."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-dq-green to-dq-muted" />
              )}

              <div className="relative z-10 w-20 h-20 bg-dq-green rounded-2xl flex items-center justify-center text-3xl shadow-lg mb-6">
                {step.icon}
              </div>

              <span className="text-xs font-black tracking-widest text-dq-green uppercase mb-2">
                Step {step.number}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

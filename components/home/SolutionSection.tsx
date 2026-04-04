import SectionHeading from '@/components/ui/SectionHeading'

const steps = [
  {
    number: '01',
    icon: '📷',
    title: 'Scan',
    description: 'Customer opens DQ app, scans product barcodes as they shop. Cart builds in real time. No staff interaction needed.',
    color: 'bg-dq-green',
    accent: 'text-dq-green',
    light: 'bg-dq-light',
  },
  {
    number: '02',
    icon: '💳',
    title: 'Pay',
    description: 'Customer pays via UPI, card, or wallet — directly on their phone. Powered by Razorpay. Instant confirmation.',
    color: 'bg-dq-amber',
    accent: 'text-dq-amber',
    light: 'bg-amber-50',
  },
  {
    number: '03',
    icon: '🚪',
    title: 'Go',
    description: 'Customer shows QR code at exit. Staff validates in one scan. Done. No queue. No counter.',
    color: 'bg-blue-600',
    accent: 'text-blue-600',
    light: 'bg-blue-50',
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

        <div className="mt-14 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-dq-green via-dq-amber to-blue-600 opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col items-center text-center animate-fade-up`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Step number badge */}
                <div className="relative z-10 mb-5">
                  <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-6 h-6 ${step.color} rounded-full flex items-center justify-center`}>
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>
                </div>

                <span className={`text-xs font-black tracking-widest ${step.accent} uppercase mb-2`}>
                  Step {step.number}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>

                {/* Bottom highlight */}
                <div className={`mt-5 ${step.light} rounded-xl px-4 py-2`}>
                  <p className={`text-xs font-semibold ${step.accent}`}>
                    {i === 0 ? 'Works on any Android phone' : i === 1 ? 'UPI · Cards · Wallets' : 'Exit QR validation'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

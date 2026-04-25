'use client'

import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'

const signals = [
  {
    icon: '📱',
    title: 'UPI crossed 10 billion monthly transactions',
    body: "India's payment infrastructure is now mature enough that every customer at a fashion store can pay in 5 seconds on their phone. The rails are built. DQ runs on them.",
    tag: 'Payment infrastructure',
  },
  {
    icon: '🔒',
    title: 'QR acceptance became mainstream post-2020',
    body: 'Contactless-first behaviour is now the default for Indian urban consumers. Scanning a code to pay is no longer a behaviour DQ needs to teach — it already exists.',
    tag: 'Consumer behaviour',
  },
  {
    icon: '🏪',
    title: 'Indian fashion retail is digitising — but checkout hasn\'t',
    body: 'Branded stores in India have adopted ERP, Instagram, and online payments. The one touchpoint still running on 1990s logic is the billing counter. That\'s the gap DQ fills.',
    tag: 'Market gap',
  },
  {
    icon: '🎯',
    title: '180,000 mid-market stores with no self-checkout option',
    body: "Perpule proved the demand at large-format retail and was acquired by Amazon. The 180,000 mid-market fashion and lifestyle stores they didn't serve are DQ's primary market.",
    tag: 'Underserved segment',
  },
]

const moat = [
  { title: 'Exit QR validation', desc: 'Theft prevention built into the checkout flow — not a bolted-on feature.' },
  { title: '6-language support', desc: 'Hindi, Tamil, Telugu, Kannada, Bengali, English — built for pan-India rollout.' },
  { title: '3-app ecosystem', desc: 'Customer, staff, and admin apps that work together — not three separate tools.' },
  { title: 'Under 1-hour setup', desc: 'No IT team, no hardware. A store owner can go live alone in an afternoon.' },
]

export default function WhyNowSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Now"
          title="The timing has never been better."
          subtitle="Three converging forces make 2025–2026 the exact right moment for self-checkout in Indian fashion retail."
        />

        {/* Market signals */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {signals.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-dq-green/20 hover:bg-white hover:shadow-md transition-all duration-200 reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-2xl flex-shrink-0 mt-0.5">{s.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-dq-green bg-dq-light px-2.5 py-0.5 rounded-full border border-dq-muted">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product moat */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-bold text-gray-900 mb-8">
            What makes DQ hard to replicate
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moat.map((m, i) => (
              <div
                key={m.title}
                className={`bg-dq-dark rounded-2xl p-5 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${0.4 + i * 0.08}s` }}
              >
                <p className="text-dq-amber font-bold text-sm mb-2">{m.title}</p>
                <p className="text-green-300 text-xs leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

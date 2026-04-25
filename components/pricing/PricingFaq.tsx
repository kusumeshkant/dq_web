'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is there a setup fee?',
    a: 'No. Never. There is no setup fee on any plan.',
  },
  {
    q: 'What happens after the 30-day free trial?',
    a: "Pick a plan and continue — we'll walk you through it. Or don't — no obligation, no charge.",
  },
  {
    q: 'Can I switch plans?',
    a: 'Yes. Upgrade or downgrade anytime. Billing is prorated so you only pay for what you use.',
  },
  {
    q: 'Do my customers pay anything?',
    a: 'No. The DQ Customer App is always free for shoppers.',
  },
  {
    q: 'What payment methods do you accept for subscriptions?',
    a: 'UPI, credit card, debit card, and net banking — all processed securely via Razorpay.',
  },
  {
    q: 'What payment methods can my customers use at checkout?',
    a: 'Customers can pay via UPI, credit card, debit card, or digital wallets — all through Razorpay.',
  },
]

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Frequently asked questions</h2>
        <p className="text-center text-gray-500 text-sm mb-10">Everything you need to know before you start.</p>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-dq-green/30 shadow-sm' : 'border-gray-100 hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                >
                  <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-dq-green' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

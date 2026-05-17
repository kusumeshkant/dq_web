'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: "What if customers don't want to download an app?",
    a: "Most customers are already comfortable with UPI apps and mobile payments. When they see a shorter line for DQ users versus a long counter queue, the download happens naturally. The queue itself is the best motivation.",
  },
  {
    q: "What about theft — can someone scan items and walk out without paying?",
    a: "DQ has built-in Exit QR Validation. Every customer shows their paid QR code at the store exit. Staff validates in one tap — green means cleared, red means hold. No payment = no green light. Shrinkage is addressed by design.",
  },
  {
    q: "Do I need to buy any hardware?",
    a: "No. DQ works on Android phones, iPhones, and tablets your staff already has. The customer app is available on Android and iOS — nothing new to purchase or install.",
  },
  {
    q: "What if my internet goes down?",
    a: "The app shows clear offline states. No transaction is lost — orders queue locally and sync the moment connection is restored.",
  },
  {
    q: "What happens to my existing POS system?",
    a: "DQ works alongside your existing POS. Many stores use DQ for self-checkout while keeping one counter for customers who prefer traditional billing.",
  },
  {
    q: "How long does it take to get started?",
    a: "Under an hour for most stores. Upload your product catalogue from Excel, log your staff in, share your store code with customers — and you're live. We assist you through the entire setup.",
  },
]

export default function ObjectionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Common Questions"
          title="Questions store owners ask before getting started"
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-enterprise-blue/20 shadow-sm' : 'border-gray-100 hover:border-gray-200'
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
                      isOpen ? 'rotate-180 text-enterprise-blue' : ''
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

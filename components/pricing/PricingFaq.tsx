'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { PRICING_FAQ } from '@/lib/site'

export default function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const uid = useId()

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Frequently asked questions</h2>
        <p className="text-center text-ink-muted text-sm mb-10">Everything you need to know before you start.</p>
        <div className="space-y-2">
          {PRICING_FAQ.map((faq, i) => {
            const isOpen = openIndex === i
            const panelId = `${uid}-panel-${i}`
            const buttonId = `${uid}-button-${i}`
            return (
              <div
                key={faq.q}
                className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen ? 'border-enterprise-action/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
                  >
                    <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 flex-shrink-0 text-ink-muted transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-enterprise-action' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-6 pb-5">
                  <p className="text-ink-body text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

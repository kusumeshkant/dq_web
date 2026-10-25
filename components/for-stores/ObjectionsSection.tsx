'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { CLAIMS } from '@/lib/site'

const faqs = [
  {
    q: 'How do shoppers use DQ?',
    a: `Shoppers use DQ on their own phone: they scan product tags, pay in the app and show an exit pass. Anyone who prefers the counter can still use it — ${CLAIMS.till.toLowerCase()}.`,
  },
  {
    q: 'What about theft — can someone scan items and walk out without paying?',
    a: 'Every shopper shows an exit pass at the door — a QR code plus a short code. It is linked to a paid order, and staff check it in one tap. No paid order means no cleared exit.',
  },
  {
    q: 'Do I need to buy any hardware?',
    a: 'No. Your staff use their own phone for the staff app, and shoppers use theirs.',
  },
  {
    q: 'What if my internet goes down?',
    a: 'DQ needs an internet connection. If it drops, shoppers can pay at your counter as usual.',
  },
  {
    q: 'What happens to my existing billing software?',
    a: 'Nothing. DQ runs alongside it. Many stores keep one counter for shoppers who prefer traditional billing.',
  },
  {
    q: 'How long does it take to get started?',
    a: `${CLAIMS.setup}. Preparing that list is the main job, and we help you with it.`,
  },
  {
    q: 'Can my staff give discounts?',
    a: `Only within the limit you approve. Staff ask for a limit with a reason, and you can approve it or set a lower one. ${CLAIMS.discountLog}. ${CLAIMS.priceLock}.`,
  },
]

export default function ObjectionsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const uid = useId()

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Common questions"
          title="Questions store owners ask before getting started"
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, i) => {
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

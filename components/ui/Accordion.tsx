'use client'

import { useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface AccordionProps {
  items: ReadonlyArray<{ q: string; a: string }>
}

/** FAQ accordion: one panel open at a time, buttons wired to their regions. */
export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const uid = useId()

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen   = openIndex === i
        const panelId  = `${uid}-panel-${i}`
        const buttonId = `${uid}-button-${i}`
        return (
          <div
            key={item.q}
            className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden ${
              isOpen ? 'border-enterprise-action/30 shadow-sm' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
              >
                <span className="font-semibold text-gray-900 text-sm leading-snug">{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 flex-shrink-0 text-ink-muted transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-enterprise-action' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-6 pb-5">
              <p className="text-ink-body text-sm leading-relaxed">{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

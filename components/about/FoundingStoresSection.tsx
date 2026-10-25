'use client'

import { MessageCircle, Wrench, Handshake } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { useInView } from '@/hooks/useInView'
import { OFFER } from '@/lib/site'

// How we work with pilot stores. Replaced the investor-facing "Why now" / moat content (C-46, C-48–C-50).
const POINTS = [
  {
    Icon: Wrench,
    title: 'We set it up with you',
    body: 'We help you prepare your barcoded product list, set up the store and get your staff logged in.',
  },
  {
    Icon: MessageCircle,
    title: 'You talk to the founder',
    body: 'Onboarding and support run on WhatsApp, directly with the person building DQ.',
  },
  {
    Icon: Handshake,
    title: 'You shape what we build',
    body: `${OFFER.ask} ${OFFER.headline}. ${OFFER.terms}`,
  },
]

export default function FoundingStoresSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge={OFFER.name}
          title="How we work with founding stores"
          subtitle="A small group of stores, worked with closely."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {POINTS.map((p, i) => {
            const { Icon } = p
            return (
              <div
                key={p.title}
                className={`bg-white border border-gray-100 rounded-xl p-6 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="w-10 h-10 bg-blue-50 text-enterprise-action rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{p.title}</h3>
                <p className="text-ink-body text-sm leading-relaxed">{p.body}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

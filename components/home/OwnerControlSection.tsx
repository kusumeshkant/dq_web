'use client'

import { UserRound, ShieldCheck, ScrollText, Lock } from 'lucide-react'
import { useInView } from '@/hooks/useInView'
import { CLAIMS, HINDI } from '@/lib/site'

// The discount-approval journey as it works in the backend: staff request a
// max % (≤ 50) with a reason, the owner approves it or a lower one, and every
// use is written to the append-only DiscountLog.
const STEPS = [
  {
    Icon: UserRound,
    who: 'Staff',
    title: 'Asks for a discount limit',
    body: 'With a reason, from the staff app. For example: “Up to 20% for regular customers.”',
  },
  {
    Icon: ShieldCheck,
    who: 'You',
    title: 'Approve it — or a lower limit',
    body: 'Approve 20%, approve 10%, or say no. You can take the limit away at any time.',
  },
  {
    Icon: ScrollText,
    who: 'DQ',
    title: 'Logs every discount',
    body: `${CLAIMS.discountLog}. The log can’t be edited.`,
  },
]

export default function OwnerControlSection() {
  const { ref, inView } = useInView<HTMLElement>()
  return (
    <section ref={ref} className="py-20 lg:py-28 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-link border border-enterprise-blue/20">
            Owner control
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Discounts your staff can&apos;t misuse.
          </h2>
          <p lang="hi" className="font-hi mt-3 text-lg text-enterprise-link">{HINDI.control}</p>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            Staff give discounts only within the limit you set, and every one is on record.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {STEPS.map(({ Icon, who, title, body }, i) => (
            <li
              key={title}
              className={`bg-enterprise-surface border border-enterprise-elevated rounded-xl p-7 reveal${inView ? ' is-visible' : ''}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-enterprise-elevated rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-enterprise-link" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-enterprise-muted">{i + 1}. {who}</span>
              </div>
              <h3 className="text-white font-bold text-base mb-2 leading-snug">{title}</h3>
              <p className="text-enterprise-muted text-sm leading-relaxed">{body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 flex items-center gap-2 text-sm text-enterprise-muted">
          <Lock className="w-4 h-4 text-enterprise-link" aria-hidden="true" />
          {CLAIMS.priceLock}.
        </p>
      </div>
    </section>
  )
}

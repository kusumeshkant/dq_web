'use client'

// Concept C (05_motion_plan.md): staff request 20% → owner approves 10% →
// append-only log row. Plays once when scrolled into view; "Play again" replays.
// Server HTML, no-JS, reduced motion and "already on screen at load" all
// render the final state. No layout animations, so domMax is never loaded.

import { useEffect, useRef, useState } from 'react'
import { m, useInView, useReducedMotion } from 'framer-motion'
import { useTween } from '@/components/motion/useTween'
import { UserRound, ShieldCheck, ScrollText } from 'lucide-react'
import { DiscountLogScreen, OwnerApprovalScreen, StaffDiscountRequestScreen } from '@/components/phone/screens'
import { APPROVAL_EXAMPLE as EX } from '@/lib/site'
import { dur, ease } from '@/lib/motion'

const ICONS = [UserRound, ShieldCheck, ScrollText]
// Beat timings (s): card in, connector draws, next card…
const CARD_DELAY      = [0, 1.0, 2.4]
const CONNECTOR_DELAY = [0.5, 1.9]
const LOWER_AT_MS     = 1600
const LOG_AT_MS       = 2900

function Connector({ index, play }: { index: number; play: boolean }) {
  const props = {
    initial: play ? { pathLength: 0 } : false,
    animate: { pathLength: 1 },
    transition: { duration: 0.45, ease: ease.out, delay: play ? CONNECTOR_DELAY[index] : 0 },
  } as const
  return (
    <div className="flex items-center justify-center md:w-10" aria-hidden="true">
      <svg viewBox="0 0 40 12" className="hidden md:block w-10 h-3">
        <m.path d="M2 6 H34 M28 1 L34 6 L28 11" fill="none" strokeWidth="2" strokeLinecap="round" className="stroke-enterprise-link" {...props} />
      </svg>
      <svg viewBox="0 0 12 32" className="md:hidden w-3 h-8">
        <m.path d="M6 2 V26 M1 20 L6 26 L11 20" fill="none" strokeWidth="2" strokeLinecap="round" className="stroke-enterprise-link" {...props} />
      </svg>
    </div>
  )
}

function Sequence({ play }: { play: boolean }) {
  const [target, setTarget]   = useState<number>(play ? EX.requestedPct : EX.approvedPct)
  const pct                   = useTween(target, { from: target, duration: 0.6, instant: !play })
  const [showNew, setShowNew] = useState(!play)

  useEffect(() => {
    if (!play) { setTarget(EX.approvedPct); setShowNew(true); return }
    const a = setTimeout(() => setTarget(EX.approvedPct), LOWER_AT_MS)
    const b = setTimeout(() => setShowNew(true), LOG_AT_MS)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [play])

  const bodies = [
    <StaffDiscountRequestScreen key="s" />,
    <OwnerApprovalScreen key="o" pct={pct} />,
    <DiscountLogScreen key="l" showNew={showNew} />,
  ]

  return (
    <ol className="flex flex-col md:flex-row md:items-stretch">
      {EX.steps.map((s, i) => {
        const Icon = ICONS[i]
        return (
          <li key={s.title} className="contents">
            {i > 0 && <Connector index={i - 1} play={play} />}
            <m.div
              className="flex-1 rounded-xl bg-enterprise-surface border border-enterprise-elevated p-5"
              initial={play ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: dur.base, ease: ease.out, delay: play ? CARD_DELAY[i] : 0 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-enterprise-elevated rounded-lg flex items-center justify-center">
                  <Icon className="w-4 h-4 text-enterprise-link" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-enterprise-muted">{i + 1}. {s.who}</span>
              </div>
              <h3 className="text-white font-bold text-base leading-snug">{s.title}</h3>
              <p className="mt-1 text-enterprise-muted text-sm leading-relaxed">{s.body}</p>
              <div className="mt-4 rounded-lg bg-white p-4">{bodies[i]}</div>
            </m.div>
          </li>
        )
      })}
    </ol>
  )
}

export default function ApprovalFlow() {
  const ref    = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  // 'some' + a bottom margin fires when the top of the flow reaches the upper
  // 65% of the viewport. A fractional amount would never fire on phones, where
  // the stacked cards are taller than two screens.
  const inView = useInView(ref, { once: true, amount: 'some', margin: '0px 0px -35% 0px' })
  const [armed, setArmed] = useState(false)
  const [run, setRun]     = useState(0)

  // Arm only when the flow starts out of view, so it can play when reached.
  useEffect(() => {
    if (reduce || !ref.current) return
    if (ref.current.getBoundingClientRect().top > window.innerHeight * 0.65) setArmed(true)
  }, [reduce])

  const play = !reduce && ((armed && inView) || run > 0)

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-4">
        <span className="rounded-full bg-enterprise-elevated px-3 py-1 text-xs font-semibold text-white">Example</span>
        {!reduce && (
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-enterprise-elevated px-3 py-1.5 text-sm font-semibold text-enterprise-muted hover:text-white hover:border-enterprise-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-enterprise-link"
          >
            <span aria-hidden="true">↻</span> Play again
          </button>
        )}
      </div>
      {/* Hidden (armed, not yet in view) state keeps the same height: no CLS. */}
      <div className={armed && !inView && run === 0 ? 'invisible' : undefined}>
        <Sequence key={`${run}-${play}`} play={play} />
      </div>
    </div>
  )
}

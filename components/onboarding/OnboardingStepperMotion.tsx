'use client'

// Interactive half of concept E.
//   · ≥ md: tabs (role="tablist"), auto-advance every 2.2 s only while in view,
//     paused on hover/focus, visible Pause/Play button (WCAG 2.2.2). Each panel
//     plays its micro-moment when it becomes active.
//   · < md: the three screens stacked (same layout as the static version),
//     each playing once when it scrolls into view.
//   · Reduced motion: starts paused and screens render their final state.

import { useEffect, useId, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { CodePanel, DetailsPanel, PanelFrame, StepText, UploadPanel, type Tone } from './OnboardingPanels'
import { useTween } from '@/components/motion/useTween'
import { ONBOARDING as O } from '@/lib/site'

const ADVANCE_MS = 2200

/**
 * Animated: holds `from` until `start`, then moves to `to` after `delayMs`.
 * Not animated (play=false): always `to`.
 */
function useDelayed(from: number, to: number, play: boolean, start: boolean, delayMs: number) {
  const [v, setV] = useState(play ? from : to)
  useEffect(() => {
    if (!play) { setV(to); return }
    if (!start) { setV(from); return }
    const t = setTimeout(() => setV(to), delayMs)
    return () => clearTimeout(t)
  }, [play, start, from, to, delayMs])
  return v
}

function PlayingPanel({ index, play, start = true }: { index: number; play: boolean; start?: boolean }) {
  const filled   = useTween(useDelayed(0, 3, play, start, 150), { from: play ? 0 : 3, duration: 1.0, instant: !play })
  const progress = useTween(useDelayed(0, 1, play, start, 150), { from: play ? 0 : 1, duration: 0.9, instant: !play })
  const imported = useTween(useDelayed(0, O.sample.imported, play, start, 700), { from: play ? 0 : O.sample.imported, duration: 1.0, instant: !play })
  const revealed = useDelayed(0, 1, play, start, 300) === 1
  return (
    <PanelFrame>
      {index === 0 && <DetailsPanel filled={Math.floor(filled + 0.0001)} />}
      {index === 1 && <UploadPanel progress={progress} imported={imported} />}
      {index === 2 && <CodePanel revealed={revealed} />}
    </PanelFrame>
  )
}

function Tabs({ tone }: { tone: Tone }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4 })
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(!!reduce)
  const [hold, setHold] = useState(false)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const uid = useId()
  const auto = inView && !paused && !hold

  useEffect(() => {
    if (!auto) return
    const t = setTimeout(() => setActive((a) => (a + 1) % O.steps.length), ADVANCE_MS)
    return () => clearTimeout(t)
  }, [auto, active])

  function onKey(e: React.KeyboardEvent, i: number) {
    const n = O.steps.length
    const next = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : null
    if (next === null) return
    e.preventDefault()
    setActive(next)
    tabRefs.current[next]?.focus()
  }

  const dark = tone === 'dark'
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHold(true)}
      onMouseLeave={() => setHold(false)}
      onFocusCapture={() => setHold(true)}
      onBlurCapture={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setHold(false) }}
      className="grid grid-cols-[280px_1fr] gap-8 items-start"
    >
      <div>
        <div role="tablist" aria-label="Owner setup screens" aria-orientation="vertical" className="space-y-2">
          {O.steps.map((s, i) => {
            const selected = i === active
            return (
              <button
                key={s.key}
                ref={(el) => { tabRefs.current[i] = el }}
                role="tab"
                id={`${uid}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${uid}-panel`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKey(e, i)}
                className={`relative w-full overflow-hidden rounded-xl border px-4 py-3 text-left focus-visible:outline focus-visible:outline-2 ${
                  dark ? 'focus-visible:outline-enterprise-link' : 'focus-visible:outline-enterprise-action'
                } ${
                  selected
                    ? dark ? 'border-enterprise-link bg-enterprise-surface' : 'border-enterprise-action bg-blue-50'
                    : dark ? 'border-enterprise-elevated' : 'border-gray-200 bg-white'
                }`}
              >
                <span className={`block text-xs font-black uppercase tracking-[0.2em] ${dark ? 'text-enterprise-link' : 'text-enterprise-action'}`}>Screen {i + 1}</span>
                <span className={`block text-base font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{s.tab}</span>
                {selected && auto && (
                  <span
                    key={active}
                    aria-hidden="true"
                    className={`absolute bottom-0 left-0 h-0.5 w-full origin-left motion-reduce:hidden ${dark ? 'bg-enterprise-link' : 'bg-enterprise-action'}`}
                    style={{ animation: `dq-tab-progress ${ADVANCE_MS}ms linear forwards` }}
                  />
                )}
              </button>
            )
          })}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play auto-advance' : 'Pause auto-advance'}
          className={`mt-4 inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 ${
            dark
              ? 'border-enterprise-elevated text-enterprise-muted hover:text-white focus-visible:outline-enterprise-link'
              : 'border-gray-300 text-ink-body hover:bg-white focus-visible:outline-enterprise-action'
          }`}
        >
          <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span> {paused ? 'Play' : 'Pause'}
        </button>
      </div>

      <div role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`}>
        <PlayingPanel key={active} index={active} play={!reduce} />
        <div className="mt-4"><StepText index={active} tone={tone} /></div>
      </div>
    </div>
  )
}

function StackedCard({ index, tone }: { index: number; tone: Tone }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLLIElement>(null)
  const seen = useInView(ref, { once: true, amount: 0.4 })
  return (
    <li ref={ref}>
      <PlayingPanel index={index} play={!reduce} start={seen} />
      <div className="mt-4"><StepText index={index} tone={tone} /></div>
    </li>
  )
}

export default function OnboardingStepperMotion({ tone }: { tone: Tone }) {
  return (
    <>
      <div className="hidden md:block"><Tabs tone={tone} /></div>
      <ol className="md:hidden grid grid-cols-1 gap-6">
        {O.steps.map((s, i) => <StackedCard key={s.key} index={i} tone={tone} />)}
      </ol>
    </>
  )
}

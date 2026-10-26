'use client'

// Animated half of PhoneStory (concept A): pinned scroll story on desktop,
// scroll-snap carousel on mobile. Loaded client-side only (next/dynamic,
// ssr:false) — it is never visible without JS, and keeping useScroll and
// AnimatePresence out of first-load JS keeps the home page in budget.

import { useRef, useState } from 'react'
import { AnimatePresence, m, useInView, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import PhoneFrame from '@/components/phone/PhoneFrame'
import { STORY_STEPS } from '@/lib/site'
import { dur, ease } from '@/lib/motion'
import StepScreen from './StepScreen'

/* ── Desktop: pinned scroll story ──────────────────────────────────────── */
function PinnedStory() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const stepValue = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3])
  const [step, setStep] = useState(0)
  const inView = useInView(ref, { amount: 0.05 })

  useMotionValueEvent(stepValue, 'change', (v) => {
    const next = Math.min(3, Math.max(0, Math.floor(v)))
    setStep((s) => (s === next ? s : next))
  })

  return (
    <div ref={ref} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-[68px] h-[calc(100vh-68px)] flex items-center">
        <div className="mx-auto w-full max-w-5xl px-8 grid grid-cols-[auto_1fr] gap-16 items-center">
          <PhoneFrame>
            <AnimatePresence mode="popLayout" initial={false}>
              <m.div
                key={step}
                className="absolute inset-0"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: dur.base, ease: ease.out }}
              >
                {inView && <StepScreen index={step} play />}
              </m.div>
            </AnimatePresence>
          </PhoneFrame>

          <div className="flex gap-6">
            <div className="relative w-1 rounded-full bg-gray-200" aria-hidden="true">
              <m.div className="absolute inset-0 rounded-full bg-enterprise-action origin-top" style={{ scaleY: scrollYProgress }} />
            </div>
            <ol className="space-y-8">
              {STORY_STEPS.map((s, i) => (
                <li key={s.key} aria-current={i === step ? 'step' : undefined}>
                  <p className={`text-xs font-black uppercase tracking-[0.2em] ${i === step ? 'text-enterprise-action' : 'text-ink-muted'}`}>
                    Step {i + 1}
                  </p>
                  <h3 className={`mt-1 text-2xl font-bold ${i === step ? 'text-gray-900' : 'text-ink-muted'}`}>{s.title}</h3>
                  <p className={`mt-2 max-w-md leading-relaxed ${i === step ? 'text-ink-body' : 'text-ink-muted'}`}>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Mobile: scroll-snap carousel ──────────────────────────────────────── */
function CarouselCard({ index }: { index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const seen = useInView(ref, { once: true, amount: 0.6 })
  const s = STORY_STEPS[index]
  return (
    <li ref={ref} className="snap-center shrink-0 w-[260px] flex flex-col items-center">
      <PhoneFrame size="sm">{seen && <StepScreen index={index} play />}</PhoneFrame>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-enterprise-action">Step {index + 1}</p>
      <h3 className="mt-1 text-lg font-bold text-gray-900">{s.title}</h3>
      <p className="mt-1 text-sm text-center text-ink-body leading-relaxed">{s.body}</p>
    </li>
  )
}

function Carousel() {
  return (
    <div
      role="region"
      aria-label="How it works, 4 steps. Scroll sideways for the next step."
      tabIndex={0}
      className="mt-10 overflow-x-auto snap-x snap-mandatory focus-visible:outline focus-visible:outline-2 focus-visible:outline-enterprise-action"
    >
      <ol className="flex gap-6 px-[calc(50%-130px)] pb-4">
        {STORY_STEPS.map((s, i) => <CarouselCard key={s.key} index={i} />)}
      </ol>
    </div>
  )
}

export default function PhoneStoryMotion() {
  return (
    <>
      <div className="hidden md:block"><PinnedStory /></div>
      <div className="md:hidden"><Carousel /></div>
    </>
  )
}

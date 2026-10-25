'use client'

// Concept A (05_motion_plan.md): the shopper journey Scan → Cart → Pay → Exit pass.
//
//   · Desktop (≥ md): a 400vh section with a sticky phone; scroll progress picks
//     the step, screens crossfade, each plays its micro-moment on entry.
//   · Mobile (< md): a scroll-snap carousel; each card plays once when ~60% visible.
//   · Reduced motion / no JS: a static 4-up grid with numbered captions.
//
// The static vs animated switch is pure CSS (.story-static / .story-motion in
// globals.css), so no-JS and reduced-motion visitors never see an empty phone.

import dynamic from 'next/dynamic'
import { useAfterLoad } from '@/components/motion/useAfterLoad'
import SectionHeading from '@/components/ui/SectionHeading'
import PhoneFrame from '@/components/phone/PhoneFrame'
import StepScreen from './StepScreen'
import { CLAIMS, STORY_STEPS } from '@/lib/site'

// Placeholder heights match the mounted story (carousel 631px, pinned 400vh)
// so nothing below shifts when the chunk arrives (CLS). The chunk is only
// requested after page load (useAfterLoad), so it never delays the hero.
const Placeholder = () => <div className="h-[631px] md:h-[400vh]" aria-hidden="true" />

const PhoneStoryMotion = dynamic(() => import('./PhoneStoryMotion'), {
  ssr: false,
  loading: Placeholder,
})

/* ── Static fallback (no JS / reduced motion) ──────────────────────────── */
function StaticGrid() {
  return (
    <ol className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
      {STORY_STEPS.map((s, i) => (
        <li key={s.key} className="flex flex-col items-center max-w-[260px]">
          <PhoneFrame size="sm"><StepScreen index={i} play={false} /></PhoneFrame>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.2em] text-enterprise-action">Step {i + 1}</p>
          <h3 className="mt-1 text-lg font-bold text-gray-900">{s.title}</h3>
          <p className="mt-1 text-sm text-center text-ink-body leading-relaxed">{s.body}</p>
        </li>
      ))}
    </ol>
  )
}

function StoryMotion() {
  const ready = useAfterLoad()
  return ready ? <PhoneStoryMotion /> : <Placeholder />
}

export default function PhoneStory({ as = 'h2' }: { as?: 'h1' | 'h2' }) {
  return (
    <section className="py-20 bg-slate-50" aria-label="How a DQ checkout works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          as={as}
          badge="How it works"
          title="Scan. Pay. Walk out."
          subtitle={`${CLAIMS.channel} to check out. Your staff check the exit pass. Your till stays for anyone who wants it.`}
        />
      </div>

      <div className="story-static max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaticGrid />
      </div>

      <div className="story-motion">
        <StoryMotion />
      </div>

      <p className="mt-8 px-4 text-center text-sm text-ink-muted">{CLAIMS.illustrative}</p>
    </section>
  )
}

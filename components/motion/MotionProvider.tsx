'use client'

import { LazyMotion, MotionConfig } from 'framer-motion'
import { afterLoad } from '@/lib/after-load'

// The feature bundle (domAnimation) is fetched after the page has loaded and
// the browser is idle — never in first-load JS and never competing with the
// hero (LCP). Until it arrives, `m.*` elements render their resting state,
// which is always the visible, final state on this site.
const loadFeatures = () => afterLoad().then(() => import('./features')).then((mod) => mod.default)

/**
 * Site-wide motion setup. `strict` makes any accidental `motion.*` import
 * (which would pull in the full bundle) throw — use `m.*` instead.
 * reducedMotion="user" drops transform animations for users who ask for it.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  )
}

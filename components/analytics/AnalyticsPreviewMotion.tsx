'use client'

// Animated half of concept D: bars grow and KPIs count up once, when the
// panels are first in view. Only mounts after page load and never for
// reduced motion (see useEnhanced). It normally swaps in while still below the
// fold; if the visitor is already looking at it, it replays once from zero.

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import AnalyticsPanels, { FINAL_KPIS } from './AnalyticsPanels'
import { useTween } from '@/components/motion/useTween'

export default function AnalyticsPreviewMotion() {
  const ref   = useRef<HTMLDivElement>(null)
  // 'some' + bottom margin: a fractional amount never fires on phones, where
  // the stacked panels are taller than three screens.
  const shown = useInView(ref, { once: true, amount: 'some', margin: '0px 0px -25% 0px' })

  const sales  = useTween(shown ? FINAL_KPIS.sales : 0,  { from: 0, duration: 1.2 })
  const orders = useTween(shown ? FINAL_KPIS.orders : 0, { from: 0, duration: 1.2 })
  const unpaid = useTween(shown ? FINAL_KPIS.unpaid : 0, { from: 0, duration: 1.2 })

  return (
    <div ref={ref}>
      <AnalyticsPanels shown={shown} kpis={{ sales, orders, unpaid }} />
    </div>
  )
}

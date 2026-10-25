'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { useReducedMotion } from 'framer-motion'
import { useAfterLoad } from './useAfterLoad'

type Loader<P> = () => Promise<{ default: ComponentType<P> }>

/**
 * Progressive enhancement for below-the-fold animations.
 * Returns null (keep rendering the server's static end state) until the page
 * has loaded and the browser is idle; then imports the animated version.
 * Reduced-motion users keep the static version unless `allowReduced` is set
 * (e.g. an interactive stepper that simply won't auto-advance).
 * `load` must be a stable, module-level function.
 */
export function useEnhanced<P>(load: Loader<P>, allowReduced = false): ComponentType<P> | null {
  const ready  = useAfterLoad()
  const reduce = useReducedMotion()
  const [Comp, setComp] = useState<ComponentType<P> | null>(null)

  useEffect(() => {
    if (!ready || (reduce && !allowReduced)) return
    let live = true
    load().then((mod) => { if (live) setComp(() => mod.default) })
    return () => { live = false }
  }, [ready, reduce, allowReduced, load])

  return Comp
}

'use client'

import { useEffect, useRef, useState } from 'react'

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Animates a number towards `target` with requestAnimationFrame.
 * Used for count-ups instead of framer's useSpring, which would pull its
 * motion-value engine (~9 kB gz) into first-load JS on the home page.
 * `instant` (static/reduced-motion renders) jumps straight to the target.
 */
export function useTween(target: number, { from = target, duration = 0.8, instant = false } = {}): number {
  const [value, setValue] = useState(instant ? target : from)
  const current = useRef(value)

  useEffect(() => {
    if (instant) { current.current = target; setValue(target); return }
    const start = current.current
    if (start === target) return
    let raf = 0
    const t0 = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / (duration * 1000))
      const v = start + (target - start) * easeOut(t)
      current.current = v
      setValue(v)
      if (t < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, instant])

  return value
}

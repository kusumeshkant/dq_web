'use client'

import { useEffect, useRef, useState } from 'react'
import { m, useInView, useReducedMotion } from 'framer-motion'
import { dur, ease } from '@/lib/motion'

type Tag = 'div' | 'li' | 'section' | 'article'

interface RevealProps {
  as?: Tag
  delay?: number
  className?: string
  children: React.ReactNode
}

/**
 * Fade-up on first scroll into view.
 *
 * Visible by default: the server HTML, no-JS visitors, reduced-motion users
 * and anything already on screen at load are never hidden. Only content that
 * starts below the fold is "armed" (hidden instantly, out of sight) and then
 * revealed when it scrolls in.
 */
export default function Reveal({ as = 'div', delay = 0, className, children }: RevealProps) {
  const ref     = useRef<HTMLDivElement>(null)
  const reduce  = useReducedMotion()
  const inView  = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    if (reduce || !ref.current) return
    if (ref.current.getBoundingClientRect().top > window.innerHeight) setArmed(true)
  }, [reduce])

  const Comp = m[as] as typeof m.div

  return (
    <Comp
      ref={ref}
      className={className}
      initial={false}
      animate={!armed || inView ? 'shown' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 24, transition: { duration: 0 } },
        shown:  { opacity: 1, y: 0,  transition: { duration: dur.slow, ease: ease.out, delay: armed ? delay : 0 } },
      }}
    >
      {children}
    </Comp>
  )
}

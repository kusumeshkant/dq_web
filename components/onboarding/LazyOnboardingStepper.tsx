'use client'

import { useEnhanced } from '@/components/motion/useEnhanced'
import type { Tone } from './OnboardingPanels'

const load = () => import('./OnboardingStepperMotion')

/** Static screens until the interactive stepper has loaded (after page load). Reduced motion still gets it, without auto-advance. */
export default function LazyOnboardingStepper({ tone, children }: { tone: Tone; children: React.ReactNode }) {
  const Motion = useEnhanced(load, true)
  return Motion ? <Motion tone={tone} /> : <>{children}</>
}

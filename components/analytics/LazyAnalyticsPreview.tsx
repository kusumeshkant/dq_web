'use client'

import { useEnhanced } from '@/components/motion/useEnhanced'

const load = () => import('./AnalyticsPreviewMotion')

/** Static panels until the animated preview has loaded (after page load; never for reduced motion). */
export default function LazyAnalyticsPreview({ children }: { children: React.ReactNode }) {
  const Motion = useEnhanced(load)
  return Motion ? <Motion /> : <>{children}</>
}

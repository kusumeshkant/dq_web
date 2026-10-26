'use client'

import { useEnhanced } from '@/components/motion/useEnhanced'

const load = () => import('./QueueSceneMotion')

/** Renders the server's static panels until the animated scene has loaded (after page load). */
export default function LazyQueueScene({ children }: { children: React.ReactNode }) {
  const Motion = useEnhanced(load)
  return Motion ? <Motion /> : <>{children}</>
}

'use client'

import dynamic from 'next/dynamic'
import { useAfterLoad } from '@/components/motion/useAfterLoad'

// The home page's inline application form. It needs JS to submit anyway, so it
// loads client-side to keep ~9 kB out of the home page's first-load JS (the
// hero h1 is the LCP element). The wrapper reserves the measured form height at
// each breakpoint so nothing shifts when it mounts (CLS).
const Skeleton = () => (
    <div className="space-y-4" aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-12 rounded-xl bg-gray-100" />
      ))}
      <div className="h-14 rounded-xl bg-blue-50" />
    </div>
)

// Requested only after page load (useAfterLoad) so it never competes with the hero.
const ContactForm = dynamic(() => import('@/components/contact/ContactForm'), { ssr: false, loading: Skeleton })

export default function LazyContactForm() {
  const ready = useAfterLoad()
  return (
    <div className="js-only min-h-[1048px] sm:min-h-[644px] md:min-h-[608px] lg:min-h-[664px] xl:min-h-[644px]">
      {ready ? <ContactForm /> : <Skeleton />}
    </div>
  )
}

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const isContactPage = pathname === '/contact' || pathname === '/contact/'

  useEffect(() => {
    if (isContactPage) return
    function onScroll() {
      setVisible(window.scrollY > 320)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [isContactPage])

  if (isContactPage) return null

  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 py-3 flex items-center gap-2.5 safe-area-inset-bottom">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-tight truncate">Remove queues from your store</p>
          <p className="text-xs text-gray-500 mt-0.5">Web apps live · No hardware · Free trial</p>
        </div>
        <a
          href="https://dq.dqstore.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 border-2 border-dq-green text-dq-green text-sm font-bold px-4 py-2 rounded-xl hover:bg-dq-light active:scale-95 transition-all duration-150 whitespace-nowrap"
        >
          Try App ↗
        </a>
        <Link
          href="/contact"
          className="flex-shrink-0 bg-dq-green text-white text-sm font-bold px-4 py-2 rounded-xl hover:bg-dq-dark active:scale-95 transition-all duration-150 whitespace-nowrap shadow-sm"
        >
          Demo →
        </Link>
      </div>
    </div>
  )
}

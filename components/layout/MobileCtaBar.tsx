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
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_24px_rgba(0,0,0,0.10)] px-4 py-3 flex items-center gap-3 safe-area-inset-bottom">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-gray-900 leading-tight truncate">Remove queues from your store</p>
          <p className="text-xs text-gray-500 mt-0.5">Free trial · No hardware · Live in &lt;1hr</p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 bg-dq-green text-white text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-dq-dark active:scale-95 transition-all duration-150 whitespace-nowrap shadow-sm"
        >
          Book Demo →
        </Link>
      </div>
    </div>
  )
}

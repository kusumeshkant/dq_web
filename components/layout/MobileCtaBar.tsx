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
      <div className="bg-enterprise-navy border-t border-enterprise-elevated shadow-[0_-4px_24px_rgba(0,0,0,0.30)] px-4 py-3 flex items-center gap-2.5">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white leading-tight truncate">Intelligence at Every Transaction.</p>
          <p className="text-xs text-enterprise-muted mt-0.5">Web apps live · No hardware required</p>
        </div>
        <a
          href="https://app.dqstore.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 border border-enterprise-elevated text-enterprise-muted text-sm font-semibold px-3 py-2 rounded-lg hover:border-enterprise-muted/40 hover:text-white active:scale-95 transition-all duration-150 whitespace-nowrap"
        >
          Sign In ↗
        </a>
        <Link
          href="/contact"
          className="flex-shrink-0 bg-enterprise-blue text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-enterprise-blue-hover active:scale-95 transition-all duration-150 whitespace-nowrap shadow-[0_2px_8px_rgba(46,134,255,0.4)]"
        >
          Demo →
        </Link>
      </div>
    </div>
  )
}

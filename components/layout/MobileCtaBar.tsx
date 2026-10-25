'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { OFFER } from '@/lib/site'
import WhatsAppIcon from './WhatsAppIcon'
import { WA_HREF } from './WhatsAppButton'

export default function MobileCtaBar() {
  const [visible, setVisible] = useState(false)
  const pathname = usePathname()
  const barRef = useRef<HTMLElement>(null)
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

  // `inert` keeps the off-screen bar out of the tab order and the a11y tree.
  // Set imperatively: React 18 doesn't know the attribute.
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    if (visible) el.removeAttribute('inert')
    else el.setAttribute('inert', '')
  }, [visible])

  if (isContactPage) return null

  return (
    <aside
      aria-label="Apply for the pilot"
      ref={barRef}
      className={`lg:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ease-out ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-enterprise-navy border-t border-enterprise-elevated shadow-[0_-4px_24px_rgba(0,0,0,0.30)] px-4 py-3 flex items-center gap-2.5">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white leading-tight truncate">{OFFER.headline}</p>
          <p className="text-xs text-enterprise-muted mt-0.5 truncate">{OFFER.termsShort}</p>
        </div>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex-shrink-0 w-10 h-10 rounded-lg bg-whatsapp-deep text-white flex items-center justify-center active:scale-95 transition-transform"
        >
          <WhatsAppIcon className="w-5 h-5" />
        </a>
        <Link
          href="/contact"
          className="flex-shrink-0 bg-enterprise-action text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-enterprise-action-hover active:scale-95 transition-all duration-150 whitespace-nowrap"
        >
          Apply →
        </Link>
      </div>
    </aside>
  )
}

'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function NavbarClient() {
  const [open, setOpen]     = useState(false)
  const [visible, setVisible] = useState(false)
  const pathname            = usePathname()
  const drawerRef           = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true))
    } else {
      setVisible(false)
    }
  }, [open])

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [])


  return (
    <>
      {/* Desktop nav */}
      <div className="hidden lg:flex items-center gap-1">
        <nav className="flex items-center gap-0.5" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'text-dq-green bg-dq-light font-semibold'
                    : 'text-gray-600 hover:text-dq-green hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="ml-3 flex items-center gap-2">
          <a
            href="https://dq.dqstore.in"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-semibold rounded-xl border-2 border-dq-green text-dq-green hover:bg-dq-light active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
          >
            Launch App ↗
          </a>
          <Button href="/contact" size="sm" className="font-semibold">
            Book Free Demo
          </Button>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-nav"
          ref={drawerRef}
          className={`absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl lg:hidden z-50 transition-all duration-200 origin-top ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
          }`}
        >
          <nav className="flex flex-col p-4 gap-0.5" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-150 ${
                    isActive
                      ? 'text-dq-green bg-dq-light font-semibold'
                      : 'text-gray-700 hover:text-dq-green hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
              <a
                href="https://dq.dqstore.in"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl border-2 border-dq-green text-dq-green hover:bg-dq-light active:scale-[0.98] transition-all duration-200"
              >
                Launch Web App ↗
              </a>
              <Button href="/contact" size="sm" className="w-full justify-center font-semibold">
                Book Free Demo
              </Button>
              <p className="text-center text-xs text-gray-400">30-day free trial · No credit card</p>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

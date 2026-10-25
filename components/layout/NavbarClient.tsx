'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, STORE_LOGIN_URL } from '@/lib/constants'
import { CTA } from '@/lib/site'
import Button from '@/components/ui/Button'

const FOCUSABLE = 'a[href], button:not([disabled])'

export default function NavbarClient() {
  const [open, setOpen]       = useState(false)
  const [visible, setVisible] = useState(false)
  const pathname              = usePathname()
  const drawerRef             = useRef<HTMLDivElement>(null)
  const toggleRef             = useRef<HTMLButtonElement>(null)

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Entrance transition + move focus into the drawer
  useEffect(() => {
    if (!open) {
      setVisible(false)
      return
    }
    requestAnimationFrame(() => {
      setVisible(true)
      drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus()
    })
  }, [open])

  // Scroll lock while the drawer is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  // Esc closes (and returns focus); Tab is trapped inside toggle + drawer
  useEffect(() => {
    if (!open) return
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault()
        close(true)
        return
      }
      if (e.key !== 'Tab' || !drawerRef.current || !toggleRef.current) return
      const items = [toggleRef.current, ...Array.from(drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))]
      const first = items[0]
      const last  = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (!active || !items.includes(active)) {
        e.preventDefault()
        first.focus()
      } else if (e.shiftKey && active === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && active === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open, close])

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
                aria-current={isActive ? 'page' : undefined}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150 ${
                  isActive
                    ? 'text-enterprise-action bg-blue-50 font-semibold'
                    : 'text-ink-body hover:text-enterprise-action hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <div className="ml-3 flex items-center gap-4">
          <a
            href={STORE_LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-muted hover:text-ink underline-offset-2 hover:underline whitespace-nowrap"
          >
            {CTA.storeLogin}
          </a>
          <Button href="/contact" size="sm" className="rounded-lg">
            {CTA.short}
          </Button>
        </div>
      </div>

      {/* Mobile hamburger */}
      <button
        ref={toggleRef}
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
        onClick={() => (open ? close(true) : setOpen(true))}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav"
      >
        {open ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
      </button>

      {/* Mobile drawer + backdrop */}
      {open && (
        <>
          <div
            className={`lg:hidden fixed inset-x-0 bottom-0 top-[68px] bg-enterprise-navy/60 z-40 transition-opacity duration-200 ${
              visible ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => close(true)}
            aria-hidden="true"
          />
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
                    aria-current={isActive ? 'page' : undefined}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-all duration-150 ${
                      isActive
                        ? 'text-enterprise-action bg-blue-50 font-semibold'
                        : 'text-gray-700 hover:text-enterprise-action hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <div className="pt-3 mt-2 border-t border-gray-100 space-y-3">
                <Button href="/contact" size="sm" className="w-full justify-center rounded-lg">
                  {CTA.primary}
                </Button>
                <a
                  href={STORE_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm text-ink-muted hover:text-ink hover:underline underline-offset-2 py-1"
                >
                  {CTA.storeLogin}
                </a>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}

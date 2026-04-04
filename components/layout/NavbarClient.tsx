'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function NavbarClient() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Desktop nav links */}
      <nav className="hidden lg:flex items-center gap-1">
        {NAV_LINKS.map((link) => {
          const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive
                  ? 'text-dq-green bg-dq-light font-semibold'
                  : 'text-gray-600 hover:text-dq-green hover:bg-dq-light'
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <div className="hidden lg:block">
        <Button href="/contact" size="sm">
          Book Free Demo
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg lg:hidden z-50">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'text-dq-green bg-dq-light font-semibold'
                      : 'text-gray-700 hover:text-dq-green hover:bg-dq-light'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 border-t border-gray-100 mt-2">
              <Button href="/contact" size="sm" className="w-full justify-center">
                Book Free Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

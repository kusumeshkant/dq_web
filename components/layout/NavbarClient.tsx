'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function NavbarClient() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop nav links */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:text-dq-green hover:bg-dq-light transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="hidden md:block">
        <Button href="/contact" size="sm">
          Book Free Demo
        </Button>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile drawer */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden z-50">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-sm font-medium text-gray-700 rounded-lg hover:text-dq-green hover:bg-dq-light transition-colors"
              >
                {link.label}
              </Link>
            ))}
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

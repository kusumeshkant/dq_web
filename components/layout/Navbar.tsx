import Link from 'next/link'
import NavbarClient from './NavbarClient'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-dq-green rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">DQ</span>
            </div>
            <span className="font-bold text-lg text-gray-900">
              DQ <span className="text-dq-green">Store</span>
            </span>
          </Link>

          {/* Client component handles nav links + mobile menu */}
          <NavbarClient />
        </div>
      </div>
    </header>
  )
}

import Link from 'next/link'
import NavbarClient from './NavbarClient'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-10">
        <div className="relative flex items-center justify-between h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-dq-green rounded-xl flex items-center justify-center shadow-sm group-hover:bg-dq-dark transition-colors duration-200">
              <span className="text-white font-black text-sm tracking-tight">DQ</span>
            </div>
            <span className="font-bold text-lg text-gray-900 tracking-tight">
              DQ
            </span>
          </Link>

          {/* Client component handles nav links + mobile menu */}
          <NavbarClient />
        </div>
      </div>
    </header>
  )
}

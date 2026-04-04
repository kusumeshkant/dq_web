import Link from 'next/link'
import { NAV_LINKS, CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-dq-green rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">DQ</span>
              </div>
              <span className="font-bold text-lg text-white">DQ Store</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Making the checkout queue extinct in Indian retail — one store at a time.
            </p>
            <p className="text-xs mt-4 text-gray-500">
              📧 {CONTACT_EMAIL}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-dq-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-dq-green transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-dq-green transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-dq-green transition-colors">Pricing</Link></li>
              <li><span className="text-gray-600">Privacy Policy</span></li>
              <li><span className="text-gray-600">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 DQ Technologies Pvt Ltd. All rights reserved.</p>
          <p>Built in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}

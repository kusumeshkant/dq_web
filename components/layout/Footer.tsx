import Link from 'next/link'
import { NAV_LINKS, CONTACT_EMAIL } from '@/lib/constants'

const productLinks = NAV_LINKS.filter(l => l.href !== '/')

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-gray-800">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-dq-green rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm tracking-tight">DQ</span>
              </div>
              <span className="font-bold text-lg text-white">DQ</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-gray-400">
              Making the checkout queue extinct in Indian retail — one store at a time.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-xs text-gray-500">
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-dq-green transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-xs text-gray-500">Monday–Saturday, 10am–7pm IST</p>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Product
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-dq-green transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Apps */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Live Apps
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://dq.dqstore.in" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-dq-green transition-colors">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                  Customer App ↗
                </a>
              </li>
              <li>
                <a href="https://staff.dqstore.in" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-dq-green transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                  Staff Portal ↗
                </a>
              </li>
              <li>
                <a href="https://app.dqstore.in" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-dq-green transition-colors">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                  Admin Dashboard ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about"   className="hover:text-dq-green transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-dq-green transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-dq-green transition-colors">Pricing</Link></li>
              <li><Link href="/privacy" className="hover:text-dq-green transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms"   className="hover:text-dq-green transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© 2026 DQ Technologies Pvt Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">Built with ❤️ in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  )
}

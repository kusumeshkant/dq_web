import Link from 'next/link'
import { NAV_LINKS, CONTACT_EMAIL } from '@/lib/constants'

const productLinks = NAV_LINKS.filter(l => l.href !== '/')

export default function Footer() {
  return (
    <footer className="bg-[#090F17] text-enterprise-muted pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-enterprise-elevated">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-enterprise-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">DQ</span>
              </div>
              <span className="font-bold text-lg text-white">DQ</span>
            </div>
            <p className="text-sm font-semibold text-white mb-1">
              Intelligence at Every Transaction.
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-enterprise-muted mt-1">
              Checkout intelligence platform for India&apos;s specialty retail —
              fashion, footwear, jewellery, and lifestyle chains.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-xs text-enterprise-muted/70">
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-enterprise-blue transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-xs text-enterprise-muted/70">Monday–Saturday, 10am–7pm IST</p>
            </div>

            {/* System status */}
            <div className="mt-6 space-y-1.5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-enterprise-muted/60 mb-2">System Status</p>
              {[
                { name: 'Customer App',    dot: 'bg-enterprise-live' },
                { name: 'Staff Portal',    dot: 'bg-enterprise-live' },
                { name: 'Admin Dashboard', dot: 'bg-enterprise-live' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <span className={`w-1.5 h-1.5 ${item.dot} rounded-full flex-shrink-0`} />
                  <span className="text-xs text-enterprise-muted/60">{item.name} — Operational</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-enterprise-blue transition-colors">
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
                   className="flex items-center gap-2 hover:text-enterprise-blue transition-colors">
                  <span className="w-1.5 h-1.5 bg-enterprise-live rounded-full flex-shrink-0" />
                  Customer App ↗
                </a>
              </li>
              <li>
                <a href="https://staff.dqstore.in" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-enterprise-blue transition-colors">
                  <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full flex-shrink-0" />
                  Staff Portal ↗
                </a>
              </li>
              <li>
                <a href="https://app.dqstore.in" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-enterprise-blue transition-colors">
                  <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
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
              <li><Link href="/about"   className="hover:text-enterprise-blue transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-enterprise-blue transition-colors">Contact</Link></li>
              <li><Link href="/pricing" className="hover:text-enterprise-blue transition-colors">Pricing</Link></li>
              <li>
                <Link href="/contact" className="hover:text-enterprise-blue transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li><Link href="/privacy" className="hover:text-enterprise-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms"   className="hover:text-enterprise-blue transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-enterprise-muted/50">
          <p>© 2026 DQ Technologies Pvt Ltd. All rights reserved.</p>
          <p>Built in India for India&apos;s specialty retail.</p>
        </div>
      </div>
    </footer>
  )
}

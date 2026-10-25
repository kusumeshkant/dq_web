import Link from 'next/link'
import { NAV_LINKS, CONTACT_EMAIL, STORE_LOGIN_URL } from '@/lib/constants'
import { BRAND, CLAIMS, CTA, FOUNDER } from '@/lib/site'

const productLinks = NAV_LINKS.filter(l => l.href !== '/')

export default function Footer() {
  return (
    <footer className="bg-enterprise-footer text-enterprise-muted pb-20 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-enterprise-elevated">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-enterprise-action rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight" aria-hidden="true">DQ</span>
              </div>
              <span className="font-bold text-lg text-white">{BRAND}</span>
            </div>
            <p className="text-sm font-semibold text-white mb-1">
              No billing queue.
            </p>
            <p className="text-sm leading-relaxed max-w-xs text-enterprise-muted mt-1">
              {CLAIMS.category}. {CLAIMS.status}.
            </p>
            <div className="mt-5 space-y-1.5">
              <p className="text-sm text-enterprise-muted">
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-enterprise-link transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="text-sm text-enterprise-subtle">Monday–Saturday, 10am–7pm IST</p>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h2 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Platform
            </h2>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-enterprise-link transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white font-semibold text-xs mb-4 uppercase tracking-widest">
              Company
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about"   className="hover:text-enterprise-link transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-enterprise-link transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-enterprise-link transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms"   className="hover:text-enterprise-link transition-colors">Terms of Service</Link></li>
              <li>
                <a href={STORE_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-enterprise-link transition-colors">
                  {CTA.storeLogin}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-enterprise-subtle">
          <p>© 2026 {BRAND}. All rights reserved.</p>
          <p>
            Built by {FOUNDER.name} ·{' '}
            <a
              href={FOUNDER.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${FOUNDER.name} on LinkedIn`}
              className="underline underline-offset-2 hover:text-enterprise-link"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

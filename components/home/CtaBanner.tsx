import Link from 'next/link'
import { Store } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-enterprise-navy overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.1] tracking-tight">
            Ready to add intelligence<br className="hidden sm:block" />
            to every transaction?
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            See DQ running live in your store category. 48-hour deployment. No hardware. No IT team.
          </p>
        </div>

        {/* Primary CTA card — store owners */}
        <div className="max-w-lg mx-auto">
          <div className="bg-enterprise-surface border border-enterprise-elevated hover:border-enterprise-blue/40 rounded-xl p-7 flex flex-col gap-5 transition-all duration-300">
            <div className="w-11 h-11 bg-enterprise-blue/10 rounded-xl flex items-center justify-center">
              <Store className="w-5 h-5 text-enterprise-blue" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">For store owners &amp; GMs</h3>
              <p className="text-enterprise-muted text-sm mt-2 leading-relaxed">
                Book a live walkthrough of DQ in your store category.
                We configure and deploy in 48 hours — no hardware, no IT team required.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-enterprise-blue hover:bg-enterprise-blue-hover text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(46,134,255,0.3)] hover:shadow-[0_6px_24px_rgba(46,134,255,0.4)]"
            >
              Request a Store Demo →
            </Link>
            <p className="text-[11px] text-enterprise-muted/60 -mt-2">
              Onboarding in 48 hours · No commitment required
            </p>
          </div>

          {/* Secondary enterprise line */}
          <p className="mt-4 text-center text-[13px] text-enterprise-muted/60 leading-relaxed">
            Enterprise partnerships and platform overview available on request.{' '}
            <Link
              href="/contact"
              className="text-enterprise-muted/80 hover:text-enterprise-muted underline underline-offset-2 decoration-enterprise-muted/40 hover:decoration-enterprise-muted/70 transition-colors duration-200"
            >
              Request Platform Overview
            </Link>
          </p>
        </div>

        {/* Bottom trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-enterprise-muted/70">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-enterprise-live rounded-full" />
            All three apps live and operational
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full" />
            Production-grade cloud infrastructure
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-enterprise-muted/40 rounded-full" />
            RBI-compliant digital payments
          </span>
        </div>

      </div>
    </section>
  )
}

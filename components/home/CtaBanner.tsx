import Link from 'next/link'
import { Store, TrendingUp } from 'lucide-react'

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
            Two paths. Same platform. Choose the conversation that fits your role.
          </p>
        </div>

        {/* Two-track CTA cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">

          {/* Track 1: Store owner */}
          <div className="bg-enterprise-surface border border-enterprise-elevated hover:border-enterprise-blue/40 rounded-xl p-7 flex flex-col gap-5 transition-all duration-300 group">
            <div className="w-11 h-11 bg-enterprise-blue/10 rounded-xl flex items-center justify-center">
              <Store className="w-5 h-5 text-enterprise-blue" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">For store owners &amp; GMs</h3>
              <p className="text-enterprise-muted text-sm mt-2 leading-relaxed">
                See DQ running live in your store category.
                48-hour deployment after demo. No hardware. No IT team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-enterprise-blue hover:bg-enterprise-blue-hover text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all duration-200 shadow-[0_4px_16px_rgba(46,134,255,0.3)] hover:shadow-[0_6px_24px_rgba(46,134,255,0.4)] mt-auto"
            >
              Request a Store Demo →
            </Link>
            <p className="text-[11px] text-enterprise-muted/60 -mt-2">
              Onboarding in 48 hours · No commitment required
            </p>
          </div>

          {/* Track 2: Investor / Partner */}
          <div className="bg-enterprise-surface border border-enterprise-elevated hover:border-enterprise-elevated/80 rounded-xl p-7 flex flex-col gap-5 transition-all duration-300 group">
            <div className="w-11 h-11 bg-enterprise-elevated rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-enterprise-muted" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg leading-snug">For investors &amp; enterprise partners</h3>
              <p className="text-enterprise-muted text-sm mt-2 leading-relaxed">
                Platform architecture, unit economics, and four-layer vision available on request.
                Full technical and commercial overview deck.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-enterprise-elevated hover:border-enterprise-muted/50 text-enterprise-muted hover:text-white font-semibold px-5 py-3 rounded-lg text-sm transition-all duration-200 mt-auto"
            >
              Request Platform Overview →
            </Link>
            <p className="text-[11px] text-enterprise-muted/60 -mt-2">
              Architecture · Unit economics · Four-layer vision
            </p>
          </div>

        </div>

        {/* Bottom trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-enterprise-muted/70">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-enterprise-live rounded-full" />
            All three apps live and operational
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full" />
            Azure production infrastructure
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-enterprise-muted/40 rounded-full" />
            Razorpay Model B — RBI compliant
          </span>
        </div>

      </div>
    </section>
  )
}

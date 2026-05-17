import Link from 'next/link'
import { Activity, GitBranch, Shield, Server, Zap, QrCode, BarChart3, Users } from 'lucide-react'

const ANCHOR_STATS = [
  { value: '₹0',    label: 'Hardware cost' },
  { value: '48hrs', label: 'Deployment time' },
  { value: '82%',   label: 'Gross margin' },
  { value: '3',     label: 'Production apps' },
]

const INFRA_SIGNALS = [
  { Icon: Server,    label: 'Azure — Central India' },
  { Icon: Shield,    label: 'Razorpay Model B' },
  { Icon: Activity,  label: '12-Phase Observability' },
  { Icon: GitBranch, label: 'DEV → UAT → PROD' },
]

const LIVE_APPS = [
  { name: 'Customer Checkout',    href: 'https://dq.dqstore.in',    dot: 'bg-enterprise-live', Icon: QrCode  },
  { name: 'Staff Portal',         href: 'https://staff.dqstore.in', dot: 'bg-enterprise-blue', Icon: Users   },
  { name: 'Admin Dashboard',      href: 'https://app.dqstore.in',   dot: 'bg-yellow-400',      Icon: BarChart3 },
]

export default function HeroSection() {
  return (
    <section className="relative bg-enterprise-navy overflow-hidden">
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.5) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      {/* Accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-enterprise-blue to-transparent opacity-60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">

          {/* ── Left: copy ── */}
          <div className="animate-fade-up">

            {/* Platform badge */}
            <div className="inline-flex items-center gap-2 bg-enterprise-surface border border-enterprise-elevated rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 bg-enterprise-blue rounded-full" />
              <span className="text-enterprise-blue text-xs font-semibold tracking-wide">
                Checkout Intelligence Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-[1.07] tracking-tight">
              Intelligence at every<br />
              <span className="text-enterprise-blue">retail transaction.</span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-enterprise-muted leading-relaxed max-w-[540px]">
              DQ turns every retail transaction into structured operational intelligence.
              Deployed in 48 hours across fashion, footwear, and lifestyle chains —
              zero hardware, no IT team.
            </p>

            {/* Core phrase */}
            <p className="mt-4 text-sm font-medium text-enterprise-blue">
              Every transaction compounds platform intelligence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-enterprise-blue hover:bg-enterprise-blue-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(46,134,255,0.35)] hover:shadow-[0_6px_24px_rgba(46,134,255,0.45)] hover:-translate-y-0.5 active:scale-[0.98] text-base"
              >
                Request a Demo
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 text-enterprise-muted hover:text-white border border-enterprise-elevated hover:border-enterprise-blue/50 font-medium px-7 py-3.5 rounded-lg transition-all duration-200 text-base"
              >
                View Platform →
              </Link>
            </div>

            {/* Micro trust */}
            <p className="mt-5 text-xs text-enterprise-muted/70 flex flex-wrap items-center gap-x-5 gap-y-1.5">
              <span className="flex items-center gap-1.5">
                <span className="text-enterprise-blue font-bold">✓</span> Zero hardware required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-enterprise-blue font-bold">✓</span> 48-hour deployment
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-enterprise-blue font-bold">✓</span> Production-grade infrastructure
              </span>
            </p>

            {/* Mobile anchor stats */}
            <div className="lg:hidden mt-10 grid grid-cols-4 gap-2">
              {ANCHOR_STATS.map((s) => (
                <div key={s.label} className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-white tabular-nums">{s.value}</p>
                  <p className="text-[10px] text-enterprise-muted mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: platform panel ── */}
          <div
            className="hidden lg:flex flex-col gap-3 animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            {/* Platform architecture card */}
            <div className="bg-enterprise-surface border border-enterprise-elevated rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-enterprise-elevated">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4A4A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-enterprise-live" />
                  </div>
                  <span className="text-enterprise-muted text-[11px] font-mono ml-1">platform.architecture</span>
                </div>
                <span className="text-[10px] text-enterprise-blue font-semibold bg-enterprise-blue/10 border border-enterprise-blue/20 px-2 py-0.5 rounded-full">LIVE</span>
              </div>
              <div className="p-4 font-mono text-[11px] leading-relaxed space-y-1 text-enterprise-muted">
                <div className="text-enterprise-blue/80 mb-2 font-semibold">// DQ Platform — 3 production surfaces</div>
                <div><span className="text-yellow-400">customer</span>  → <span className="text-enterprise-muted/70">dq.dqstore.in</span>     <span className="text-enterprise-live text-[10px]">● live</span></div>
                <div><span className="text-yellow-400">staff</span>     → <span className="text-enterprise-muted/70">staff.dqstore.in</span>  <span className="text-enterprise-live text-[10px]">● live</span></div>
                <div><span className="text-yellow-400">admin</span>     → <span className="text-enterprise-muted/70">app.dqstore.in</span>    <span className="text-enterprise-live text-[10px]">● live</span></div>
                <div className="pt-1 border-t border-enterprise-elevated mt-2">
                  <span className="text-enterprise-muted/60">GraphQL</span> → <span className="text-enterprise-muted/60">Node.js + Apollo</span>
                </div>
                <div><span className="text-enterprise-muted/60">Storage</span>  → <span className="text-enterprise-muted/60">MongoDB Atlas · Azure IN</span></div>
                <div><span className="text-enterprise-muted/60">Auth</span>     → <span className="text-enterprise-muted/60">Firebase JWT · RBAC</span></div>
                <div><span className="text-enterprise-muted/60">Payments</span> → <span className="text-enterprise-muted/60">Razorpay Model B</span></div>
              </div>
            </div>

            {/* Live app status */}
            <div className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-4">
              <p className="text-[10px] text-enterprise-muted font-semibold uppercase tracking-widest mb-3">
                Live ecosystem
              </p>
              <div className="space-y-2">
                {LIVE_APPS.map((app) => {
                  const { Icon } = app
                  return (
                    <a
                      key={app.name}
                      href={app.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group hover:bg-enterprise-elevated/40 rounded-lg px-2 py-2 -mx-2 transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 bg-enterprise-elevated rounded-md flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-enterprise-muted" strokeWidth={1.5} />
                        </div>
                        <span className="text-white text-xs font-medium">{app.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 ${app.dot} rounded-full animate-pulse flex-shrink-0`} />
                        <span className="text-enterprise-live text-[10px] font-bold">LIVE ↗</span>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Infrastructure signals */}
            <div className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-4">
              <p className="text-[10px] text-enterprise-muted font-semibold uppercase tracking-widest mb-3">
                Infrastructure
              </p>
              <div className="grid grid-cols-2 gap-2">
                {INFRA_SIGNALS.map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-enterprise-elevated rounded-md flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3 h-3 text-enterprise-blue" strokeWidth={1.5} />
                    </div>
                    <span className="text-enterprise-muted text-[11px] leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anchor stats */}
            <div className="grid grid-cols-4 gap-2">
              {ANCHOR_STATS.map((s) => (
                <div key={s.label} className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-3 text-center">
                  <p className="text-lg font-bold text-white tabular-nums">{s.value}</p>
                  <p className="text-[10px] text-enterprise-muted mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-enterprise-surface/20 to-transparent" />
    </section>
  )
}

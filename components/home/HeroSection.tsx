import Link from 'next/link'
import { ScanLine, Wallet, QrCode, ShieldCheck } from 'lucide-react'
import { CLAIMS, CTA, FACTS, HINDI, OFFER } from '@/lib/site'

const FLOW = [
  { Icon: ScanLine,    title: 'Scan',   desc: 'Shoppers scan product tags in the DQ Android app.' },
  { Icon: Wallet,      title: 'Pay',    desc: 'They pay in the app through Razorpay.' },
  { Icon: QrCode,      title: 'Exit pass', desc: 'The app shows a QR code plus a short typeable code.' },
  { Icon: ShieldCheck, title: 'Verify', desc: 'Staff check the pass against a paid order.' },
]

const TRUST = [CLAIMS.channelShort, CLAIMS.hardware, CLAIMS.till, CLAIMS.cardDataShort]

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
        aria-hidden="true"
      />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-enterprise-blue to-transparent opacity-60" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-start">

          {/* ── Left: copy. Not animated — the h1 is the LCP element. ── */}
          <div>
            <p className="inline-flex items-center gap-2 bg-enterprise-surface border border-enterprise-elevated rounded-full px-4 py-1.5 mb-8 text-enterprise-link text-xs font-semibold tracking-wide">
              {CLAIMS.category}
            </p>

            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold text-white leading-[1.07] tracking-tight">
              Your customers scan, pay and walk out.{' '}
              <span className="text-enterprise-link">No billing queue.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-enterprise-muted leading-relaxed max-w-[540px]">
              DQ adds phone self-checkout to your store: shoppers use the DQ Android app. It runs
              alongside your existing till, with no new hardware. {CLAIMS.setup}.
            </p>

            <p lang="hi" className="font-hi mt-4 text-base text-enterprise-link leading-relaxed max-w-[540px]">
              {HINDI.headline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-enterprise-action hover:bg-enterprise-action-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-[0_4px_16px_rgba(26,111,212,0.35)] hover:-translate-y-0.5 active:scale-[0.98] text-base"
              >
                {CTA.primary}
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 text-enterprise-muted hover:text-white border border-enterprise-elevated hover:border-enterprise-blue/50 font-medium px-7 py-3.5 rounded-lg transition-all duration-200 text-base"
              >
                {CTA.secondary} →
              </Link>
            </div>

            <ul className="mt-5 text-sm text-enterprise-muted flex flex-wrap items-center gap-x-5 gap-y-1.5">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <span className="text-enterprise-link font-bold" aria-hidden="true">✓</span> {t}
                </li>
              ))}
            </ul>

            {/* Mobile facts — true statements only */}
            <dl className="lg:hidden mt-10 grid grid-cols-2 gap-2">
              {FACTS.map((s) => (
                <div key={s.label} className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-3 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-lg font-bold text-white">{s.value}</dd>
                  <dd className="text-xs text-enterprise-muted mt-0.5 leading-tight" aria-hidden="true">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ── Right: how a checkout works ── */}
          <div className="hidden lg:flex flex-col gap-3">
            <div className="bg-enterprise-surface border border-enterprise-elevated rounded-xl overflow-hidden">
              <div className="px-5 py-3 border-b border-enterprise-elevated">
                <p className="text-white text-sm font-semibold">How a DQ checkout works</p>
              </div>
              <ol className="p-5 space-y-4">
                {FLOW.map(({ Icon, title, desc }, i) => (
                  <li key={title} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-enterprise-elevated rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-enterprise-link" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">{i + 1}. {title}</p>
                      <p className="text-enterprise-muted text-sm leading-snug">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="px-5 pb-4 -mt-1 text-xs text-enterprise-muted">{CLAIMS.illustrative}</p>
            </div>

            <div className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-5">
              <p className="text-xs text-enterprise-muted font-semibold uppercase tracking-widest mb-2">
                {OFFER.name}
              </p>
              <p className="text-white text-lg font-bold">{OFFER.headline}</p>
              <p className="text-enterprise-muted text-sm mt-1">{OFFER.terms} {CLAIMS.status}.</p>
            </div>

            <dl className="grid grid-cols-4 gap-2">
              {FACTS.map((s) => (
                <div key={s.label} className="bg-enterprise-surface border border-enterprise-elevated rounded-xl p-3 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-base font-bold text-white">{s.value}</dd>
                  <dd className="text-xs text-enterprise-muted mt-0.5 leading-tight" aria-hidden="true">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  )
}

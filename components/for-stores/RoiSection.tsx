'use client'

import { useState, useId } from 'react'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'

/* ── Constants ── */
const BASKET_PRESETS = [300, 600, 1_000, 2_000] as const
type  BasketPreset   = typeof BASKET_PRESETS[number]

/* ── Number formatters ── */
function fmtINR(n: number): string {
  if (n >= 1_00_000) {
    const lakhs = n / 1_00_000
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} Lakh`
  }
  return `₹${Math.round(n).toLocaleString('en-IN')}`
}

function basketLabel(v: number): string {
  return v >= 1000 ? `₹${v / 1000}K` : `₹${v}`
}

export default function RoiSection() {
  const [lost,     setLost]     = useState(5)
  const [adoption, setAdoption] = useState(20)
  const [basket,   setBasket]   = useState<BasketPreset>(600)
  const lostId                  = useId()
  const adoptionId              = useId()
  const basketLabelId           = useId()

  /* ── Live calculations — no DQ price is assumed (pricing is not final) ── */
  const lostPct     = ((lost - 1) / (50 - 1)) * 100
  const adoptPct    = ((adoption - 5) / (60 - 5)) * 100
  const recovered   = lost * (adoption / 100)
  const monthly     = recovered * basket * 30

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Estimate"
          title="How much are queues costing you?"
          subtitle="Adjust the numbers to match your store. This is an estimate, not a promise."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-200 shadow-xl shadow-gray-100/60 overflow-hidden bg-white">

            <div className="bg-enterprise-navy px-6 py-4 flex items-center gap-2.5 border-b border-enterprise-elevated">
              <TrendingUp className="w-4 h-4 text-enterprise-link" strokeWidth={2} aria-hidden="true" />
              <h3 className="text-white font-bold text-sm">Lost-sales estimate</h3>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                <div className="space-y-8">
                  <div>
                    <label htmlFor={lostId} className="block text-sm font-semibold text-gray-800 mb-1">
                      Shoppers lost to the queue per day
                    </label>
                    <p className="text-sm text-ink-muted mb-5 leading-relaxed">
                      Shoppers who see a long line and leave without buying.
                    </p>
                    <input
                      id={lostId}
                      type="range" min={1} max={50} step={1} value={lost}
                      onChange={e => setLost(Number(e.target.value))}
                      className="roi-slider w-full"
                      style={{ '--slider-pct': `${lostPct}%` } as React.CSSProperties}
                      aria-valuetext={`${lost} shoppers per day`}
                    />
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-ink-muted" aria-hidden="true">1</span>
                      <span className="text-3xl font-black text-enterprise-action tabular-nums leading-none">{lost}</span>
                      <span className="text-sm text-ink-muted" aria-hidden="true">50</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor={adoptionId} className="block text-sm font-semibold text-gray-800 mb-1">
                      Of those, how many would use DQ instead?
                    </label>
                    <p className="text-sm text-ink-muted mb-5 leading-relaxed">
                      Not every shopper will check out on their phone. Start low.
                    </p>
                    <input
                      id={adoptionId}
                      type="range" min={5} max={60} step={5} value={adoption}
                      onChange={e => setAdoption(Number(e.target.value))}
                      className="roi-slider w-full"
                      style={{ '--slider-pct': `${adoptPct}%` } as React.CSSProperties}
                      aria-valuetext={`${adoption} percent`}
                    />
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-ink-muted" aria-hidden="true">5%</span>
                      <span className="text-3xl font-black text-enterprise-action tabular-nums leading-none">{adoption}%</span>
                      <span className="text-sm text-ink-muted" aria-hidden="true">60%</span>
                    </div>
                  </div>

                  <div role="group" aria-labelledby={basketLabelId}>
                    <p id={basketLabelId} className="text-sm font-semibold text-gray-800 mb-1">Average basket size</p>
                    <p className="text-sm text-ink-muted mb-4">Typical spend per shopper visit.</p>
                    <div className="grid grid-cols-4 gap-2">
                      {BASKET_PRESETS.map(v => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setBasket(v)}
                          aria-pressed={basket === v}
                          className={`py-2.5 px-1 rounded-xl text-sm font-semibold border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-enterprise-action focus-visible:ring-offset-2 ${
                            basket === v
                              ? 'border-enterprise-action bg-blue-50 text-enterprise-action'
                              : 'border-gray-300 text-ink-body hover:border-enterprise-action/40 hover:bg-gray-50'
                          }`}
                        >
                          {basketLabel(v)}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="bg-enterprise-navy rounded-2xl p-6 text-center border border-enterprise-elevated">
                    <p className="text-enterprise-muted text-xs font-semibold uppercase tracking-[0.15em] mb-2">
                      Sales you could keep each month
                    </p>
                    <p className="text-4xl sm:text-5xl font-black text-white tabular-nums leading-none" aria-live="polite" aria-atomic="true">
                      {fmtINR(monthly)}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl px-4 py-3.5 border border-gray-200">
                    <p className="text-sm text-ink-body font-mono leading-relaxed">
                      {lost} shoppers × {adoption}% × {basketLabel(basket)} × 30 days
                    </p>
                    <p className="text-sm text-enterprise-action font-bold font-mono mt-1">= {fmtINR(monthly)} / month</p>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-enterprise-action hover:bg-enterprise-action-hover text-white font-semibold px-6 py-2.5 rounded-xl transition-all"
                  >
                    Talk to us about your store →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-ink-muted mt-5 leading-relaxed px-2">
            Indicative estimate based on your inputs. Actual results depend on footfall,
            queue patterns and how many shoppers choose to check out on their phone.
          </p>
        </div>
      </div>
    </section>
  )
}

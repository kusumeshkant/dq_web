'use client'

import { useState, useId } from 'react'
import Link from 'next/link'
import { TrendingUp } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { useInView } from '@/hooks/useInView'

/* ── Constants ── */
const DQ_MONTHLY_COST = 2999
const BASKET_PRESETS  = [300, 600, 1_000, 2_000] as const
type  BasketPreset    = typeof BASKET_PRESETS[number]

/* ── Number formatters ── */
function fmtINR(n: number): string {
  if (n >= 1_00_000) {
    const lakhs = n / 1_00_000
    return `₹${lakhs % 1 === 0 ? lakhs.toFixed(0) : lakhs.toFixed(1)} Lakh`
  }
  return `₹${n.toLocaleString('en-IN')}`
}

function fmtINRShort(n: number): string {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(1)}Cr`
  if (n >= 1_00_000)    return `₹${(n / 1_00_000).toFixed(1)}L`
  return `₹${(n / 1000).toFixed(0)}K`
}

/* ── Helpers ── */
function basketLabel(v: number): string {
  return v >= 1000 ? `₹${v / 1000}K` : `₹${v}`
}

export default function RoiSection() {
  const [lost,   setLost]   = useState(5)
  const [basket, setBasket] = useState<BasketPreset>(600)
  const sliderId            = useId()
  const { ref, inView }     = useInView<HTMLElement>()

  /* ── Live calculations ── */
  const pct           = ((lost - 1) / (50 - 1)) * 100
  const monthly       = lost * basket * 30
  const yearly        = monthly * 12
  const roi           = Math.round(monthly / DQ_MONTHLY_COST)
  const breakEvenDays = Math.max(1, Math.ceil(DQ_MONTHLY_COST / (lost * basket)))
  const recoveryBarW  = Math.min((monthly / (monthly + DQ_MONTHLY_COST)) * 100, 98)

  return (
    <section
      ref={ref}
      className={`py-20 bg-white reveal${inView ? ' is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The ROI Argument"
          title="How much are queues actually costing you?"
          subtitle="Adjust the numbers to match your store. See what DQ could recover — instantly."
        />

        <div className="mt-14 max-w-3xl mx-auto">
          <div className="rounded-3xl border border-gray-100 shadow-2xl shadow-gray-100 overflow-hidden bg-white">

            {/* ── Header ── */}
            <div className="bg-gradient-to-r from-dq-dark to-dq-green px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <TrendingUp className="w-4 h-4 text-dq-amber" strokeWidth={2} />
                <span className="text-white font-bold text-sm">DQ ROI Calculator</span>
              </div>
              <span className="text-[11px] text-green-200 bg-white/10 border border-white/20 px-2.5 py-1 rounded-full font-medium">
                Adjust for your store
              </span>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                {/* ── LEFT: Inputs ── */}
                <div className="space-y-8">

                  {/* Slider */}
                  <div>
                    <label
                      htmlFor={sliderId}
                      className="block text-sm font-semibold text-gray-800 mb-1"
                    >
                      Customers lost to queues per day
                    </label>
                    <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                      Customers who see a long queue and walk out without buying.
                    </p>

                    <input
                      id={sliderId}
                      type="range"
                      min={1}
                      max={50}
                      step={1}
                      value={lost}
                      onChange={e => setLost(Number(e.target.value))}
                      className="roi-slider w-full"
                      style={{ '--slider-pct': `${pct}%` } as React.CSSProperties}
                      aria-label="Customers lost per day due to queues"
                    />

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-gray-400">1/day</span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-dq-green tabular-nums leading-none">
                          {lost}
                        </span>
                        <span className="text-sm text-gray-500 font-medium">customers/day</span>
                      </div>
                      <span className="text-xs text-gray-400">50/day</span>
                    </div>
                  </div>

                  {/* Basket preset buttons */}
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">
                      Average basket size
                    </p>
                    <p className="text-xs text-gray-400 mb-4">
                      Typical spend per customer visit in your store.
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {BASKET_PRESETS.map(v => (
                        <button
                          key={v}
                          type="button"
                          onClick={() => setBasket(v)}
                          className={`py-2.5 px-1 rounded-xl text-sm font-semibold border-2 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dq-green focus-visible:ring-offset-2 ${
                            basket === v
                              ? 'border-dq-green bg-dq-light text-dq-dark shadow-sm'
                              : 'border-gray-200 text-gray-600 hover:border-dq-green/40 hover:bg-gray-50'
                          }`}
                        >
                          {basketLabel(v)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Formula transparency */}
                  <div className="bg-gray-50 rounded-xl px-4 py-3.5 border border-gray-100">
                    <p className="text-xs text-gray-500 font-mono leading-relaxed">
                      {lost} customers × {basketLabel(basket)} × 30 days
                      <br />
                      <span className="text-dq-green font-bold">
                        = {fmtINR(monthly)} / month potential
                      </span>
                    </p>
                  </div>
                </div>

                {/* ── RIGHT: Results ── */}
                <div className="flex flex-col gap-4">

                  {/* Hero result card */}
                  <div className="bg-gradient-to-br from-dq-dark to-dq-green rounded-2xl p-6 text-center">
                    <p className="text-green-200 text-[10px] font-semibold uppercase tracking-[0.15em] mb-2">
                      Monthly Recovery Potential
                    </p>
                    <div
                      className="text-4xl sm:text-5xl font-black text-white tabular-nums leading-none"
                      aria-live="polite"
                      aria-atomic="true"
                    >
                      {fmtINR(monthly)}
                    </div>
                    <p className="text-green-300 text-xs mt-2 font-medium">
                      {fmtINRShort(yearly)} per year upside
                    </p>
                  </div>

                  {/* ROI + Break-even */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-dq-light border border-dq-muted rounded-xl p-4 text-center">
                      <div
                        className="text-2xl font-black text-dq-green tabular-nums"
                        aria-live="polite"
                      >
                        {roi}x
                      </div>
                      <p className="text-xs text-dq-dark font-medium mt-1 leading-snug">
                        return on DQ cost
                      </p>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                      <div
                        className="text-2xl font-black text-amber-700 tabular-nums"
                        aria-live="polite"
                      >
                        {breakEvenDays === 1 ? '< 1' : breakEvenDays}d
                      </div>
                      <p className="text-xs text-amber-800 font-medium mt-1 leading-snug">
                        to break even
                      </p>
                    </div>
                  </div>

                  {/* Cost vs Recovery bar */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 space-y-2.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 text-xs">DQ monthly cost</span>
                      <span className="font-bold text-gray-700 text-xs">₹2,999</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 text-xs">Recovery potential</span>
                      <span className="font-bold text-dq-green text-xs">{fmtINR(monthly)}</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-dq-green rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${recoveryBarW}%` }}
                        role="presentation"
                      />
                    </div>
                    <p className="text-[10px] text-gray-400 text-right leading-snug">
                      DQ cost vs potential recovery
                    </p>
                  </div>

                  {/* CTA */}
                  <Button href="/contact" size="md" className="w-full justify-center">
                    Get a personalised estimate →
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Disclaimer + link */}
          <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed px-2">
            Indicative estimate based on your inputs. Actual results depend on store traffic,
            queue patterns, and customer adoption rate.{' '}
            <Link
              href="/contact"
              className="text-dq-green hover:underline underline-offset-2 font-medium"
            >
              Talk to us for a personalised ROI analysis →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

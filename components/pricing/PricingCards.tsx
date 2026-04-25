'use client'

import { useState } from 'react'
import { PRICING_PLANS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Badge  from '@/components/ui/Badge'

export default function PricingCards() {
  const [annual, setAnnual] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium transition-colors ${!annual ? 'text-gray-900' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(a => !a)}
            aria-label="Toggle billing period"
            className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-dq-green focus-visible:ring-offset-2 ${
              annual ? 'bg-dq-green' : 'bg-gray-200'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200 ${
                annual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${annual ? 'text-gray-900' : 'text-gray-400'}`}>
            Annual
            <span className="bg-dq-light text-dq-dark text-xs font-bold px-2 py-0.5 rounded-full border border-dq-muted">
              Save 2 months
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan) => {
            const showAnnual = annual && plan.annual && plan.name !== 'Enterprise'
            return (
              <div
                key={plan.name}
                className={`relative rounded-2xl border-2 p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'border-dq-green shadow-2xl shadow-green-100 bg-white lg:scale-105'
                    : 'border-gray-200 bg-white hover:shadow-lg hover:border-gray-300'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="green">Most Popular</Badge>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-3">
                  {plan.name === 'Enterprise' ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-black text-gray-900">Custom</span>
                    </div>
                  ) : showAnnual ? (
                    <>
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-black text-gray-900">
                          {plan.name === 'Starter' ? '₹2,499' : '₹4,999'}
                        </span>
                        <span className="text-gray-400 mb-1.5 text-sm">/month</span>
                      </div>
                      <p className="text-xs text-dq-green font-semibold mt-1">
                        Billed as {plan.annual.split('—')[0].trim()} · {plan.annual.split('—')[1]?.trim()}
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                        <span className="text-gray-400 mb-1.5 text-sm">{plan.period}</span>
                      </div>
                      {plan.annual && plan.name !== 'Enterprise' && (
                        <p className="text-xs text-gray-400 mt-1">Switch to annual — {plan.annual.split('—')[1]?.trim()}</p>
                      )}
                    </>
                  )}
                </div>

                {/* Best for */}
                <div className="mb-6">
                  <span className="inline-block bg-gray-50 border border-gray-200 text-gray-500 text-[11px] font-medium px-3 py-1 rounded-full">
                    {plan.bestFor}
                  </span>
                </div>

                <Button
                  href="/contact"
                  variant={plan.highlight ? 'primary' : 'outline'}
                  size="md"
                  className="w-full justify-center mb-7"
                >
                  {plan.cta}
                </Button>

                <ul className="space-y-2.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <span className="text-dq-green font-bold flex-shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {plan.note && plan.name !== 'Growth' && (
                  <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
                    {plan.note}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-gray-400 mt-10">
          All plans include a <span className="font-semibold text-gray-600">30-day free trial</span>. No credit card required to start.
        </p>
      </div>
    </section>
  )
}

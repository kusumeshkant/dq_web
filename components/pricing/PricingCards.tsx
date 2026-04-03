import { PRICING_PLANS } from '@/lib/constants'
import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function PricingCards() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border-2 p-8 flex flex-col ${
                plan.highlight
                  ? 'border-dq-green shadow-2xl shadow-green-100 bg-white scale-105'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="green">Most Popular</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 mb-1">{plan.period}</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">{plan.annual}</p>
              </div>

              <Button
                href="/contact"
                variant={plan.highlight ? 'primary' : 'outline'}
                size="md"
                className="w-full justify-center mb-8"
              >
                {plan.cta}
              </Button>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-dq-green font-bold flex-shrink-0 mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-100">
                  {plan.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

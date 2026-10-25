import { ArrowRight } from 'lucide-react'

// Cross-journey overview (03_user_flows.md): who does what, and where the
// three apps hand over to each other.
const LANES = [
  {
    who: 'Shopper',
    app: 'Shopper app',
    steps: ['Scan products', 'Pay in the app', 'Show exit pass'],
    accent: 'bg-blue-50 text-enterprise-action border-enterprise-action/20',
  },
  {
    who: 'Staff',
    app: 'Staff app',
    steps: ['See the paid order', 'Check the exit pass', 'Give discounts within the limit'],
    accent: 'bg-amber-50 text-enterprise-amber border-enterprise-amber/20',
  },
  {
    who: 'Owner',
    app: 'Owner dashboard',
    steps: ['Upload products', 'Approve discount limits', 'See sales and peak hours'],
    accent: 'bg-emerald-50 text-enterprise-success border-enterprise-success/20',
  },
]

export default function JourneyMap() {
  return (
    <section className="py-16 bg-white border-b border-gray-100" aria-labelledby="journey-map-title">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="journey-map-title" className="text-2xl font-bold text-gray-900 text-center">One checkout, three people</h2>
        <p className="mt-2 text-center text-ink-body">Every step lands in the same order, so all three apps stay in sync.</p>

        <div className="mt-10 space-y-4">
          {LANES.map((lane) => (
            <div key={lane.who} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:items-center">
              <div>
                <p className="font-bold text-gray-900">{lane.who}</p>
                <p className="text-sm text-ink-muted">{lane.app}</p>
              </div>
              <ol className="flex flex-col sm:flex-row sm:items-center gap-2">
                {lane.steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-2 sm:flex-1">
                    <span className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium ${lane.accent}`}>{s}</span>
                    {i < lane.steps.length - 1 && (
                      <ArrowRight className="hidden sm:block w-4 h-4 text-ink-muted flex-shrink-0" aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

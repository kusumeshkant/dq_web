// Concept D artwork — presentational only (no hooks). The server renders it
// with shown=true and final values (static end state); AnalyticsPreviewMotion
// renders the same markup with shown=false → true and counting values.
// Every panel is labelled as sample data; metrics are only ones the backend
// computes (peak hours, basket abandonment, discount depth, sales, orders).
import { SAMPLE_ANALYTICS as A, formatINR } from '@/lib/site'

export type KpiValues = Record<(typeof A.kpis)[number]['key'], number>

export const FINAL_KPIS: KpiValues = Object.fromEntries(A.kpis.map((k) => [k.key, k.value])) as KpiValues

const fmt = (kind: string, v: number) =>
  kind === 'inr' ? formatINR(Math.round(v)) : kind === 'pct' ? `${Math.round(v)}%` : `${Math.round(v)}`

const BAR = 'motion-reduce:!transition-none transition-transform duration-700 ease-out'

function Panel({ title, children, className = '' }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className}`}>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
        <h3 className="text-sm font-bold text-gray-900">{title}</h3>
        <span className="text-xs text-ink-muted">{A.label}</span>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  )
}

export default function AnalyticsPanels({ shown, kpis }: { shown: boolean; kpis: KpiValues }) {
  const maxHour   = Math.max(...A.peakHours.map((p) => p.v))
  const maxFunnel = A.funnel[0].v
  const maxDisc   = 10

  return (
    <div className="space-y-5">
      {/* KPI tiles */}
      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {A.kpis.map((k) => (
          <div key={k.key} className="rounded-xl border border-gray-200 bg-white p-5">
            <dt className="text-sm text-ink-body">{k.label}</dt>
            <dd className="mt-1 text-2xl font-black text-gray-900 tabular-nums">{fmt(k.kind, kpis[k.key])}</dd>
            <dd className="mt-1 text-xs text-ink-muted">{A.label}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Peak hours */}
        <Panel title="Paid orders by hour">
          <div className="flex items-end gap-1 h-32" aria-hidden="true">
            {A.peakHours.map((p, i) => (
              <div key={p.h} className="flex-1 h-full flex items-end">
                <div
                  className={`w-full rounded-t bg-enterprise-action origin-bottom ${BAR}`}
                  style={{ height: `${(p.v / maxHour) * 100}%`, transform: `scaleY(${shown ? 1 : 0})`, transitionDelay: `${i * 40}ms` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-1 flex gap-1 text-xs text-ink-muted" aria-hidden="true">
            {A.peakHours.map((p) => <span key={p.h} className="flex-1 text-center">{p.h}</span>)}
          </div>
          <p className="mt-3 text-sm text-ink-body">{A.peakSummary}</p>
        </Panel>

        {/* Basket funnel */}
        <Panel title="Baskets this week">
          <ol className="space-y-3">
            {A.funnel.map((f, i) => (
              <li key={f.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-body">{f.label}</span>
                  <span className="font-semibold text-gray-900 tabular-nums">{f.v}</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-gray-100 overflow-hidden" aria-hidden="true">
                  <div
                    className={`h-full rounded-full bg-enterprise-success origin-left ${BAR}`}
                    style={{ width: `${(f.v / maxFunnel) * 100}%`, transform: `scaleX(${shown ? 1 : 0})`, transitionDelay: `${i * 120}ms` }}
                  />
                </div>
              </li>
            ))}
          </ol>
        </Panel>

        {/* Discount depth */}
        <Panel title="Average discount by staff">
          <ul className="space-y-3">
            {A.discounts.map((d, i) => (
              <li key={d.staff}>
                <div className="flex justify-between text-sm">
                  <span className="text-ink-body">{d.staff}</span>
                  <span className="font-semibold text-gray-900 tabular-nums">{d.pct}%</span>
                </div>
                <div className="mt-1 h-2 rounded-full bg-gray-100 overflow-hidden" aria-hidden="true">
                  <div
                    className={`h-full rounded-full bg-enterprise-amber origin-left ${BAR}`}
                    style={{ width: `${(d.pct / maxDisc) * 100}%`, transform: `scaleX(${shown ? 1 : 0})`, transitionDelay: `${i * 120}ms` }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-ink-body">From the discount log, which staff can’t edit.</p>
        </Panel>
      </div>
    </div>
  )
}

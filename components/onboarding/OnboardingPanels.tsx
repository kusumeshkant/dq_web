// Concept E artwork — presentational only (no hooks), so the server can
// render the static end state and the animated stepper can reuse the markup.
// A neutral "Owner dashboard · Illustrative" panel: no browser chrome, no URL,
// no claim about which platform the owner app runs on.
import { Check, FileSpreadsheet, MapPin } from 'lucide-react'
import { ONBOARDING as O, SAMPLE } from '@/lib/site'

export const PANEL_H = 'h-[250px]'

export function PanelFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${PANEL_H} flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white text-left`}>
      <div className="flex items-center gap-2 border-b border-gray-200 bg-slate-50 px-4 py-2">
        <span className="w-5 h-5 rounded bg-enterprise-action text-white text-xs font-black flex items-center justify-center" aria-hidden="true">DQ</span>
        <span className="text-xs font-semibold text-ink-body">{O.panelLabel}</span>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  )
}

const FIELDS = [
  { label: 'Store name', value: SAMPLE.store },
  { label: 'Address',    value: O.sample.address },
]

/** Step 1. `filled`: how many of the 3 rows are complete (0–3). */
export function DetailsPanel({ filled = 3 }: { filled?: number }) {
  return (
    <div className="space-y-3">
      {FIELDS.map((f, i) => (
        <div key={f.label}>
          <p className="text-xs font-semibold text-ink-body">{f.label}</p>
          <p className="mt-0.5 h-9 rounded-lg border border-gray-300 px-3 flex items-center text-sm text-gray-900">
            <span className="motion-reduce:!transition-none transition-opacity duration-300" style={{ opacity: filled > i ? 1 : 0 }}>{f.value}</span>
          </p>
        </div>
      ))}
      {/* Text never sits at partial opacity (contrast); only the check fades in. */}
      <div className="flex items-center gap-2 text-sm text-ink-body">
        <MapPin className="w-4 h-4 text-enterprise-action" aria-hidden="true" />
        <span>Pinned on the map</span>
        <Check
          className="w-4 h-4 text-enterprise-success motion-reduce:!transition-none transition-opacity duration-300"
          strokeWidth={3}
          aria-hidden="true"
          style={{ opacity: filled > 2 ? 1 : 0 }}
        />
      </div>
    </div>
  )
}

/** Step 2. `progress` 0–1 for the upload bar, `imported` for the count. */
export function UploadPanel({ progress = 1, imported = O.sample.imported }: { progress?: number; imported?: number }) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 rounded-lg border border-gray-300 p-3">
        <FileSpreadsheet className="w-6 h-6 text-enterprise-success" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-gray-900 truncate">{O.sample.file}</p>
          <p className="text-xs text-ink-body">Columns: barcode, name, price, stock</p>
        </div>
      </div>
      <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
        <div className="h-full w-full rounded-full bg-enterprise-action origin-left" style={{ transform: `scaleX(${progress})` }} />
      </div>
      <p className="text-sm text-ink-body">
        <span className="text-2xl font-black text-gray-900 tabular-nums">{Math.round(imported)}</span> products imported
      </p>
    </div>
  )
}

/** Step 3. */
export function CodePanel({ revealed = true }: { revealed?: boolean }) {
  return (
    <div className="space-y-3">
      <p className="flex items-center gap-2 text-sm font-semibold text-enterprise-success">
        <Check className="w-4 h-4" strokeWidth={3} aria-hidden="true" /> Store ready
      </p>
      <div>
        <p className="text-xs font-semibold text-ink-body">Your store code</p>
        <p
          className="mt-1 font-mono text-2xl font-bold tracking-widest text-gray-900 motion-reduce:!transition-none transition-opacity duration-500"
          style={{ opacity: revealed ? 1 : 0 }}
        >
          {O.sample.storeCode}
        </p>
      </div>
      <p className="text-sm text-ink-body">Share it with shoppers and give your staff their logins.</p>
    </div>
  )
}

export const PANELS = [DetailsPanel, UploadPanel, CodePanel] as const

export type Tone = 'dark' | 'light'

export function StepText({ index, tone }: { index: number; tone: Tone }) {
  const s = O.steps[index]
  return (
    <>
      <p className={`text-xs font-black uppercase tracking-[0.2em] ${tone === 'dark' ? 'text-enterprise-link' : 'text-enterprise-action'}`}>Screen {index + 1}</p>
      <h3 className={`mt-1 text-lg font-bold ${tone === 'dark' ? 'text-white' : 'text-gray-900'}`}>{s.title}</h3>
      <p className={`mt-1 text-sm leading-relaxed ${tone === 'dark' ? 'text-enterprise-muted' : 'text-ink-body'}`}>{s.body}</p>
    </>
  )
}


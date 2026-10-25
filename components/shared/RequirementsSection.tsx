import { Check, X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { REQUIREMENTS } from '@/lib/site'

export default function RequirementsSection({ tone = 'white' }: { tone?: 'white' | 'gray' }) {
  return (
    <section className={`py-20 ${tone === 'gray' ? 'bg-slate-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Before you start"
          title="What you need to start"
          subtitle="If you bill barcoded products today, you probably have all of it already."
        />

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REQUIREMENTS.have.map((r) => (
              <li key={r.title} className="flex gap-3 bg-white border border-gray-200 rounded-xl p-5">
                <span className="w-7 h-7 rounded-full bg-emerald-50 text-enterprise-success flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{r.title}</p>
                  <p className="text-ink-body text-sm mt-0.5 leading-relaxed">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="bg-enterprise-navy rounded-xl p-6">
            <p className="text-white font-semibold text-sm mb-4">You don&apos;t need</p>
            <ul className="space-y-3">
              {REQUIREMENTS.notNeeded.map((n) => (
                <li key={n} className="flex gap-2.5 text-sm text-enterprise-muted leading-snug">
                  <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-enterprise-link" strokeWidth={2.5} aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

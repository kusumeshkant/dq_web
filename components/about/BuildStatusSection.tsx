import { CheckCircle2, Hammer } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { BUILD_STATUS } from '@/lib/site'

/** Honest status table (06 §2 About). No dates, no availability claims. */
export default function BuildStatusSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Where we are"
          title="Built today, and what comes next"
          subtitle="DQ is early. Here is exactly what exists."
        />

        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="flex items-center gap-2 font-bold text-gray-900">
              <CheckCircle2 className="w-5 h-5 text-enterprise-success" aria-hidden="true" />
              Built today
            </h3>
            <ul className="mt-4 space-y-3">
              {BUILD_STATUS.today.map((t) => (
                <li key={t} className="text-sm text-ink-body leading-relaxed">{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-gray-200 p-6 bg-slate-50">
            <h3 className="flex items-center gap-2 font-bold text-gray-900">
              <Hammer className="w-5 h-5 text-enterprise-amber" aria-hidden="true" />
              Building next
            </h3>
            <ul className="mt-4 space-y-3">
              {BUILD_STATUS.next.map((t) => (
                <li key={t} className="text-sm text-ink-body leading-relaxed">{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

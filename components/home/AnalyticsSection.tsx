import Link from 'next/link'
import AnalyticsPreview from '@/components/analytics/AnalyticsPreview'

// "See your store": concept D (AnalyticsPreview) with sample data only.
export default function AnalyticsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block mb-4 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-slate-50 text-ink-body border border-gray-200">
            See your store
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Know your busiest hour, and who&apos;s giving discounts.
          </h2>
          <p className="mt-4 text-ink-body text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Every DQ checkout is recorded, so the owner dashboard can show you what your billing counter never did.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 border border-gray-200 p-4 sm:p-6">
          <AnalyticsPreview />
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/pricing" className="inline-flex items-center gap-1.5 text-enterprise-action font-semibold text-sm hover:underline underline-offset-2">
            See the founding-partner offer →
          </Link>
          <span className="hidden sm:block text-gray-300" aria-hidden="true">·</span>
          <Link href="/for-stores" className="inline-flex items-center gap-1.5 text-ink-body font-medium text-sm hover:text-enterprise-action transition-colors">
            See how DQ works for your store →
          </Link>
        </div>

      </div>
    </section>
  )
}

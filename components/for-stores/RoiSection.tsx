import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'

const roiRows = [
  { label: 'Customers per day',            value: '100',               highlight: false, loss: false },
  { label: 'Lost to queue abandonment',    value: '~30 customers',     highlight: false, loss: false },
  { label: 'Average basket size',          value: '₹600',              highlight: false, loss: false },
  { label: 'Revenue lost per day',         value: '₹18,000',           highlight: false, loss: true  },
  { label: 'Revenue lost per month',       value: '₹5,40,000',         highlight: false, loss: true  },
  { label: 'DQ cost per month',            value: '₹2,999',            highlight: false, loss: false },
  { label: 'Recover even 5 customers/day', value: '₹90,000 recovered', highlight: true,  loss: false },
]

export default function RoiSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The ROI Argument"
          title="How much are you losing to queues right now?"
          subtitle="The math is simple. The decision should be too."
        />

        <div className="mt-14 max-w-xl mx-auto">
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-dq-green px-6 py-4 flex items-center justify-between">
              <p className="text-white font-semibold text-sm">Example: 100-customer/day store</p>
              <span className="text-xs text-green-200 bg-white/10 px-2.5 py-1 rounded-full">Indicative</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-100 bg-white">
              {roiRows.map((row) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-3.5 ${
                    row.highlight
                      ? 'bg-dq-light'
                      : row.loss
                      ? 'bg-red-50/60'
                      : ''
                  }`}
                >
                  <span className={`text-sm ${row.highlight ? 'font-bold text-dq-dark' : row.loss ? 'text-red-700' : 'text-gray-600'}`}>
                    {row.label}
                  </span>
                  <span className={`text-sm font-bold ${row.highlight ? 'text-dq-green' : row.loss ? 'text-red-600' : 'text-gray-900'}`}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-dq-dark px-6 py-5 text-center">
              <p className="text-dq-amber font-black text-2xl tracking-tight">~30x calculated ROI</p>
              <p className="text-green-300 text-xs mt-1.5">
                Recovering 5 customers/day covers your entire DQ plan — 30 times over
              </p>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-4">
            Based on indicative figures. Results vary by store size and customer mix.{' '}
            <Link href="/contact" className="text-dq-green hover:underline underline-offset-2">
              Talk to us about your store →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

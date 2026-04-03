import Card from '@/components/ui/Card'
import SectionHeading from '@/components/ui/SectionHeading'

const roiRows = [
  { label: 'Customers per day',           value: '100' },
  { label: 'Lost to queue abandonment',   value: '32 customers (32%)' },
  { label: 'Average basket size',         value: '₹600' },
  { label: 'Revenue lost per day',        value: '₹19,200' },
  { label: 'Revenue lost per month',      value: '₹5,76,000' },
  { label: 'DQ cost per month',           value: '₹2,999' },
  { label: 'Recover even 5 customers/day', value: '₹90,000/month recovered' },
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

        <div className="mt-14 max-w-2xl mx-auto">
          <Card className="overflow-hidden p-0">
            <div className="bg-dq-green px-6 py-4">
              <p className="text-white font-semibold text-sm">Example: 100-customer store</p>
            </div>
            <div className="divide-y divide-gray-100">
              {roiRows.map((row, i) => (
                <div
                  key={row.label}
                  className={`flex items-center justify-between px-6 py-4 ${
                    i === roiRows.length - 1
                      ? 'bg-dq-light font-bold text-dq-dark'
                      : i === roiRows.length - 2
                      ? 'bg-red-50 text-red-700'
                      : ''
                  }`}
                >
                  <span className="text-sm">{row.label}</span>
                  <span className="text-sm font-semibold">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="bg-dq-dark px-6 py-4 text-center">
              <p className="text-dq-amber font-black text-xl">ROI: 30x</p>
              <p className="text-green-300 text-xs mt-1">Recovering just 5 customers/day pays for DQ 30 times over</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

import Accordion from '@/components/ui/Accordion'
import { PRICING_FAQ } from '@/lib/site'

export default function PricingFaq() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">Frequently asked questions</h2>
        <p className="text-center text-ink-muted text-sm mb-10">Everything you need to know before you start.</p>
        <Accordion items={PRICING_FAQ} />
      </div>
    </section>
  )
}

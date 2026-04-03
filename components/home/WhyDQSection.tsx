import { WHY_DQ_FEATURES } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'

export default function WhyDQSection() {
  return (
    <section className="py-20 bg-dq-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why DQ"
          title="Built for how Indian retail actually works"
          subtitle="Not a VC-funded experiment. A product built by people who've stood in those queues."
          light
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_DQ_FEATURES.map((f) => (
            <div
              key={f.text}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
            >
              <span className="text-2xl flex-shrink-0">{f.icon}</span>
              <p className="text-green-100 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

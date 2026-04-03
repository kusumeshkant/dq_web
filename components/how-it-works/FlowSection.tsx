import SectionHeading from '@/components/ui/SectionHeading'

interface Step {
  number: string
  title: string
  desc: string
}

interface FlowSectionProps {
  badge: string
  title: string
  subtitle: string
  steps: Step[]
  accentColor: string
}

export default function FlowSection({ badge, title, subtitle, steps, accentColor }: FlowSectionProps) {
  return (
    <section className="py-16 border-b border-gray-100 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <div className="mt-12 max-w-2xl mx-auto space-y-4">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-4 items-start">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0"
                style={{ backgroundColor: accentColor }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
  accentColor?: string
  accentClass: string
}

export default function FlowSection({ badge, title, subtitle, steps, accentClass }: FlowSectionProps) {
  return (
    <section className="py-16 border-b border-gray-100 last:border-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge={badge} title={title} subtitle={subtitle} />

        <div className="mt-12 max-w-2xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-4 items-start relative">
              {/* Vertical connector line */}
              {i < steps.length - 1 && (
                <div className="absolute left-[17px] top-10 bottom-0 w-px bg-gray-200" />
              )}

              <div
                className={`relative z-10 w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm flex-shrink-0 ${accentClass}`}
              >
                {step.number}
              </div>

              <div className={`pb-8 ${i === steps.length - 1 ? 'pb-0' : ''}`}>
                <h3 className="font-semibold text-gray-900 leading-snug">{step.title}</h3>
                <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

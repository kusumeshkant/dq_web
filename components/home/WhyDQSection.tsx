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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {WHY_DQ_FEATURES.map((f, i) => (
            <div
              key={f.text}
              className="group flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] transition-all duration-200 cursor-default animate-fade-up"
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className="w-10 h-10 bg-dq-green/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-dq-green/30 transition-colors">
                <span className="text-xl">{f.icon}</span>
              </div>
              <p className="text-green-100 text-sm leading-relaxed pt-1">{f.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom trust row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-green-300">
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-dq-green/30 flex items-center justify-center text-xs">✓</span>
            No long-term contracts
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-dq-green/30 flex items-center justify-center text-xs">✓</span>
            Cancel anytime
          </span>
          <span className="hidden sm:block text-white/20">|</span>
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-dq-green/30 flex items-center justify-center text-xs">✓</span>
            Dedicated onboarding support
          </span>
        </div>
      </div>
    </section>
  )
}

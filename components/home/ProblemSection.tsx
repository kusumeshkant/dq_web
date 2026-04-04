import { PROBLEM_STATS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Problem"
          title="Queues are quietly killing your revenue"
          subtitle="Every minute a customer spends waiting is a minute they're reconsidering their purchase."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {PROBLEM_STATS.map((item, i) => (
            <div
              key={item.stat}
              className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm hover:shadow-md hover:border-dq-green/30 transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Subtle bg accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-dq-green/5 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-5xl font-black text-dq-green mb-3 leading-none">{item.stat}</div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

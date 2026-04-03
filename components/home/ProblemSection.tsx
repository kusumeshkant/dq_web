import { PROBLEM_STATS } from '@/lib/constants'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'

export default function ProblemSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Problem"
          title="Queues are quietly killing your revenue"
          subtitle="Every minute a customer spends waiting is a minute they're reconsidering their purchase."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_STATS.map((item) => (
            <Card key={item.stat} hover className="text-center border-gray-100">
              <div className="text-4xl mb-3">{item.icon}</div>
              <div className="text-4xl font-black text-dq-green mb-2">{item.stat}</div>
              <p className="text-gray-500 text-sm leading-relaxed">{item.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

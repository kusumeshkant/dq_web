import SectionHeading from '@/components/ui/SectionHeading'
import Accordion from '@/components/ui/Accordion'
import { STORE_FAQ } from '@/lib/site'

interface ObjectionsSectionProps {
  title?: string
  /** Show only the first n questions (home shows a shorter list). */
  limit?: number
}

export default function ObjectionsSection({
  title = 'Questions store owners ask before getting started',
  limit,
}: ObjectionsSectionProps) {
  const items = limit ? STORE_FAQ.slice(0, limit) : STORE_FAQ
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Common questions" title={title} />
        <div className="mt-12 max-w-3xl mx-auto">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  )
}

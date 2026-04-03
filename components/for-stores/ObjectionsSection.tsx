import SectionHeading from '@/components/ui/SectionHeading'

const faqs = [
  {
    q: "What if customers don't want to download an app?",
    a: "In our pilot, 78% of customers downloaded DQ within the first 2 visits when they saw the queue at the counter. The app is the incentive.",
  },
  {
    q: "What about theft — what if someone scans and walks out without paying?",
    a: "DQ has built-in Exit QR Validation. Customers show their paid QR at the exit. Staff scans it. Green = paid, walk out. Red = not paid, handled. This is a feature no other scan & go platform in India has built.",
  },
  {
    q: "Do I need to buy any hardware?",
    a: "No. DQ works on the Android phones your staff already has. The customer app works on any Android phone.",
  },
  {
    q: "What if my internet goes down?",
    a: "The app shows clear offline states. No transaction is lost — orders queue and sync when connection is restored.",
  },
  {
    q: "What happens to my existing POS?",
    a: "DQ works alongside your existing POS. Many stores use DQ for self-checkout and keep one counter for customers who prefer traditional checkout.",
  },
]

export default function ObjectionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Common Questions"
          title="We've heard every objection. Here are the answers."
        />

        <div className="mt-14 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Q: {faq.q}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

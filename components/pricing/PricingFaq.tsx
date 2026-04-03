const faqs = [
  { q: 'Is there a setup fee?',             a: 'No. Never.' },
  { q: 'What happens after the 30-day trial?', a: 'Pick a plan and continue. Or don\'t — no obligation.' },
  { q: 'Can I switch plans?',               a: 'Yes. Upgrade or downgrade anytime. Prorated billing.' },
  { q: 'Do my customers pay anything?',      a: 'No. The DQ Customer App is always free for shoppers.' },
  { q: 'What payment methods do you accept?', a: 'UPI, credit card, debit card, net banking — all via Razorpay.' },
]

export default function PricingFaq() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Pricing FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-semibold text-gray-900 mb-1">Q: {faq.q}</h3>
              <p className="text-gray-500 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

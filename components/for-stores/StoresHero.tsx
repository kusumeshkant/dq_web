import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function StoresHero() {
  return (
    <section className="bg-gradient-to-br from-dq-dark to-green-800 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <Badge variant="amber" className="mb-6">For Store Owners</Badge>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Turn Every Customer's Phone Into a{' '}
            <span className="text-dq-amber">Checkout Counter</span>
          </h1>
          <p className="mt-6 text-lg text-green-100 leading-relaxed">
            DQ gives your store scan-and-go checkout, real-time staff order management,
            and a full analytics dashboard — with no hardware and no IT team.
            {' '}<span className="text-white font-semibold">From ₹2,999/month.</span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="bg-white text-dq-dark hover:bg-gray-100 font-bold">
              Book a Free Demo →
            </Button>
            <Button href="/pricing" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              See Pricing
            </Button>
          </div>
          <p className="mt-5 text-xs text-green-300 flex flex-wrap gap-x-5 gap-y-1.5">
            <span>✓ 30-day free trial</span>
            <span>✓ No hardware</span>
            <span>✓ Live in under 1 hour</span>
            <span>✓ Cancel anytime</span>
          </p>
        </div>
      </div>
    </section>
  )
}

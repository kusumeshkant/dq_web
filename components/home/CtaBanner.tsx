import Button from '@/components/ui/Button'

export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-dq-green to-dq-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white">
          Ready to eliminate the queue in your store?
        </h2>
        <p className="mt-4 text-lg text-green-200">
          30-day free trial. No credit card required. Setup in under an hour.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-dq-dark hover:bg-gray-100 shadow-xl"
          >
            Book a Free Demo →
          </Button>
          <Button
            href="/pricing"
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  )
}

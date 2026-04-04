import Button from '@/components/ui/Button'

export default function CtaBanner() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-dq-dark via-green-800 to-dq-green overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-dq-amber rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-white/10 border border-white/20 text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          30-Day Free Trial
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
          Ready to eliminate the queue<br className="hidden sm:block" /> in your store?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-green-200 max-w-xl mx-auto">
          No credit card required. No long-term contracts. Setup in under an hour.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-dq-dark hover:bg-gray-100 shadow-xl animate-pulse-cta"
          >
            Book a Free Demo →
          </Button>
          <Button
            href="/pricing"
            size="lg"
            variant="outline"
            className="border-white/60 text-white hover:bg-white/10"
          >
            View Pricing
          </Button>
        </div>
        <p className="mt-6 text-xs text-green-300 flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <span className="flex items-center gap-1"><span>✓</span> No setup fee</span>
          <span className="flex items-center gap-1"><span>✓</span> Cancel anytime</span>
          <span className="flex items-center gap-1"><span>✓</span> Dedicated onboarding support</span>
        </p>
      </div>
    </section>
  )
}

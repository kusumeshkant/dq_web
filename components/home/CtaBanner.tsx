import Button from '@/components/ui/Button'

export default function CtaBanner() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-dq-dark via-green-800 to-dq-green overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-dq-amber rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-200 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          <span className="w-1.5 h-1.5 bg-dq-amber rounded-full animate-pulse" />
          30-Day Free Trial · No Credit Card · No Hardware
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight">
          Every day with a billing queue<br className="hidden sm:block" /> is a day of lost revenue.
        </h2>

        <p className="mt-5 text-base sm:text-lg text-green-200 max-w-xl mx-auto leading-relaxed">
          Your 30-day free trial starts the moment you book a demo. No setup fee. No credit card. Go live in under 1 hour — or we&apos;ll onboard you personally.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contact"
            size="lg"
            className="bg-white text-dq-dark hover:bg-green-50 shadow-2xl shadow-black/20 animate-pulse-cta font-bold"
          >
            Book a Free Demo →
          </Button>
          <a
            href="https://dq.dqstore.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all duration-200 px-7 py-3.5 text-base sm:text-lg bg-dq-amber/20 border-2 border-dq-amber/60 text-dq-amber hover:bg-dq-amber/30 hover:border-dq-amber active:scale-[0.98] select-none"
          >
            Launch Web App ↗
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-green-300">
          <span className="flex items-center gap-1.5"><span className="text-dq-amber">✓</span> No setup fee</span>
          <span className="flex items-center gap-1.5"><span className="text-dq-amber">✓</span> Live in under 1 hour</span>
          <span className="flex items-center gap-1.5"><span className="text-dq-amber">✓</span> Cancel anytime</span>
          <span className="flex items-center gap-1.5"><span className="text-dq-amber">✓</span> Personal onboarding</span>
        </div>
      </div>
    </section>
  )
}

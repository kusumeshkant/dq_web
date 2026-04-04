import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'
import Link from 'next/link'

const stats = [
  { value: '₹0', label: 'Setup cost' },
  { value: '< 1hr', label: 'Onboarding' },
  { value: '30 days', label: 'Free trial' },
]

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dq-dark via-green-800 to-dq-green overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-dq-amber rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — copy */}
          <div className="animate-fade-up">
            <Badge variant="amber" className="mb-5 inline-flex">
              🚀 Now live in Indian retail stores
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight">
              Skip the Queue.
              <br />
              <span className="text-dq-amber">Shop Smarter.</span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-green-100 leading-relaxed max-w-lg">
              DQ lets your customers scan products, pay on their phone,
              and walk out — no checkout counter, no waiting.
              Built for Indian retail, priced for every store.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-dq-dark hover:bg-gray-50 shadow-xl animate-pulse-cta"
              >
                Get DQ for Your Store →
              </Button>
              <Button
                href="/how-it-works"
                size="lg"
                variant="outline"
                className="border-white/50 text-white hover:bg-white/10"
              >
                See How It Works
              </Button>
            </div>

            <p className="mt-5 text-xs text-green-300 flex items-center gap-1">
              <span>✓</span> No credit card required &nbsp;·&nbsp;
              <span>✓</span> Setup in under an hour &nbsp;·&nbsp;
              <span>✓</span> Cancel anytime
            </p>
          </div>

          {/* Right — stat cards */}
          <div className="hidden lg:flex flex-col gap-4 animate-fade-up animate-fade-up-delay-2">

            {/* Big stat card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <p className="text-green-200 text-sm font-medium mb-1">Average checkout time with DQ</p>
              <div className="flex items-end gap-3">
                <span className="text-5xl font-black text-white">0 min</span>
                <span className="text-green-300 text-sm mb-2 line-through">25 min</span>
              </div>
              <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-0 bg-dq-amber rounded-full animate-[grow_1.5s_ease-out_0.5s_forwards]" />
              </div>
            </div>

            {/* 3 smaller stat pills */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <p className="text-xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-green-200 mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-3 text-green-200 text-xs">
              <div className="flex -space-x-2">
                {['🛍️', '👗', '📱', '💊'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <span>Fashion · Electronics · Grocery · Pharmacy stores use DQ</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 40" fill="none" className="w-full text-white" preserveAspectRatio="none">
          <path d="M0 40L1440 40L1440 20C1200 0 960 40 720 20C480 0 240 40 0 20L0 40Z" fill="white" fillOpacity="0.05"/>
        </svg>
      </div>
    </section>
  )
}

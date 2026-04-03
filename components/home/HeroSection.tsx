import Button from '@/components/ui/Button'
import Badge from '@/components/ui/Badge'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dq-dark via-green-800 to-dq-green overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-dq-amber rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          <Badge variant="amber" className="mb-6">
            🚀 Now live in Indian retail stores
          </Badge>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Skip the Queue.
            <br />
            <span className="text-dq-amber">Shop Smarter.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-green-100 leading-relaxed max-w-xl">
            DQ lets your customers scan products, pay on their phone,
            and walk out — no checkout counter, no waiting.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" size="lg" className="bg-white text-dq-dark hover:bg-gray-100 shadow-xl">
              Get DQ for Your Store →
            </Button>
            <Button href="/how-it-works" size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              See How It Works
            </Button>
          </div>

          <p className="mt-6 text-sm text-green-300">
            30-day free trial · No credit card required · Setup in under an hour
          </p>
        </div>
      </div>
    </section>
  )
}

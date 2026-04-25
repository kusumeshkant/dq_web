import Button from '@/components/ui/Button'
import Badge  from '@/components/ui/Badge'

const stats = [
  { value: '₹0',     label: 'Setup cost' },
  { value: '< 1 hr', label: 'Go live in' },
  { value: '0',      label: 'Hardware needed' },
]

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-dq-dark via-green-800 to-dq-green overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Glow blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-16 w-[600px] h-[600px] bg-dq-amber/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: copy ── */}
          <div className="animate-fade-up">
            <Badge variant="amber" className="mb-6 inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-dq-amber rounded-full animate-pulse" />
              Built for Fashion &amp; Lifestyle Retail in India
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white leading-[1.06] tracking-tight">
              Your Customers Are<br />Ready to Pay.{' '}
              <span className="text-dq-amber">Your Queue<br />Is Making Them Leave.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-green-100 leading-relaxed max-w-[520px]">
              DQ is a mobile self-checkout system for fashion, lifestyle, and branded retail stores.
              Customers scan products, pay on their phone, and exit with a QR code —
              {' '}<span className="font-semibold text-white">no counter, no waiting, no lost sale.</span>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button
                href="/contact"
                size="lg"
                className="bg-white text-dq-dark hover:bg-green-50 shadow-2xl shadow-black/25 animate-pulse-cta font-bold"
              >
                Book a Free Demo →
              </Button>
              <Button
                href="/how-it-works"
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60"
              >
                See How It Works
              </Button>
            </div>

            <p className="mt-5 text-xs text-green-300 flex flex-wrap items-center gap-x-5 gap-y-1.5">
              <span className="flex items-center gap-1.5">
                <span className="text-dq-amber font-bold">✓</span> No hardware to buy
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-dq-amber font-bold">✓</span> 30-day free trial
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-dq-amber font-bold">✓</span> Live in under 1 hour
              </span>
            </p>

            {/* Early access status */}
            <div className="mt-7 inline-flex items-center gap-2.5 bg-white/[0.08] border border-white/[0.15] rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-dq-amber rounded-full animate-pulse flex-shrink-0" />
              <span className="text-green-100 text-xs font-medium">
                Early access open — now onboarding pilot stores in India
              </span>
            </div>

            {/* Mobile-only stat strip */}
            <div className="lg:hidden mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-3 text-center">
                  <p className="text-xl font-black text-white">{s.value}</p>
                  <p className="text-[10px] text-green-200 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: stat cards ── */}
          <div
            className="hidden lg:flex flex-col gap-4 animate-fade-up"
            style={{ animationDelay: '0.18s' }}
          >
            {/* Hero metric */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <p className="text-green-200 text-xs font-semibold uppercase tracking-widest mb-3">
                Queue wait time with DQ
              </p>
              <div className="flex items-baseline gap-5">
                <span className="text-5xl font-black text-white">0 min</span>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-green-300/60 line-through">20+ min</span>
                  <span className="text-xs text-dq-amber font-bold mt-0.5">No queue. No wait.</span>
                </div>
              </div>
              <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-dq-amber to-dq-green rounded-full"
                  style={{ animation: 'grow 1.5s ease-out 0.6s both' }}
                />
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-green-200 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* "How checkout works" mini preview */}
            <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-4">
              <p className="text-xs text-green-300 font-semibold uppercase tracking-widest mb-3">How it works in 3 steps</p>
              <div className="space-y-2.5">
                {[
                  { step: '1', label: 'Customer scans barcode', note: 'On their own phone' },
                  { step: '2', label: 'Pays via UPI or card',  note: 'Powered by Razorpay' },
                  { step: '3', label: 'Shows QR at exit',      note: 'Staff validates in 1 tap' },
                ].map((s) => (
                  <div key={s.step} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-dq-green rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-black">{s.step}</span>
                    </div>
                    <div>
                      <span className="text-white text-xs font-semibold">{s.label}</span>
                      <span className="text-green-300 text-[10px] ml-1.5">{s.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white/[0.04] to-transparent" />
    </section>
  )
}

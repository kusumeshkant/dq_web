import Button from '@/components/ui/Button'

export default function StoresHero() {
  return (
    <section className="relative bg-enterprise-navy py-20 md:py-28 overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(46,134,255,0.6) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-enterprise-blue/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block mb-6 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-blue border border-enterprise-blue/20">
            For Store Owners &amp; GMs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Turn every customer&apos;s phone into a{' '}
            <span className="text-enterprise-blue">checkout terminal.</span>
          </h1>
          <p className="mt-6 text-lg text-enterprise-muted leading-relaxed max-w-2xl">
            DQ gives your store scan-and-go checkout, real-time staff order management,
            and a full analytics dashboard — with no hardware and no IT team.{' '}
            <span className="text-white font-semibold">From ₹2,999/month.</span>
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              href="/contact"
              size="lg"
              className="bg-enterprise-blue hover:bg-enterprise-blue-hover text-white font-semibold border-0 shadow-[0_4px_16px_rgba(46,134,255,0.35)]"
            >
              Request a Demo →
            </Button>
            <Button
              href="/pricing"
              size="lg"
              variant="outline"
              className="border-enterprise-elevated text-enterprise-muted hover:border-enterprise-muted/40 hover:text-white"
            >
              View Pricing
            </Button>
          </div>
          <p className="mt-5 text-xs text-enterprise-muted/70 flex flex-wrap gap-x-5 gap-y-1.5">
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-enterprise-live rounded-full" />All three apps live</span>
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-enterprise-blue rounded-full" />No hardware required</span>
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-enterprise-muted/40 rounded-full" />48-hour deployment</span>
            <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-enterprise-muted/40 rounded-full" />Cancel anytime</span>
          </p>
        </div>
      </div>
    </section>
  )
}

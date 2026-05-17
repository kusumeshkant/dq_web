'use client'

import { useInView } from '@/hooks/useInView'

const LAYERS = [
  {
    num: '04',
    title: 'AI-Native Retail OS',
    phase: 'Phase 5+',
    desc: 'Autonomous operations. Cross-store AI intelligence. Demand prediction. Customer intelligence at platform scale.',
    features: ['Autonomous reorder', 'Demand forecasting', 'Cross-store AI', 'Platform intelligence'],
    status: 'vision',
  },
  {
    num: '03',
    title: 'Intelligence Engine',
    phase: 'Phase 3–4',
    desc: 'AI reorder signals. SKU-level velocity predictions. Inventory optimization. The intelligence layer that forms from your data.',
    features: ['Velocity predictions', 'AI reorder signals', 'SKU forecasting', 'Anomaly detection'],
    status: 'roadmap',
  },
  {
    num: '02',
    title: 'Retail Operations',
    phase: 'Phase 2–3',
    desc: 'Staff performance analytics. Multi-store management. Discount engine. Inventory velocity tracking across outlets.',
    features: ['Multi-store mgmt', 'Staff analytics', 'Inventory velocity', 'Discount engine'],
    status: 'roadmap',
  },
  {
    num: '01',
    title: 'Checkout Infrastructure',
    phase: 'Live Now',
    desc: 'Customer scan-and-pay. Staff order validation. Admin analytics. Real-time queue elimination at the point of service.',
    features: ['Customer checkout', 'Staff operations', 'Admin analytics', 'Exit validation'],
    status: 'live',
  },
]

export default function PlatformVisionSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-blue border border-enterprise-blue/20">
            Platform Architecture
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Not a checkout app.<br />
            <span className="text-enterprise-blue">A platform that compounds with every transaction.</span>
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            DQ is built in four layers. You onboard at Layer 1 today.
            The platform grows smarter with every store, every transaction, every month.
          </p>
        </div>

        {/* Layer stack */}
        <div className="space-y-3">
          {LAYERS.map((layer, i) => {
            const isLive = layer.status === 'live'
            const isVision = layer.status === 'vision'
            return (
              <div
                key={layer.num}
                className={`
                  relative rounded-xl border transition-all duration-300
                  reveal${inView ? ' is-visible' : ''}
                  ${isLive
                    ? 'bg-enterprise-surface border-enterprise-blue/40 shadow-[0_0_0_1px_rgba(46,134,255,0.12),0_4px_32px_rgba(46,134,255,0.08)]'
                    : isVision
                    ? 'bg-enterprise-navy/50 border-enterprise-elevated/40 opacity-60'
                    : 'bg-enterprise-surface/50 border-enterprise-elevated'
                  }
                `}
                style={{ transitionDelay: `${(LAYERS.length - 1 - i) * 0.07}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 sm:p-6">
                  {/* Layer number + live badge */}
                  <div className="flex items-center gap-3 flex-shrink-0 sm:w-48">
                    <span className={`text-[11px] font-black tracking-[0.2em] font-mono ${isLive ? 'text-enterprise-blue' : 'text-enterprise-muted/40'}`}>
                      LAYER {layer.num}
                    </span>
                    <span className={`
                      text-[10px] font-bold px-2.5 py-0.5 rounded-full border
                      ${isLive
                        ? 'bg-enterprise-live/10 text-enterprise-live border-enterprise-live/30'
                        : isVision
                        ? 'bg-enterprise-elevated text-enterprise-muted/50 border-enterprise-elevated'
                        : 'bg-enterprise-elevated/60 text-enterprise-muted/60 border-enterprise-elevated'
                      }
                    `}>
                      {layer.phase}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-base leading-snug ${isLive ? 'text-white' : 'text-enterprise-muted/60'}`}>
                      {layer.title}
                    </h3>
                    <p className={`text-sm mt-0.5 leading-relaxed ${isLive ? 'text-enterprise-muted' : 'text-enterprise-muted/40'}`}>
                      {layer.desc}
                    </p>
                  </div>

                  {/* Feature chips */}
                  <div className="flex flex-wrap gap-1.5 sm:justify-end sm:w-56 flex-shrink-0">
                    {layer.features.map((f) => (
                      <span
                        key={f}
                        className={`text-[10px] font-medium px-2 py-1 rounded-md border ${
                          isLive
                            ? 'bg-enterprise-blue/10 text-enterprise-blue border-enterprise-blue/20'
                            : 'bg-enterprise-elevated/40 text-enterprise-muted/40 border-enterprise-elevated/30'
                        }`}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connector line for non-last items */}
                {i < LAYERS.length - 1 && (
                  <div className="absolute -bottom-3 left-8 w-px h-3 bg-enterprise-elevated" />
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 bg-enterprise-surface border border-enterprise-elevated rounded-xl px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-white font-semibold text-sm leading-snug">Every transaction compounds platform intelligence.</p>
            <p className="text-enterprise-muted text-sm mt-1 leading-relaxed">
              As more stores run DQ and more orders complete, the intelligence layer deepens automatically.
              This is the architecture — not a future promise.
            </p>
          </div>
          <a
            href="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-enterprise-blue hover:bg-enterprise-blue-hover text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap"
          >
            Start at Layer 1 →
          </a>
        </div>

      </div>
    </section>
  )
}

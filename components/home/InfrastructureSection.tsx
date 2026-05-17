'use client'

import { QrCode, Users, LayoutDashboard, Globe, Smartphone, Tablet } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const PLATFORMS = [
  {
    Icon: QrCode,
    title: 'Customer Platform',
    status: 'Live',
    live: true,
    desc: 'Customers scan product barcodes, build their cart, pay digitally, and show an exit QR code — all from their smartphone browser. No app download needed.',
    tags: ['Web', 'Scan & Pay', 'Exit QR'],
    color: 'text-enterprise-live',
    bg: 'bg-enterprise-live/10',
    border: 'hover:border-enterprise-live/30',
  },
  {
    Icon: Users,
    title: 'Staff Operations',
    status: 'Live',
    live: true,
    desc: 'Real-time order feed with instant notifications on every payment. One-tap order management and exit QR validation — built for the store floor.',
    tags: ['Web', 'Live Orders', 'Exit Validation'],
    color: 'text-enterprise-blue',
    bg: 'bg-enterprise-blue/10',
    border: 'hover:border-enterprise-blue/30',
  },
  {
    Icon: LayoutDashboard,
    title: 'Admin Intelligence',
    status: 'Live',
    live: true,
    desc: 'Revenue analytics, inventory tracking, staff performance dashboards, and multi-store management — complete operational visibility in one place.',
    tags: ['Web', 'Analytics', 'Multi-Store'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'hover:border-yellow-400/30',
  },
  {
    Icon: Globe,
    title: 'Web Platform',
    status: 'Live',
    live: true,
    desc: 'All three platforms run as progressive web apps. Accessible from any device with a browser — no installation, no updates, no friction.',
    tags: ['No Install', 'All Devices', 'Always Current'],
    color: 'text-enterprise-muted',
    bg: 'bg-enterprise-elevated',
    border: 'hover:border-enterprise-muted/30',
  },
  {
    Icon: Smartphone,
    title: 'Mobile Apps',
    status: 'Q3 2026',
    live: false,
    desc: 'Native Android and iOS apps for customers and staff — with push notifications, offline support, and optimised camera scanning.',
    tags: ['Android', 'iOS', 'Native'],
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'hover:border-purple-400/20',
  },
  {
    Icon: Tablet,
    title: 'Tablet Experience',
    status: 'Coming Soon',
    live: false,
    desc: 'Dedicated tablet-optimised interface for staff operations and admin dashboards — designed for store floor and manager workflows.',
    tags: ['iPad', 'Android Tablet', 'Floor-Ready'],
    color: 'text-enterprise-muted',
    bg: 'bg-enterprise-elevated',
    border: 'hover:border-enterprise-muted/20',
  },
]

export default function InfrastructureSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-enterprise-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-blue border border-enterprise-blue/20">
            Platform Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            One platform. Complete store coverage.<br />
            <span className="text-enterprise-muted font-normal">Every surface, every role, every transaction.</span>
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            Three live platforms running today. Mobile and tablet surfaces shipping Q3 2026.
            All connected, all real-time.
          </p>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PLATFORMS.map((p, i) => {
            const { Icon } = p
            return (
              <div
                key={p.title}
                className={`group bg-enterprise-navy border border-enterprise-elevated rounded-xl p-6 ${p.border} transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                {/* Icon + status row */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 ${p.bg} rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform`}>
                    <Icon className={`w-5 h-5 ${p.color}`} strokeWidth={1.5} />
                  </div>
                  <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                    p.live
                      ? 'bg-enterprise-live/10 text-enterprise-live border-enterprise-live/20'
                      : 'bg-enterprise-elevated text-enterprise-muted/60 border-enterprise-elevated'
                  }`}>
                    {p.live && <span className="w-1 h-1 bg-enterprise-live rounded-full" />}
                    {p.status}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-enterprise-muted text-sm leading-relaxed mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium text-enterprise-muted/70 bg-enterprise-elevated px-2 py-0.5 rounded-md border border-enterprise-elevated"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Partner + system status strip */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Live status */}
          <div className="bg-enterprise-navy border border-enterprise-elevated rounded-xl px-6 py-4 flex items-center gap-4">
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="w-2 h-2 bg-enterprise-live rounded-full animate-pulse" />
              <span className="text-enterprise-muted text-xs font-semibold uppercase tracking-widest">All Systems Live</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
              {['Customer Platform', 'Staff Platform', 'Admin Platform'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-enterprise-muted">
                  <span className="w-1.5 h-1.5 bg-enterprise-live rounded-full flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Payment partner */}
          <div className="bg-enterprise-navy border border-enterprise-elevated rounded-xl px-6 py-4 flex items-center gap-4">
            <div className="flex-shrink-0">
              <span className="text-enterprise-muted text-xs font-semibold uppercase tracking-widest">Payment Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-semibold">Razorpay</span>
              <span className="text-enterprise-muted text-xs">— UPI · Cards · Wallets · RBI compliant</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

'use client'

import { Server, Activity, GitBranch, Shield, Lock, Zap } from 'lucide-react'
import { useInView } from '@/hooks/useInView'

const PILLARS = [
  {
    Icon: Server,
    title: 'Azure Container Apps — Central India',
    body: 'Production backend deployed on Microsoft Azure, Central India region. India-resident data, horizontal scaling, compliance-ready hosting — the same tier used by enterprise SaaS platforms.',
    tags: ['Azure', 'India-hosted', 'Scalable'],
    color: 'text-enterprise-blue',
    bg: 'bg-enterprise-blue/10',
    border: 'hover:border-enterprise-blue/30',
  },
  {
    Icon: Activity,
    title: '12-Phase Production Observability',
    body: 'Structured logging with correlation IDs injected into every API request. BreadcrumbService ring buffer captures the last 50 events before any crash. ANR detection and frame performance monitoring across all three apps.',
    tags: ['Correlation IDs', 'Crash trace', 'ANR detection'],
    color: 'text-enterprise-live',
    bg: 'bg-enterprise-live/10',
    border: 'hover:border-enterprise-live/30',
  },
  {
    Icon: GitBranch,
    title: 'DEV → UAT → PROD Pipeline',
    body: 'Every feature passes through three environments before reaching production. DEV (Vercel) → UAT (Azure staging) → PROD (Azure production). No debugging on production. No shortcut deployments.',
    tags: ['Staged releases', 'Zero prod debug', 'Enterprise discipline'],
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'hover:border-purple-400/30',
  },
  {
    Icon: Shield,
    title: 'Razorpay Model B — No PA License',
    body: 'DQ never holds merchant funds. Each store links its own Razorpay account directly. Customer payments settle T+1 into your account. This is not a workaround — it is the architecture. No RBI Payment Aggregator License required.',
    tags: ['RBI compliant', 'Zero float', 'Structural moat'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'hover:border-yellow-400/30',
  },
  {
    Icon: Lock,
    title: 'Firebase JWT + 4-Tier RBAC',
    body: 'Session management via Firebase Authentication with JWT verification at the API middleware layer. Role-based access control at both API and UI layers: Owner · Manager · Staff · Cashier. Full audit trail on every action.',
    tags: ['Firebase Auth', 'RBAC', 'Audit trail'],
    color: 'text-enterprise-blue',
    bg: 'bg-enterprise-blue/10',
    border: 'hover:border-enterprise-blue/30',
  },
  {
    Icon: Zap,
    title: 'Apollo GraphQL — Type-Safe API',
    body: 'Fully typed GraphQL schema with 15+ MongoDB models. Resolver-level validation. API-ready for ERP integrations, analytics extensions, and the intelligence layer that emerges as transaction data scales.',
    tags: ['Apollo GraphQL', 'MongoDB Atlas', 'API-ready'],
    color: 'text-enterprise-muted',
    bg: 'bg-enterprise-elevated',
    border: 'hover:border-enterprise-muted/30',
  },
]

export default function InfrastructureSection() {
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-enterprise-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-enterprise-elevated text-enterprise-muted border border-enterprise-elevated">
            Infrastructure
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Enterprise infrastructure.<br />
            <span className="text-enterprise-muted font-normal">Not a startup prototype.</span>
          </h2>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            DQ is built on production-grade cloud infrastructure with multi-environment
            deployment discipline and 12-phase observability — from day one of the platform.
          </p>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map((p, i) => {
            const { Icon } = p
            return (
              <div
                key={p.title}
                className={`group bg-enterprise-navy border border-enterprise-elevated rounded-xl p-6 ${p.border} transition-all duration-300 reveal${inView ? ' is-visible' : ''}`}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className={`w-10 h-10 ${p.bg} rounded-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className={`w-5 h-5 ${p.color}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-enterprise-muted text-sm leading-relaxed mb-4">{p.body}</p>
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

        {/* Live system status */}
        <div className="mt-8 bg-enterprise-navy border border-enterprise-elevated rounded-xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-enterprise-live rounded-full animate-pulse flex-shrink-0" />
            <span className="text-enterprise-muted text-xs font-semibold uppercase tracking-widest">System Status</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 flex-1">
            {[
              'Customer App — Operational',
              'Staff Portal — Operational',
              'Admin Dashboard — Operational',
              'GraphQL API — Operational',
            ].map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-xs text-enterprise-muted">
                <span className="w-1.5 h-1.5 bg-enterprise-live rounded-full flex-shrink-0" />
                {item}
              </span>
            ))}
          </div>
          <span className="text-[10px] text-enterprise-muted/60 flex-shrink-0">Uptime target: 99.9%</span>
        </div>

      </div>
    </section>
  )
}

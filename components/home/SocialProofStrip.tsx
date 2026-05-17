import { Server, Shield, Lock, Activity, Zap, GitBranch } from 'lucide-react'

const SIGNALS = [
  {
    Icon: Server,
    label: 'Azure — Central India',
    sub: 'Production cloud hosting',
    color: 'text-enterprise-blue',
    bg: 'bg-enterprise-blue/10',
  },
  {
    Icon: Shield,
    label: 'Razorpay Model B',
    sub: 'No RBI PA License needed',
    color: 'text-enterprise-live',
    bg: 'bg-enterprise-live/10',
  },
  {
    Icon: Lock,
    label: 'Firebase Auth + RBAC',
    sub: '4-tier role-based access',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
  {
    Icon: Activity,
    label: '12-Phase Observability',
    sub: 'Correlation IDs · Crash trace',
    color: 'text-enterprise-blue',
    bg: 'bg-enterprise-blue/10',
  },
  {
    Icon: Zap,
    label: 'Apollo GraphQL API',
    sub: 'Type-safe · API-ready',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
  },
  {
    Icon: GitBranch,
    label: 'DEV → UAT → PROD',
    sub: 'Multi-environment pipeline',
    color: 'text-enterprise-muted',
    bg: 'bg-enterprise-elevated',
  },
]

export default function AuthorityStrip() {
  return (
    <section className="bg-enterprise-surface border-b border-enterprise-elevated">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-0 lg:divide-x lg:divide-enterprise-elevated">
          {SIGNALS.map((s) => {
            const { Icon } = s
            return (
              <div
                key={s.label}
                className="flex items-center gap-2.5 lg:px-4 xl:px-5 lg:first:pl-0 lg:last:pr-0"
              >
                <div className={`w-8 h-8 ${s.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${s.color}`} strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-white leading-snug truncate">{s.label}</p>
                  <p className="text-[10px] text-enterprise-muted leading-snug truncate">{s.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

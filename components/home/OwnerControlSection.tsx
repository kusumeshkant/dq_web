import { Lock } from 'lucide-react'
import ApprovalFlow from '@/components/home/ApprovalFlow'
import { CLAIMS, HINDI } from '@/lib/site'

// The discount-approval journey as it works in the backend: staff request a
// max % (≤ 50) with a reason, the owner approves it or a lower one, and every
// use is written to the append-only DiscountLog. Animated by ApprovalFlow.
export default function OwnerControlSection() {
  return (
    <section className="py-20 lg:py-28 bg-enterprise-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-enterprise-blue/10 text-enterprise-link border border-enterprise-blue/20">
            Owner control
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Discounts your staff can&apos;t misuse.
          </h2>
          <p lang="hi" className="font-hi mt-3 text-lg text-enterprise-link">{HINDI.control}</p>
          <p className="mt-4 text-enterprise-muted text-base sm:text-lg leading-relaxed">
            Staff give discounts only within the limit you set, and every one is on record.
          </p>
        </div>

        <div className="mt-12">
          <ApprovalFlow />
        </div>

        <p className="mt-6 flex items-center gap-2 text-sm text-enterprise-muted">
          <Lock className="w-4 h-4 text-enterprise-link" aria-hidden="true" />
          {CLAIMS.priceLock}.
        </p>
        <p className="mt-2 text-sm text-enterprise-muted">{CLAIMS.illustrative}</p>
      </div>
    </section>
  )
}

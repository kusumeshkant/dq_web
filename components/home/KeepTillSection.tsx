import { Store, Smartphone } from 'lucide-react'
import { CLAIMS } from '@/lib/site'

export default function KeepTillSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white text-enterprise-action border border-enterprise-action/20">
            {CLAIMS.till}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
            Keep your counter. Add a faster lane.
          </h2>
          <p className="mt-4 text-ink-body text-base sm:text-lg leading-relaxed">
            DQ isn&apos;t a new POS. Shoppers who want the counter still use it. Shoppers with Android phones check
            out in the DQ app. No scanners, no kiosks, nothing to install in the store.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-gray-200 p-6 bg-slate-50">
            <Store className="w-6 h-6 text-ink-muted" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-bold text-gray-900">Your counter</h3>
            <p className="mt-1 text-sm text-ink-body leading-relaxed">
              Stays exactly as it is, on your current billing software, for anyone who prefers it.
            </p>
          </div>
          <div className="rounded-xl border-2 border-enterprise-action p-6 bg-white">
            <Smartphone className="w-6 h-6 text-enterprise-action" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 font-bold text-gray-900">The DQ lane</h3>
            <p className="mt-1 text-sm text-ink-body leading-relaxed">
              Shoppers scan, pay in the DQ Android app and show an exit pass. {CLAIMS.hardware}.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

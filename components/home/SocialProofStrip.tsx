import { ShieldCheck, Smartphone, Zap, Globe2, Package, RotateCcw } from 'lucide-react'

const proofs = [
  {
    Icon: ShieldCheck,
    label: 'Razorpay-secured',
    sub:   'UPI · Cards · Wallets',
    color: 'text-dq-green',
    bg:    'bg-dq-light',
  },
  {
    Icon: Smartphone,
    label: '3 live web apps',
    sub:   'Customer · Staff · Admin',
    color: 'text-blue-600',
    bg:    'bg-blue-50',
  },
  {
    Icon: Zap,
    label: 'Live in under 1 hour',
    sub:   'No IT team needed',
    color: 'text-dq-amber',
    bg:    'bg-amber-50',
  },
  {
    Icon: Globe2,
    label: '6 Indian languages',
    sub:   'Hindi to Bengali',
    color: 'text-purple-600',
    bg:    'bg-purple-50',
  },
  {
    Icon: Package,
    label: '₹0 hardware cost',
    sub:   'Use phones you already own',
    color: 'text-gray-700',
    bg:    'bg-gray-100',
  },
  {
    Icon: RotateCcw,
    label: '30-day free trial',
    sub:   'Cancel anytime',
    color: 'text-rose-600',
    bg:    'bg-rose-50',
  },
]

export default function SocialProofStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-0 lg:divide-x lg:divide-gray-100">
          {proofs.map((p) => {
            const { Icon } = p
            return (
              <div
                key={p.label}
                className="flex items-center gap-2.5 lg:px-5 lg:first:pl-0 lg:last:pr-0"
              >
                <div className={`w-8 h-8 ${p.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${p.color}`} strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-gray-800 leading-snug">{p.label}</p>
                  <p className="text-[10px] text-gray-400 leading-snug">{p.sub}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

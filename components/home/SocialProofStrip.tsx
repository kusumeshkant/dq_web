const proofs = [
  { label: 'Powered by',  name: 'Razorpay',        icon: '💳', verified: true },
  { label: 'Built on',    name: 'Firebase',         icon: '🔥', verified: true },
  { label: 'Secured by',  name: 'Cloudflare',       icon: '🛡️', verified: true },
  { label: 'Live across', name: '4 store types',    icon: '🏪', verified: true },
  { label: 'Setup in',    name: 'under 1 hour',     icon: '⚡', verified: true },
]

export default function SocialProofStrip() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-x-12">
          {proofs.map((p) => (
            <div key={p.name} className="flex items-center gap-2 text-gray-500 whitespace-nowrap">
              <span className="text-lg">{p.icon}</span>
              <span className="text-sm">
                <span className="text-gray-400">{p.label} </span>
                <span className="font-semibold text-gray-700">{p.name}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

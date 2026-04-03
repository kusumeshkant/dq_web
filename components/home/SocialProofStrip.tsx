const proofs = [
  { label: 'Powered by', name: 'Razorpay', icon: '💳' },
  { label: 'Built on', name: 'Firebase', icon: '🔥' },
  { label: 'Secured by', name: 'Cloudflare', icon: '🛡️' },
  { label: 'Processing', name: '35+ real orders', icon: '✅' },
]

export default function SocialProofStrip() {
  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {proofs.map((p) => (
            <div key={p.name} className="flex items-center gap-2 text-gray-500">
              <span className="text-xl">{p.icon}</span>
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

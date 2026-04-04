import SectionHeading from '@/components/ui/SectionHeading'

const apps = [
  {
    icon: '🛒',
    title: 'Customer App',
    color: 'bg-dq-green',
    features: [
      'Scan barcodes, build cart',
      'Pay via UPI, card, wallet',
      'Real-time order tracking',
      'QR code for exit',
      'Order history',
      'Hindi + English',
    ],
  },
  {
    icon: '👷',
    title: 'Staff App',
    color: 'bg-dq-amber',
    features: [
      'Live order feed',
      'Push alerts on new orders',
      'One-tap status updates',
      'Product checklist',
      'Exit QR validation',
      'Silent background polling',
    ],
  },
  {
    icon: '📊',
    title: 'Admin App',
    color: 'bg-blue-600',
    features: [
      'Revenue analytics dashboard',
      'Inventory management',
      'Bulk Excel upload',
      'Order monitoring',
      'Low stock alerts',
      'Week-over-week trends',
    ],
  },
]

export default function AppsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="3 Apps, 1 Ecosystem"
          title="Everything your store needs — out of the box"
          subtitle="Customer, staff, and admin apps that talk to each other in real time."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div
              key={app.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md overflow-hidden transition-all duration-200 animate-fade-up"
              style={{ animationDelay: `${i * 0.12}s` }}
            >
              <div className={`${app.color} p-6`}>
                <div className="text-4xl mb-3">{app.icon}</div>
                <h3 className="text-xl font-bold text-white">{app.title}</h3>
              </div>
              <ul className="p-6 space-y-3">
                {app.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-dq-green font-bold mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

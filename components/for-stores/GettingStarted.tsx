import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

const steps = [
  {
    step: '01',
    time: '10 minutes',
    title: 'Sign Up',
    desc: 'Register your store on DQ Admin. Enter store name, address, and store code.',
  },
  {
    step: '02',
    time: '30 minutes',
    title: 'Upload Inventory',
    desc: 'Upload your product catalogue from Excel. Or add products one by one. Each product needs a barcode, name, price, and stock count.',
  },
  {
    step: '03',
    time: 'Same day',
    title: 'Go Live',
    desc: "Share your store code with customers. They find you on DQ app. Your staff gets their login. You're live.",
  },
]

export default function GettingStarted() {
  return (
    <section className="py-20 bg-dq-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Getting Started"
          title="Live in one afternoon"
          subtitle="No IT team. No hardware. No downtime."
          light
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-dq-green flex items-center justify-center text-white font-black text-sm">
                  {s.step}
                </span>
                <span className="text-xs text-dq-amber font-semibold uppercase tracking-wider">
                  ⏱ {s.time}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-green-300 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/contact" size="lg" className="bg-white text-dq-dark hover:bg-gray-100">
            Start Your Free Trial →
          </Button>
        </div>
      </div>
    </section>
  )
}

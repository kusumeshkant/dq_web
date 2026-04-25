export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-dq-light text-dq-dark border border-dq-muted">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
            Every Indian has wasted 30 minutes waiting to pay for ₹200 worth of groceries.
          </h2>

          <div className="space-y-5 text-gray-600 leading-relaxed text-[15px]">
            <p>
              You&apos;ve already decided what to buy. You&apos;ve already picked it up.
              You&apos;re just waiting to give someone money — and that wait costs the store more than they realise.
            </p>

            <p className="font-semibold text-gray-800 text-base">That&apos;s broken. We built the fix.</p>

            <p>
              DQ started with a single question: what if the billing counter just wasn&apos;t needed?
              The answer is a 3-app ecosystem — customers scan and pay on their phone, staff get
              real-time order management, and store owners get business intelligence that used to
              require enterprise software.
            </p>

            <p>
              Perpule proved this category is real. Amazon acquired them for their large-format retail play.
              We&apos;re here for the{' '}
              <span className="font-semibold text-gray-800">180,000 mid-market fashion and lifestyle stores</span>
              {' '}they didn&apos;t serve — the boutiques, the jewellery counters, the branded lifestyle stores
              that define India&apos;s high-street retail.
            </p>

            <p>
              We are early stage, with a working product, a focused niche, and the infrastructure
              timing on our side. UPI, QR acceptance, and smartphone penetration have converged
              to make now the right moment. We&apos;re moving fast while that window is open.
            </p>
          </div>

          <div className="mt-10 p-7 bg-dq-light border border-dq-muted rounded-2xl">
            <p className="text-dq-dark font-bold text-xl italic text-center leading-snug">
              &ldquo;To make the checkout queue extinct in Indian retail.&rdquo;
            </p>
            <p className="text-dq-green text-sm text-center mt-3 font-semibold tracking-wide uppercase text-xs">
              Our Mission
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

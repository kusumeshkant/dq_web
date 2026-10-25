export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-enterprise-action/5 text-enterprise-action border border-enterprise-action/15">
            Our story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
            You&apos;ve picked what you want. Then you wait in line to pay for it.
          </h2>

          <div className="space-y-5 text-ink-body leading-relaxed text-[15px]">
            <p>
              On a busy Saturday in a fashion store, the shopper has already decided. They&apos;re holding the clothes.
              They&apos;re just waiting to give someone money — and that wait costs the store more than it realises.
            </p>

            <p className="font-semibold text-gray-800 text-base">That&apos;s broken. We built the fix.</p>

            <p>
              DQ started with one question: what if the billing counter wasn&apos;t the only way to pay?
              The answer is three apps that work together. Shoppers scan and pay on their own phone. Staff check every
              exit and give discounts only within the limit the owner sets. Owners see sales, peak hours, discounts and
              stock in one dashboard.
            </p>

            <p>
              DQ is early. The apps are built, and we&apos;re working closely with a small group of founding stores to
              get the details right before we open it up more widely.
            </p>
          </div>

          <div className="mt-10 p-7 bg-enterprise-navy border border-enterprise-elevated rounded-xl">
            <p className="text-white font-bold text-xl italic text-center leading-snug">
              &ldquo;Take the billing queue out of Indian retail.&rdquo;
            </p>
            <p className="text-enterprise-link text-xs text-center mt-3 font-semibold tracking-widest uppercase">
              Our mission
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

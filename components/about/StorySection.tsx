export default function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-dq-light text-dq-dark border border-dq-muted">
            Our Story
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-8">
            We built DQ because we were tired of waiting in line.
          </h2>

          <div className="prose prose-gray max-w-none space-y-5 text-gray-600 leading-relaxed">
            <p>
              Every Indian has spent 30 minutes waiting to pay for ₹200 worth of groceries.
              You've already decided what to buy. You've already picked it up.
              You're just waiting to give someone money.
            </p>
            <p className="font-semibold text-gray-800">That's broken.</p>
            <p>
              DQ started with a simple question: what if the checkout counter just... wasn't needed?
              We built the answer — a 3-app ecosystem that turns every customer's phone into a
              checkout terminal, gives staff real-time order management, and gives store owners
              analytics they've never had before.
            </p>
            <p>
              Perpule proved the market was real. Amazon acquired them for their large-format
              retail play. We're here for the 180,000 mid-market stores they left behind —
              the fashion stores, the electronics shops, the specialty retailers.
            </p>
          </div>

          <div className="mt-10 p-6 bg-dq-light border border-dq-muted rounded-2xl">
            <p className="text-dq-dark font-bold text-lg italic text-center">
              "To make the checkout queue extinct in Indian retail."
            </p>
            <p className="text-dq-green text-sm text-center mt-2 font-medium">— Our Mission</p>
          </div>
        </div>
      </div>
    </section>
  )
}

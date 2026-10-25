/* eslint-disable @next/next/no-img-element -- static export: images are unoptimized anyway */
import { FOUNDER } from '@/lib/site'

/** Founder note (decision Q7). With no photo, a neutral monogram — never a stock image. */
export default function FounderSection() {
  return (
    <section className="py-20 bg-white" aria-labelledby="founder-title">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="inline-block mb-5 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-white text-enterprise-action border border-enterprise-action/20">
          From the founder
        </span>

        <div className="flex items-center gap-4">
          {FOUNDER.photo ? (
            <img src={FOUNDER.photo} alt="" width={64} height={64} className="w-16 h-16 rounded-full object-cover" />
          ) : (
            <div
              aria-hidden="true"
              className="w-16 h-16 rounded-full bg-enterprise-navy text-white flex items-center justify-center text-xl font-bold tracking-wide"
            >
              {FOUNDER.initials}
            </div>
          )}
          <div>
            <h2 id="founder-title" className="text-xl font-bold text-gray-900">{FOUNDER.name}</h2>
            <p className="text-sm text-ink-muted">{FOUNDER.role}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3 text-ink-body leading-relaxed text-[15px]">
          {FOUNDER.note.map((line) => <p key={line}>{line}</p>)}
        </div>

        <a
          href={FOUNDER.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${FOUNDER.name} on LinkedIn`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-enterprise-action hover:bg-blue-50"
        >
          LinkedIn
        </a>
      </div>
    </section>
  )
}

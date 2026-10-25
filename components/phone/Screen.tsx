/* eslint-disable @next/next/no-img-element -- static export: images are unoptimized anyway */

interface ScreenProps {
  /** Accessible description of what the screen shows. */
  label: string
  /**
   * Real capture (WebP) to use instead of the recreation. When set, the
   * "Illustrative" badge is dropped automatically.
   */
  src?: string
  /** Recreated screen in HTML/CSS. */
  children?: React.ReactNode
  badge?: string
}

/**
 * One app screen. Today every screen is an HTML/CSS recreation, labelled
 * "Illustrative". Pass `src` later to swap in a real capture without
 * touching the layouts that use it.
 */
export default function Screen({ label, src, children, badge = 'Illustrative' }: ScreenProps) {
  if (src) {
    return <img src={src} alt={label} width={240} height={520} loading="lazy" decoding="async" className="h-full w-full object-cover" />
  }
  return (
    <div role="img" aria-label={`${label} (${badge.toLowerCase()})`} className="relative h-full w-full">
      <div aria-hidden="true" className="h-full w-full">{children}</div>
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 rounded-full bg-enterprise-navy px-2.5 py-0.5 text-xs font-semibold text-white"
      >
        {badge}
      </span>
    </div>
  )
}

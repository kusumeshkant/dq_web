import { cn } from '@/lib/utils'

// Android-style device (decision Q1: shoppers use the DQ Android app):
// punch-hole camera, squarer corners, gesture bar in the bezel.
const SIZES = {
  md: 'w-[260px] h-[540px] rounded-[34px] p-[10px] pb-[16px]',
  sm: 'w-[220px] h-[456px] rounded-[30px] p-[8px] pb-[14px]',
} as const

/** Device bezel. Fixed size so swapping screens never shifts layout (CLS). */
export default function PhoneFrame({
  size = 'md',
  className,
  children,
}: {
  size?: keyof typeof SIZES
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'relative flex-shrink-0 bg-enterprise-footer shadow-[0_24px_60px_rgba(9,15,23,0.35)] ring-2 ring-enterprise-elevated',
        SIZES[size],
        className,
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-white">
        <span className="absolute top-[10px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-enterprise-footer z-20" aria-hidden="true" />
        {children}
      </div>
      <span className="absolute bottom-[5px] left-1/2 -translate-x-1/2 w-16 h-1 rounded-full bg-enterprise-elevated" aria-hidden="true" />
    </div>
  )
}

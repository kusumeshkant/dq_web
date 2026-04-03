import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {badge && (
        <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-dq-light text-dq-dark border border-dq-muted">
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-lg leading-relaxed',
            light ? 'text-green-200' : 'text-gray-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

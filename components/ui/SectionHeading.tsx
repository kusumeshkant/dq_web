import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark' | 'default'
  /** Use "h1" for page heroes — every page needs exactly one h1. */
  as?: 'h1' | 'h2'
  /** @deprecated use variant="dark" */
  light?: boolean
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  variant,
  as: Heading = 'h2',
  light = false,
}: SectionHeadingProps) {
  const isDark = variant === 'dark' || light
  const isLight = variant === 'light'

  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {badge && (
        <span
          className={cn(
            'inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase',
            isDark
              ? 'bg-enterprise-blue/10 text-enterprise-link border border-enterprise-blue/20'
              : isLight
              ? 'bg-white/15 text-white border border-white/20'
              : 'bg-white text-enterprise-action border border-enterprise-action/20'
          )}
        >
          {badge}
        </span>
      )}
      <Heading
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
          isDark ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            isDark ? 'text-enterprise-muted' : 'text-ink-body'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

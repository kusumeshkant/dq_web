import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  badge?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  variant?: 'light' | 'dark' | 'default'
  /** @deprecated use variant="dark" */
  light?: boolean
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  variant,
  light = false,
}: SectionHeadingProps) {
  const isDark = variant === 'dark' || light
  const isLight = variant === 'light'

  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {badge && (
        <span
          className={cn(
            'inline-block mb-4 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase',
            isDark
              ? 'bg-enterprise-blue/10 text-enterprise-blue border border-enterprise-blue/20'
              : isLight
              ? 'bg-white/15 text-white/80 border border-white/20'
              : 'bg-enterprise-blue/8 text-enterprise-blue border border-enterprise-blue/15'
          )}
        >
          {badge}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl font-bold leading-tight tracking-tight',
          isDark ? 'text-white' : 'text-gray-900'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-4 text-base sm:text-lg leading-relaxed',
            isDark ? 'text-enterprise-muted' : 'text-gray-600'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'amber' | 'dark'
  className?: string
}

export default function Badge({ children, variant = 'green', className }: BadgeProps) {
  const variants = {
    green: 'bg-enterprise-blue/10 text-enterprise-blue border border-enterprise-blue/20',
    amber: 'bg-amber-100 text-amber-800 border border-amber-300',
    dark:  'bg-enterprise-navy text-white',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

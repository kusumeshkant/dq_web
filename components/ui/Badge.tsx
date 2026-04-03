import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'amber' | 'dark'
  className?: string
}

export default function Badge({ children, variant = 'green', className }: BadgeProps) {
  const variants = {
    green: 'bg-dq-light text-dq-dark border border-dq-muted',
    amber: 'bg-amber-100 text-amber-800 border border-amber-300',
    dark:  'bg-dq-dark text-white',
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

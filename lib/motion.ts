// Motion tokens (docs/website_analysis/05_motion_plan.md). Animate only
// transform and opacity; everything else stays static.

type Bezier = [number, number, number, number]

export const ease: { out: Bezier; inOut: Bezier } = {
  out:   [0.22, 1, 0.36, 1],
  inOut: [0.65, 0, 0.35, 1],
}

export const dur = {
  fast: 0.18,
  base: 0.32,
  slow: 0.6,
} as const

export const spring = {
  ui:    { type: 'spring', stiffness: 380, damping: 32 },
  count: { stiffness: 120, damping: 24 },
} as const

export const stagger = 0.07

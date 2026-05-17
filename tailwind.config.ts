import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Enterprise canonical tokens (docs/strategic_branding/design-system)
        enterprise: {
          navy:      '#0D1B2A',   // bg.primary — main dark background
          surface:   '#1A2B3C',   // bg.surface — cards, panels
          elevated:  '#2E3F52',   // bg.elevated — borders, hover
          blue:      '#2E86FF',   // interactive.primary — CTAs, links
          'blue-hover': '#1A6FD4',
          live:      '#00C853',   // status.live
          error:     '#FF4A4A',   // status.error
          muted:     '#B0BECC',   // text.secondary
        },
        // Legacy DQ tokens — retained for backward compat
        dq: {
          green:     '#16A34A',
          dark:      '#14532D',
          light:     '#DCFCE7',
          muted:     '#86EFAC',
          amber:     '#F59E0B',
          'amber-light': '#FEF3C7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(circle, rgba(46,134,255,0.18) 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-32': '32px 32px',
      },
    },
  },
  plugins: [],
}

export default config

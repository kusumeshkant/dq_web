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
        // Contrast notes are WCAG 2.1 ratios against the background named.
        enterprise: {
          navy:      '#0D1B2A',   // bg.primary — main dark background
          surface:   '#1A2B3C',   // bg.surface — cards, panels
          elevated:  '#2E3F52',   // bg.elevated — borders, hover
          footer:    '#090F17',   // bg.footer
          blue:      '#2E86FF',   // brand accent — icons, rings, decoration only (3.5:1 on white)
          action:    '#1A6FD4',   // CTA background + blue text on light bg (white text 4.9:1, on white 4.9:1)
          'action-hover': '#155BB0',
          link:      '#7AB3FF',   // blue text on dark bg (navy 8.0:1, surface 6.7:1, elevated 5.0:1)
          live:      '#00C853',   // decorative green only — not for text
          success:   '#047857',   // green text on light bg (5.4:1 on white)
          amber:     '#B45309',   // amber badges/text (white text 5.0:1, on white 5.0:1)
          error:     '#FF4A4A',
          muted:     '#B0BECC',   // text.secondary on dark (navy 9.2:1, elevated 5.7:1)
          subtle:    '#8A9BAD',   // de-emphasised text on navy/surface/footer (≥ 5.0:1) — not on elevated
        },
        // Light-surface text tokens
        ink: {
          DEFAULT:   '#111827',
          body:      '#4B5563',   // 7.6:1 on white
          muted:     '#6B7280',   // 4.8:1 on white, ≥ 4.6:1 on gray-50
        },
        danger:      '#B91C1C',   // errors + required marker (6.5:1 on white)
        whatsapp: {
          brand:     '#25D366',   // icon only
          deep:      '#0B7A3B',   // text on white 5.4:1, white on it 5.4:1
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
        // Hindi lines use the phone's own Devanagari font (Android: Noto Sans
        // Devanagari, iOS: Kohinoor Devanagari, Windows: Nirmala UI). A web
        // font here cost ~146 KB and delayed the hero on mobile.
        hi:   ['"Noto Sans Devanagari"', '"Kohinoor Devanagari"', '"Nirmala UI"', 'Mangal', 'system-ui', 'sans-serif'],
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

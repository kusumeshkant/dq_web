# DQ Brand Identity Specification

## Core Design Concept

**The Queue Exit Mark**

The DQ mark is built on one irreducible idea: the Q's tail becomes an exit arrow.

- **D** = structural anchor (the store, the system)
- **Q** = the queue (the circle/loop people are trapped in)
- **Amber tail** = the exit from the queue — the customer walking out, free

This is not a decorative choice. Every element has a reason.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| **Brand Green** | `#16a34a` | Primary — Customer app bg, logo mark, CTAs |
| **Deep Green** | `#14532d` | Dark text, wordmark |
| **Light Green** | `#22c55e` | Gradient highlight, hover states |
| **Amber** | `#f59e0b` | Brand motion mark — the exit tail |
| **Cyan** | `#22d3ee` | Staff app accent — operational/active |
| **Violet** | `#a78bfa` | Admin app accent — analytical/intelligent |
| **Slate Dark** | `#0f172a` | Staff app background |
| **Navy** | `#1e40af` | Admin app background |
| **White** | `#ffffff` | Mark on colored surfaces |
| **Gray 500** | `#6b7280` | Secondary text, sub-labels |

---

## Icon System

| File | App | Background | Accent | Personality |
|---|---|---|---|---|
| `dq-app-customer.svg` | DQ (Customer) | `#16a34a` Green | `#f59e0b` Amber | Friendly, vibrant, "go" |
| `dq-app-staff.svg` | DQ Staff | `#0f172a` Dark | `#22d3ee` Cyan | Operational, sharp, active |
| `dq-app-admin.svg` | DQ Admin | `#1e40af` Blue | `#a78bfa` Violet | Professional, analytical |
| `favicon.svg` | Web | `#16a34a` Green | `#f59e0b` Amber | Simplified, high contrast |

**System rule:** The geometric DQ mark (D + Q ring + accent tail) is IDENTICAL across all icons. Only the background and accent color change. This is the cohesion mechanism.

---

## Geometric Construction

All marks use a 1024×1024 master grid.

```
D shape:
  Vertical stroke: x:168–240, y:320–704 (72px wide, 384px tall)
  Belly arc: A 192 192 — rightmost point at x:432

Gap between D and Q: 40px (x:432 → x:472)

Q ring:
  Center: (664, 512)
  Radius: 192px (= D arc radius — same scale)
  Stroke: 72px (= D stroke width — same weight)
  Left edge: 664 - 192 = 472 ✓

Amber tail:
  Origin: Q ring inner edge at 60° below horizontal
    → (664 + 156×cos60°, 512 + 156×sin60°) = (742, 647)
  End: (800, 746) — exits beyond Q's outer edge
  Stroke: 72px, linecap=round
  Color: varies by app (amber/cyan/violet)

Logo symmetry:
  Left padding (to D): 168px
  Right padding (from Q edge at 856): 1024 - 856 = 168px
  Perfectly centered ✓
```

---

## Typography

| Use | Font | Weight | Size |
|---|---|---|---|
| App UI body | Inter | 400 / 500 | 14–16px |
| App UI headings | Inter | 700 / 800 | 18–32px |
| Wordmark "DQ" | Arial Black / Inter ExtraBold | 900 | large |
| Sub-label "STORE" | Arial / Inter | 600 | small, letter-spaced |
| Marketing headlines | Inter | 900 | 40–72px |

Web stack: `'Inter', system-ui, sans-serif`

---

## Usage Rules

**Do:**
- Use white mark on green, dark, or blue backgrounds
- Use green mark on white/light backgrounds
- Keep the amber/accent tail in its assigned color per app
- Maintain minimum padding: 10% of icon size on all sides

**Don't:**
- Rotate the mark
- Remove the amber tail (it's the brand's core idea)
- Change individual stroke weights
- Use the mark without background on photography

---

## Flutter App Icon Setup

Use `flutter_launcher_icons` package:

```yaml
# pubspec.yaml
flutter_launcher_icons:
  android: "launcher_icon"
  ios: true
  image_path: "assets/icons/app-icon.png"  # Convert SVG to 1024×1024 PNG first
  adaptive_icon_background: "#16a34a"  # Customer app
  # "#0f172a" for Staff, "#1e40af" for Admin
  adaptive_icon_foreground: "assets/icons/app-icon-foreground.png"
```

**SVG → PNG conversion:**
```bash
# Using Inkscape (recommended)
inkscape dq-app-customer.svg --export-png=app-icon.png --export-width=1024

# Using rsvg-convert
rsvg-convert -w 1024 -h 1024 dq-app-customer.svg > app-icon.png
```

---

## Favicon Integration (Next.js)

```html
<!-- app/layout.tsx metadata -->
<link rel="icon" href="/logos/favicon.svg" type="image/svg+xml" />
<link rel="alternate icon" href="/favicon.ico" />
```

Or in `next.config.js` / `app/layout.tsx` metadata export:
```ts
export const metadata = {
  icons: {
    icon: '/logos/favicon.svg',
  },
}
```

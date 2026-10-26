// Generates public/og-image.png (1200×630) from the HTML template below.
//
//   npm run og:image
//
// Uses the locally installed Google Chrome through playwright-core (no browser
// download). Set CHROME_PATH to point at a different Chromium binary.
// Do not hand-edit the PNG — change this template and re-run.

import { chromium } from 'playwright-core'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-image.png')

// Brand tokens (tailwind.config.ts)
const NAVY = '#0D1B2A', SURFACE = '#1A2B3C', ELEVATED = '#2E3F52'
const ACTION = '#1A6FD4', LINK = '#7AB3FF', MUTED = '#B0BECC', LIVE = '#00C853'

// Deterministic decorative pattern standing in for the exit-pass QR code.
// It is not a scannable code.
function qrCells(size = 21) {
  let seed = 7
  const rnd = () => (seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648
  const finder = (r, c) => {
    const inBox = (r0, c0) => r >= r0 && r < r0 + 7 && c >= c0 && c < c0 + 7
    const ring = (r0, c0) => {
      const y = r - r0, x = c - c0
      return y === 0 || y === 6 || x === 0 || x === 6 || (y >= 2 && y <= 4 && x >= 2 && x <= 4)
    }
    if (inBox(0, 0)) return ring(0, 0) ? 1 : 0
    if (inBox(0, size - 7)) return ring(0, size - 7) ? 1 : 0
    if (inBox(size - 7, 0)) return ring(size - 7, 0) ? 1 : 0
    return null
  }
  const cells = []
  for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) {
    const f = finder(r, c)
    cells.push(f === null ? (rnd() > 0.52 ? 1 : 0) : f)
  }
  return cells
}

const cells = qrCells()
  .map((on) => `<i style="background:${on ? NAVY : 'transparent'}"></i>`)
  .join('')

const html = `<!doctype html>
<html><head><meta charset="utf-8"><style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 1200px; height: 630px; overflow: hidden; background: ${NAVY};
         font-family: "Segoe UI", Inter, system-ui, -apple-system, sans-serif; color: #fff; }
  .dots { position: absolute; inset: 0; opacity: .08;
          background-image: radial-gradient(circle, ${LINK} 1px, transparent 1px); background-size: 32px 32px; }
  .wrap { position: relative; display: flex; height: 100%; padding: 72px 80px; gap: 56px; align-items: center; }
  .left { flex: 1; }
  .brand { display: flex; align-items: center; gap: 14px; margin-bottom: 56px; }
  .mark { width: 56px; height: 56px; border-radius: 14px; background: ${ACTION};
          display: grid; place-items: center; font-weight: 900; font-size: 22px; letter-spacing: -.5px; }
  .brand span { font-size: 30px; font-weight: 700; }
  h1 { font-size: 84px; line-height: 1.02; font-weight: 800; letter-spacing: -2.5px; }
  h1 em { font-style: normal; color: ${LINK}; }
  .sub { margin-top: 26px; font-size: 28px; line-height: 1.35; color: ${MUTED}; max-width: 560px; }
  .url { margin-top: 40px; font-size: 22px; color: ${LINK}; font-weight: 600; }
  .phone { width: 300px; height: 520px; border-radius: 44px; background: #05101C; padding: 14px;
           box-shadow: 0 30px 80px rgba(0,0,0,.5), 0 0 0 2px ${ELEVATED}; flex-shrink: 0; }
  .screen { height: 100%; border-radius: 32px; background: ${SURFACE}; padding: 26px 22px;
            display: flex; flex-direction: column; align-items: center; }
  .pill { font-size: 15px; font-weight: 700; color: ${NAVY}; background: ${LIVE}; border-radius: 999px; padding: 6px 14px; }
  .title { margin-top: 18px; font-size: 26px; font-weight: 800; }
  .store { margin-top: 4px; font-size: 16px; color: ${MUTED}; }
  .qr { margin-top: 22px; width: 210px; height: 210px; background: #fff; border-radius: 16px; padding: 14px;
        display: grid; grid-template-columns: repeat(21, 1fr); }
  .qr i { display: block; }
  .code { margin-top: 20px; font-family: Consolas, "SF Mono", monospace; font-size: 19px; letter-spacing: 1px; color: #fff; }
  .hint { margin-top: 8px; font-size: 14px; color: ${MUTED}; }
</style></head>
<body>
  <div class="dots"></div>
  <div class="wrap">
    <div class="left">
      <div class="brand"><div class="mark">DQ</div><span>DQ</span></div>
      <h1>No billing<br><em>queue.</em></h1>
      <p class="sub">Scan-and-go self-checkout for fashion &amp; lifestyle stores in India.</p>
      <p class="url">dqstore.in</p>
    </div>
    <div class="phone"><div class="screen">
      <span class="pill">✓ Paid</span>
      <p class="title">Exit pass</p>
      <p class="store">Show this at the door</p>
      <div class="qr">${cells}</div>
      <p class="code">DQX1 · 4F7K · 9QM2</p>
      <p class="hint">Staff check it in one tap</p>
    </div></div>
  </div>
</body></html>`

const browser = await chromium.launch(
  process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' },
)
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })
  await page.setContent(html, { waitUntil: 'load' })
  await page.screenshot({ path: OUT, type: 'png' })
  console.log(`wrote ${path.relative(process.cwd(), OUT)}`)
} finally {
  await browser.close()
}

'use client'

// HTML/CSS recreations of the DQ app screens, used inside <Screen>. They are
// illustrative: fictional store, sample data, no payment-provider branding.
//
// Every screen takes `play`. With play=false it renders its final state with no
// animation (static grids, reduced motion, no JS); with play=true it runs its
// micro-moments once on mount (05_motion_plan.md concept A / C).

import { useEffect, useMemo, useState } from 'react'
import { m } from 'framer-motion'
import { useTween } from '@/components/motion/useTween'
import { Check, Lock, ShoppingBag } from 'lucide-react'
import { qrPattern } from '@/lib/qr-pattern'
import { APPROVAL_EXAMPLE, SAMPLE, formatINR } from '@/lib/site'
import { dur, ease, spring } from '@/lib/motion'

const TOTAL = SAMPLE.cart.reduce((s, i) => s + i.price, 0)

function AppBar({ title, back = false }: { title: string; back?: boolean }) {
  return (
    <div className="flex items-center gap-2 bg-enterprise-navy px-4 pt-8 pb-3 text-white">
      {back && <span className="text-sm">←</span>}
      <span className="w-6 h-6 rounded-md bg-enterprise-action flex items-center justify-center text-xs font-black">DQ</span>
      <span className="text-sm font-semibold truncate">{title}</span>
    </div>
  )
}

function Qr({ size = 21, seed = 7, className = '' }: { size?: number; seed?: number; className?: string }) {
  // One SVG path instead of size² elements: ~440 fewer DOM nodes to lay out and
  // hydrate (this sits on the home page, which is LCP-sensitive).
  const d = useMemo(() => {
    const cells = qrPattern(size, seed)
    let p = ''
    cells.forEach((on, i) => { if (on) p += `M${i % size} ${Math.floor(i / size)}h1v1h-1z` })
    return p
  }, [size, seed])
  return (
    <div className={`bg-white p-2 rounded-lg ${className}`}>
      <svg viewBox={`0 0 ${size} ${size}`} className="block w-full h-auto" shapeRendering="crispEdges">
        <path d={d} className="fill-enterprise-navy" />
      </svg>
    </div>
  )
}

/** Counts a number up from 0 to `to` (after a short delay) when play is true. */
function useCount(to: number, play: boolean, delayMs = 450): string {
  const [target, setTarget] = useState(play ? 0 : to)
  useEffect(() => {
    if (!play) { setTarget(to); return }
    const t = setTimeout(() => setTarget(to), delayMs)
    return () => clearTimeout(t)
  }, [play, to, delayMs])
  return formatINR(Math.round(useTween(target, { from: play ? 0 : to, duration: 0.9, instant: !play })))
}

/* ── Shopper: store QR ─────────────────────────────────────────────────── */
export function StoreQrScreen({ play = true }: { play?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-enterprise-navy text-white">
      <AppBar title="Find your store" />
      <div className="relative mx-6 mt-6 aspect-square rounded-2xl border-2 border-enterprise-link/60 flex items-center justify-center">
        <Qr size={17} seed={3} className="w-28" />
        {play && (
          <m.span
            className="absolute left-3 right-3 h-0.5 bg-enterprise-live"
            initial={{ top: '12%' }}
            animate={{ top: ['12%', '88%', '12%'] }}
            transition={{ duration: 2.4, ease: 'linear', repeat: Infinity }}
          />
        )}
      </div>
      <p className="mt-5 px-6 text-center text-sm font-semibold">Scan the store QR at the entrance</p>
      <p className="mt-1 px-6 text-center text-xs text-enterprise-muted">Or type the store code</p>
    </div>
  )
}

/* ── Shopper: barcode scan ─────────────────────────────────────────────── */
export function BarcodeScanScreen({ play = true }: { play?: boolean }) {
  const item = SAMPLE.cart[0]
  return (
    <div className="flex h-full flex-col bg-enterprise-navy text-white">
      <div className="flex items-center justify-between px-4 pt-8 pb-3">
        <span className="text-sm font-semibold">{SAMPLE.store}</span>
        <span className="relative">
          <ShoppingBag className="w-5 h-5" />
          <m.span
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-enterprise-action text-xs font-bold flex items-center justify-center"
            initial={play ? { scale: 0 } : false}
            animate={{ scale: 1 }}
            transition={{ ...spring.ui, delay: play ? 1.4 : 0 }}
          >
            1
          </m.span>
        </span>
      </div>
      <div className="relative mx-5 mt-2 h-48 rounded-2xl bg-enterprise-surface border border-enterprise-elevated flex items-center justify-center overflow-hidden">
        <div className="flex items-end gap-[3px] h-20 bg-white px-3 py-2 rounded">
          {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3].map((w, i) => (
            <span key={i} className="bg-enterprise-navy h-full" style={{ width: w * 2 }} />
          ))}
        </div>
        <m.span
          className="absolute left-4 right-4 h-0.5 bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"
          initial={{ top: '50%' }}
          animate={play ? { top: ['30%', '70%', '30%'] } : { top: '50%' }}
          transition={play ? { duration: 1.6, ease: 'easeInOut', repeat: Infinity } : { duration: 0 }}
        />
      </div>
      <m.div
        className="mx-5 mt-5 rounded-xl bg-white text-ink p-3 flex items-center justify-between"
        initial={play ? { opacity: 0, y: 16 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: dur.base, ease: ease.out, delay: play ? 1.1 : 0 }}
      >
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.name}</p>
          <p className="text-xs text-ink-muted">Size {item.size} · {formatINR(item.price)}</p>
        </div>
        <span className="text-xs font-bold text-enterprise-success">+1 added</span>
      </m.div>
    </div>
  )
}

/* ── Shopper: cart ─────────────────────────────────────────────────────── */
export function CartScreen({ play = true }: { play?: boolean }) {
  const total = useCount(TOTAL, play)
  return (
    <div className="flex h-full flex-col bg-slate-50">
      <AppBar title="Your cart" back />
      <ul className="px-4 pt-4 space-y-2">
        {SAMPLE.cart.map((it, i) => (
          <m.li
            key={it.name}
            className="rounded-xl bg-white border border-gray-200 p-3 flex justify-between gap-2"
            initial={play ? { opacity: 0, x: -16 } : false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: dur.base, ease: ease.out, delay: play ? 0.2 + i * 0.12 : 0 }}
          >
            <div>
              <p className="text-sm font-semibold text-gray-900">{it.name}</p>
              <p className="text-xs text-ink-muted">Size {it.size} · Qty 1</p>
            </div>
            <span className="text-sm font-semibold text-gray-900">{formatINR(it.price)}</span>
          </m.li>
        ))}
      </ul>
      <div className="mt-auto mb-10 mx-4 rounded-xl bg-white border border-gray-200 p-4">
        <div className="flex justify-between text-sm">
          <span className="text-ink-body">Total</span>
          <span className="font-bold text-gray-900 tabular-nums">{total}</span>
        </div>
        <div className="mt-3 rounded-lg bg-enterprise-action py-2.5 text-center text-sm font-semibold text-white">Checkout</div>
      </div>
    </div>
  )
}

/* ── Shopper: payment sheet (generic, no provider branding) ────────────── */
export function PaymentSheetScreen({ play = true }: { play?: boolean }) {
  return (
    <div className="relative flex h-full flex-col bg-slate-200">
      <AppBar title="Checkout" back />
      <m.div
        className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white px-5 pt-5 pb-12"
        initial={play ? { y: '100%' } : false}
        animate={{ y: 0 }}
        transition={{ duration: dur.slow, ease: ease.out, delay: play ? 0.2 : 0 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Pay {SAMPLE.store}</p>
        <p className="mt-1 text-2xl font-black text-gray-900">{formatINR(TOTAL)}</p>
        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-3 rounded-xl border-2 border-enterprise-action p-3">
            <span className="text-sm font-semibold text-gray-900">UPI</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-gray-200 p-3">
            <span className="text-sm text-ink-body">Card</span>
          </div>
        </div>
        <m.div
          className="mt-4 rounded-lg bg-enterprise-action py-2.5 text-center text-sm font-semibold text-white"
          initial={false}
          animate={play ? { scale: [1, 0.97, 1] } : { scale: 1 }}
          transition={{ duration: 0.3, delay: play ? 1.2 : 0 }}
        >
          Pay {formatINR(TOTAL)}
        </m.div>
        <m.div
          className="absolute inset-0 rounded-t-3xl bg-white flex flex-col items-center justify-center"
          initial={play ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: dur.base, delay: play ? 1.6 : 0 }}
        >
          <svg viewBox="0 0 52 52" className="w-16 h-16">
            <circle cx="26" cy="26" r="24" className="fill-emerald-50 stroke-enterprise-success" strokeWidth="2" />
            <m.path
              d="M15 27l7 7 15-16"
              fill="none"
              className="stroke-enterprise-success"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={play ? { pathLength: 0 } : false}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: ease.out, delay: play ? 1.9 : 0 }}
            />
          </svg>
          <p className="mt-3 text-sm font-bold text-gray-900">Payment confirmed</p>
          <p className="text-xs text-ink-muted">{formatINR(TOTAL)} · Order #1042</p>
        </m.div>
      </m.div>
    </div>
  )
}

/* ── Shopper: paid + exit pass ─────────────────────────────────────────── */
export function ExitPassScreen({ play = true }: { play?: boolean }) {
  return (
    <div className="flex h-full flex-col items-center bg-enterprise-surface text-white px-5 pt-10">
      <span className="flex items-center gap-1 rounded-full bg-enterprise-live px-3 py-1 text-xs font-bold text-enterprise-navy">
        <Check className="w-3.5 h-3.5" strokeWidth={3} /> Paid
      </span>
      <p className="mt-3 text-lg font-extrabold">Exit pass</p>
      <p className="text-xs text-enterprise-muted">Show this at the door</p>
      <m.div
        className="relative mt-4 w-44 overflow-hidden rounded-xl"
        initial={play ? { opacity: 0, scale: 0.96 } : false}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: dur.base, ease: ease.out, delay: play ? 0.2 : 0 }}
      >
        <Qr />
        {play && (
          <m.span
            className="absolute inset-x-0 h-8 bg-gradient-to-b from-transparent via-enterprise-link/40 to-transparent"
            initial={{ top: '-20%' }}
            animate={{ top: '110%' }}
            transition={{ duration: 0.9, ease: 'easeInOut', delay: 0.5 }}
          />
        )}
      </m.div>
      <p className="mt-4 grid grid-cols-3 gap-x-2 gap-y-1 font-mono text-sm tracking-wider">
        {SAMPLE.exitCode.map((g, i) => (
          <m.span
            key={g}
            initial={play ? { opacity: 0 } : false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.12, delay: play ? 0.9 + i * 0.04 * 4 : 0 }}
          >
            {g}
          </m.span>
        ))}
      </p>
      <p className="mt-2 text-xs text-enterprise-muted">Staff check it in one tap</p>
    </div>
  )
}

/* ── Staff: discount-limit request ─────────────────────────────────────── */
export function StaffDiscountRequestScreen() {
  const ex = APPROVAL_EXAMPLE
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Staff app · {ex.staff}</p>
      <p className="text-sm font-bold text-gray-900">Ask for a discount limit</p>
      <div>
        <div className="flex justify-between text-xs text-ink-body"><span>Up to</span><span className="font-bold text-gray-900">{ex.requestedPct}%</span></div>
        <div className="mt-1 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full bg-enterprise-amber" style={{ width: `${ex.requestedPct * 2}%` }} />
        </div>
      </div>
      <p className="rounded-lg bg-slate-50 border border-gray-200 px-3 py-2 text-sm text-ink-body">Reason: {ex.reason}</p>
      <div className="rounded-lg bg-enterprise-amber py-2 text-center text-sm font-semibold text-white">Send to owner</div>
    </div>
  )
}

/* ── Owner: approval (limit animates requested → approved) ─────────────── */
export function OwnerApprovalScreen({ pct }: { pct: number }) {
  const ex = APPROVAL_EXAMPLE
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Owner dashboard</p>
      <p className="text-sm text-ink-body"><span className="font-bold text-gray-900">{ex.staff}</span> asks for up to {ex.requestedPct}% · “{ex.reason}”</p>
      <div>
        <div className="flex justify-between text-xs text-ink-body"><span>Approve up to</span><span className="font-bold text-gray-900 tabular-nums">{Math.round(pct)}%</span></div>
        <div className="mt-1 h-2 rounded-full bg-gray-200 overflow-hidden">
          <div className="h-full w-full origin-left bg-enterprise-action" style={{ transform: `scaleX(${pct / 50})` }} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-gray-300 py-2 text-center text-sm font-semibold text-ink-body">Decline</div>
        <div className="rounded-lg bg-enterprise-action py-2 text-center text-sm font-semibold text-white">Approve {ex.approvedPct}%</div>
      </div>
    </div>
  )
}

/* ── Owner: discount log (append-only) ─────────────────────────────────── */
export function DiscountLogScreen({ showNew }: { showNew: boolean }) {
  const ex = APPROVAL_EXAMPLE
  const row = (r: { staff: string; bill: string; pct: number; original: number; final: number; time: string }) => (
    <>
      <span className="font-semibold text-gray-900">{r.staff}</span>
      <span>{r.bill} · {r.pct}%</span>
      <span className="col-span-2 flex items-center justify-between">
        <span>{formatINR(r.original)} → {formatINR(r.final)}</span>
        <span className="flex items-center gap-1 text-ink-body">{r.time}<Lock className="w-3 h-3" /></span>
      </span>
    </>
  )
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-ink-muted">Discount log</p>
      <div className="mt-2 divide-y divide-gray-200 text-xs text-ink-body">
        {showNew && (
          <m.div
            className="grid grid-cols-2 gap-x-2 gap-y-0.5 py-2 bg-blue-50 -mx-2 px-2 rounded overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: dur.base, ease: ease.out }}
          >
            {row({ staff: ex.staff, bill: ex.bill, pct: ex.approvedPct, original: ex.original, final: ex.final, time: ex.time })}
          </m.div>
        )}
        {ex.earlier.map((r) => (
          <div key={r.bill} className="grid grid-cols-2 gap-x-2 gap-y-0.5 py-2">{row(r)}</div>
        ))}
      </div>
    </div>
  )
}

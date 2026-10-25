'use client'

// Animated half of concept B. Auto-plays once when in view (queue → spread),
// then offers "Replay". The role="switch" toggle lets the user flip states.
// Same outer height as the static panels (SCENE_BOX), so swapping in is CLS-free.

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import QueueArt, { SCENE_BOX } from './QueueArt'
import { QUEUE_SCENE } from '@/lib/site'

export default function QueueSceneMotion() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [withDQ, setWithDQ] = useState(false)
  const [played, setPlayed] = useState(false)

  useEffect(() => {
    if (!inView || played) return
    const t = setTimeout(() => { setWithDQ(true); setPlayed(true) }, 600)
    return () => clearTimeout(t)
  }, [inView, played])

  function replay() {
    setWithDQ(false)
    setTimeout(() => setWithDQ(true), 900)
  }

  return (
    <div ref={ref} className={`${SCENE_BOX} flex flex-col rounded-xl border border-gray-200 bg-slate-50 p-3`}>
      <div className="flex items-center justify-between gap-2">
        <button
          type="button"
          role="switch"
          aria-checked={withDQ}
          onClick={() => setWithDQ((v) => !v)}
          className="inline-flex items-center gap-2 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-enterprise-action"
        >
          <span className={`text-xs font-semibold uppercase tracking-widest ${withDQ ? 'text-ink-muted' : 'text-gray-900'}`}>{QUEUE_SCENE.without}</span>
          <span className={`relative h-6 w-11 rounded-full transition-colors ${withDQ ? 'bg-enterprise-action' : 'bg-gray-400'}`} aria-hidden="true">
            <span className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${withDQ ? 'translate-x-5' : ''}`} />
          </span>
          <span className={`text-xs font-semibold uppercase tracking-widest ${withDQ ? 'text-gray-900' : 'text-ink-muted'}`}>{QUEUE_SCENE.with}</span>
        </button>
        <button
          type="button"
          onClick={replay}
          className="rounded-lg border border-gray-300 px-2.5 py-1 text-xs font-semibold text-ink-body hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-enterprise-action"
        >
          <span aria-hidden="true">↻</span> Replay
        </button>
      </div>
      <div role="img" aria-label={withDQ ? QUEUE_SCENE.describeWith : QUEUE_SCENE.describeWithout} className="flex-1 min-h-0 mt-2">
        <QueueArt withDQ={withDQ} />
      </div>
    </div>
  )
}

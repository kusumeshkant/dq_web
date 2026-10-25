// Concept B: "Without DQ / With DQ". Server-rendered static end state (both
// panels side by side) that no-JS and reduced-motion visitors keep. After page
// load, LazyQueueScene swaps in the animated single scene at the same height.
import QueueArt, { SCENE_BOX } from './QueueArt'
import LazyQueueScene from './LazyQueueScene'
import { QUEUE_SCENE } from '@/lib/site'

function StaticPanels() {
  return (
    <div className={`${SCENE_BOX} grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-3`}>
      {[false, true].map((withDQ) => (
        <figure key={String(withDQ)} className="flex flex-col rounded-xl border border-gray-200 bg-slate-50 p-3">
          <figcaption className="text-xs font-semibold uppercase tracking-widest text-ink-body">
            {withDQ ? QUEUE_SCENE.with : QUEUE_SCENE.without}
          </figcaption>
          <div role="img" aria-label={withDQ ? QUEUE_SCENE.describeWith : QUEUE_SCENE.describeWithout} className="flex-1 min-h-0 mt-2">
            <QueueArt withDQ={withDQ} />
          </div>
        </figure>
      ))}
    </div>
  )
}

export default function QueueScene() {
  return (
    <div>
      <LazyQueueScene>
        <StaticPanels />
      </LazyQueueScene>
      <p className="mt-3 text-sm text-ink-muted">
        {QUEUE_SCENE.caption} <span className="font-semibold">{QUEUE_SCENE.label}.</span>
      </p>
    </div>
  )
}

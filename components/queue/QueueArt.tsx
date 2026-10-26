// Concept B artwork (no hooks: renders on the server for the static end
// state, and inside QueueSceneMotion for the animated one). Simple pictograms,
// no faces. Positions animate with CSS transform transitions.

/** Shared outer height of the static and animated scene (no CLS on swap). */
export const SCENE_BOX = 'h-[460px] sm:h-[300px]'

const VIEW = { w: 320, h: 200 }

// Shopper anchor points (feet), index-matched across both states.
const QUEUE = [
  { x: 238, y: 150 }, { x: 214, y: 150 }, { x: 190, y: 150 }, { x: 166, y: 150 },
  { x: 142, y: 150 }, { x: 118, y: 150 }, { x: 94,  y: 150 }, { x: 70,  y: 150 },
]
// With DQ: seven at the racks with phones; index 0 still uses the counter.
const SPREAD = [
  { x: 238, y: 150 }, { x: 40,  y: 96 },  { x: 74,  y: 168 }, { x: 118, y: 88 },
  { x: 152, y: 164 }, { x: 190, y: 92 },  { x: 34,  y: 170 }, { x: 112, y: 132 },
]

function Shopper({ x, y, phone, delay }: { x: number; y: number; phone: boolean; delay: number }) {
  return (
    <g
      style={{ transform: `translate(${x}px, ${y}px)`, transition: `transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s` }}
      className="motion-reduce:!transition-none"
    >
      <circle cx="0" cy="-30" r="6" className="fill-enterprise-elevated" />
      <rect x="-7" y="-22" width="14" height="22" rx="6" className="fill-enterprise-elevated" />
      <rect
        x="8" y="-20" width="6" height="10" rx="1.5"
        className="fill-enterprise-action"
        style={{ opacity: phone ? 1 : 0, transition: `opacity 0.3s ease ${delay + 0.5}s` }}
      />
    </g>
  )
}

export default function QueueArt({ withDQ, className = '' }: { withDQ: boolean; className?: string }) {
  const points = withDQ ? SPREAD : QUEUE
  return (
    <svg viewBox={`0 0 ${VIEW.w} ${VIEW.h}`} className={`block w-full h-full ${className}`} aria-hidden="true">
      {/* racks */}
      <rect x="18"  y="40" width="44" height="8" rx="2" className="fill-gray-300" />
      <rect x="96"  y="40" width="44" height="8" rx="2" className="fill-gray-300" />
      <rect x="170" y="40" width="44" height="8" rx="2" className="fill-gray-300" />
      {[24, 34, 44, 102, 112, 122, 176, 186, 196].map((x) => (
        <rect key={x} x={x} y="48" width="6" height="18" rx="2" className="fill-gray-200" />
      ))}
      {/* billing counter + staff */}
      <rect x="258" y="112" width="52" height="40" rx="4" className="fill-enterprise-navy" />
      <circle cx="284" cy="92" r="6" className="fill-enterprise-amber" />
      <rect x="277" y="99" width="14" height="14" rx="5" className="fill-enterprise-amber" />
      {/* floor */}
      <line x1="10" y1="178" x2="310" y2="178" className="stroke-gray-200" strokeWidth="2" />
      {points.map((p, i) => (
        <Shopper key={i} x={p.x} y={p.y} phone={withDQ && i !== 0} delay={i * 0.07} />
      ))}
    </svg>
  )
}

'use client'

import { WHATSAPP_NUMBER } from '@/lib/constants'

const WA_MESSAGE = encodeURIComponent(
  "Hi! I visited dqstore.in and I'm interested in DQ for my store. Can you tell me more?"
)

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 p-[5px] rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
      style={{
        background: 'rgba(255,255,255,0.10)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(255,255,255,0.40)',
        boxShadow: `
          inset 0 1.5px 0 rgba(255,255,255,0.60),
          inset 0 -1px 0 rgba(0,0,0,0.10),
          0 10px 40px rgba(37,211,102,0.36),
          0 4px 16px rgba(0,0,0,0.22),
          0 1px 0 rgba(255,255,255,0.50)
        `,
      }}
    >
      {/* ── Inner body — the solid colored pill ── */}
      <div
        className="relative flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 rounded-full overflow-hidden text-white"
        style={{
          background: 'linear-gradient(155deg, #32e676 0%, #25D366 50%, #1aaf52 100%)',
          boxShadow: `
            inset 0 -2px 6px rgba(0,0,0,0.22),
            inset 0 1px 0 rgba(255,255,255,0.28)
          `,
        }}
      >
        {/* Specular highlight — light hitting top-left of pill */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              'linear-gradient(140deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.06) 38%, transparent 65%)',
          }}
        />

        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative w-5 h-5 flex-shrink-0"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.523 5.837L.057 23.082a.75.75 0 0 0 .921.921l5.245-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.51-5.17-1.399l-.37-.219-3.112.87.87-3.112-.219-.37A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>

        <span className="relative text-sm font-semibold tracking-tight">Chat with us</span>
      </div>
    </a>
  )
}

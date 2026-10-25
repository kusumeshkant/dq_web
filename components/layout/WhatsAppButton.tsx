import { WHATSAPP_NUMBER } from '@/lib/constants'
import WhatsAppIcon from './WhatsAppIcon'

export const WA_MESSAGE = encodeURIComponent(
  "Hi! I visited dqstore.in and I'm interested in DQ for my store. Can you tell me more?"
)

export const WA_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`

/** Desktop only — on mobile WhatsApp lives inside MobileCtaBar. */
export default function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp" className="hidden lg:block">
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 pl-4 pr-5 py-3 rounded-full bg-white border border-gray-200 shadow-[0_8px_32px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="w-5 h-5 flex-shrink-0 text-whatsapp-brand" />
        <span className="text-sm font-semibold tracking-tight text-whatsapp-deep">
          Chat with us<span className="sr-only"> on WhatsApp</span>
        </span>
      </a>
    </aside>
  )
}

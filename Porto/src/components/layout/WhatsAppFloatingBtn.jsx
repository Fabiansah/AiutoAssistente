import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, waTemplates } from '../../utils/whatsapp';

export default function WhatsAppFloatingBtn() {
  return (
    <div className="fixed bottom-7 right-7 z-50 pointer-events-auto">
      <a
        href={createWhatsAppUrl(waTemplates.generalInquiry())}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hubungi WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#278349] text-white rounded-full shadow-lg shadow-emerald-600/30 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all duration-300 ease-out group overflow-hidden border border-white/30"
      >
        {/* Efek Kilau Cahaya Halus */}
        <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-beam pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white drop-shadow-sm group-hover:rotate-12 transition-transform duration-300 ease-out" />
      </a>
    </div>
  );
}
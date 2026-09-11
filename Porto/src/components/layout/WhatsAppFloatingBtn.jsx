import { MessageCircle } from 'lucide-react';
import { createWhatsAppUrl, waTemplates } from '../../utils/whatsapp';

export default function WhatsAppFloatingBtn() {
  return (
    <a
      href={createWhatsAppUrl(waTemplates.generalInquiry())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hubungi WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] hover:scale-105 transition-all duration-200 group"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="text-sm font-semibold pr-1 hidden sm:inline-block">
        Konsultasi Sekarang
      </span>
    </a>
  );
}
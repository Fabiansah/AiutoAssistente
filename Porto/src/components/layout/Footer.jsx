import { ArrowRight, MapPin, Phone, Mail, Globe, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';
import { createWhatsAppUrl, waTemplates } from '../../utils/whatsapp';

// SVG Icon Instagram mandiri (bebas dependensi eksternal)
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const waUrl = waTemplates?.generalInquiry 
    ? createWhatsAppUrl(waTemplates.generalInquiry()) 
    : "#";

  return (
    <footer className="bg-[#0b1329] text-white overflow-hidden">
      {/* 1. SECTION CALL TO ACTION (CTA) BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 border-b border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Siap Mengubah <span className="text-emerald-400">Masa Depan Bisnis Anda?</span>
            </h2>
          </div>

          <div className="shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00a878] hover:bg-[#008f66] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg shadow-emerald-900/40 hover:scale-105"
            >
              Mulai Konsultasi Gratis
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>

      {/* 2. FOOTER CONTENT UTAMA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Deskripsi */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
              Aiuto<span className="text-emerald-400">Assistente</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Partner digital terpercaya untuk Bisnis Indonesia. Kami tidak sekadar membuat website, kami membangun solusi untuk mempercepat pertumbuhan bisnis Anda.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={contactInfo?.socials?.instagram || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-emerald-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-emerald-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-slate-800/80 hover:bg-emerald-600 flex items-center justify-center transition-colors text-slate-300 hover:text-white"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigasi Layanan */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Layanan Kami</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Website Landing Page</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Aplikasi Web & Sistem</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">Otomasi Pesan & Bot</a></li>
              <li><a href="#layanan" className="hover:text-emerald-400 transition-colors">IT Support & Cloud Hosting</a></li>
            </ul>
          </div>

          {/* Navigasi Perusahaan */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-base font-bold text-white tracking-wide">Perusahaan</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#beranda" className="hover:text-emerald-400 transition-colors">Beranda</a></li>
              <li><a href="#proses" className="hover:text-emerald-400 transition-colors">Alur Kerja</a></li>
              <li><a href="#portofolio" className="hover:text-emerald-400 transition-colors">Portofolio</a></li>
              <li><a href="#kontak" className="hover:text-emerald-400 transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Info Kontak */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-base font-bold text-white tracking-wide">Hubungi Kami</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{contactInfo?.address || "Madiun, Jawa Timur"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{contactInfo?.displayPhone || "+62 857-5566-3606"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{contactInfo?.email || "kontak@domain.com"}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {currentYear} {contactInfo?.brandName || "AiutoAssistente"}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
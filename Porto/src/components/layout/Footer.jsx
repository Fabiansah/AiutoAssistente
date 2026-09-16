import { ArrowRight, MapPin, Phone, Mail, Globe, MessageCircle, Sparkles, Send } from 'lucide-react';
import { contactInfo } from '../../data/contactInfo';
import { createWhatsAppUrl, waTemplates } from '../../utils/whatsapp';

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
    <footer className="relative bg-[#070b19] text-white overflow-hidden pt-20 pb-12 border-t border-slate-800/80">
      
      {/* Background Ambient Glow & Subtle Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-linear-to-b from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#34d399 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. SECTION CALL TO ACTION (CTA) BANNER UTAMA */}
        <div className="relative rounded-3xl bg-linear-to-r from-slate-900 via-[#0d1633] to-slate-900 border border-slate-800 p-8 sm:p-12 mb-20 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Siap Mengubah <span className="bg-linear-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Masa Depan Bisnis Anda?</span>
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed">
                Mari diskusikan kebutuhan sistem digital atau aplikasi impian Anda bersama tim profesional kami sekarang juga.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-600 text-white font-bold px-8 py-4 rounded-2xl text-sm sm:text-base transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span>Mulai Konsultasi Gratis</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. FOOTER GRID UTAMA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-slate-800/80">
          
          {/* Brand & Deskripsi */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
              <span>Aiuto</span>
              <span className="bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Assistente</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Partner digital terpercaya untuk akselerasi bisnis Anda. Kami membangun sistem web, aplikasi, dan otomasi berperforma tinggi.
            </p>

            {/* Social Icons Modern */}
            <div className="flex items-center gap-3 pt-1">
              <a 
                href={contactInfo?.socials?.instagram || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white shadow-sm"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a 
                href={waUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-emerald-600 flex items-center justify-center transition-all duration-300 text-slate-300 hover:text-white shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigasi Layanan */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Layanan Kami</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#layanan" className="hover:text-emerald-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Landing Page</a></li>
              <li><a href="#layanan" className="hover:text-emerald-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Aplikasi Web</a></li>
              <li><a href="#layanan" className="hover:text-emerald-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Aplikasi Mobile (Android/iOS)</a></li>
              <li><a href="#layanan" className="hover:text-emerald-300 transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />IT Support</a></li>
            </ul>
          </div>

          {/* Navigasi Perusahaan */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Navigasi Utama</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#beranda" className="hover:text-emerald-300 transition-colors">Beranda</a></li>
              <li><a href="#proses" className="hover:text-emerald-300 transition-colors">Layanan</a></li>
              <li><a href="#portofolio" className="hover:text-emerald-300 transition-colors">Proses</a></li>
              <li><a href="#kontak" className="hover:text-emerald-300 transition-colors">Portofolio</a></li>
            </ul>
          </div>

          {/* Info Kontak Resmi */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">Informasi Kontak</h4>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{contactInfo?.address || "Madiun, Jawa Timur"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{contactInfo?.displayPhone || "+62 857-5566-3606"}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{contactInfo?.email || "kontak@domain.com"}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} {contactInfo?.brandName || "AiutoAssistente"}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">Secure WhatsApp Gateway</span>
            <span className="hover:text-slate-400 transition-colors">High Performance Tech</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
import { useState } from 'react';
import { Mail, MapPin, Clock, Send, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { contactInfo } from '../data/contactInfo';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Landing Page',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const formattedMessage = waTemplates.contactForm(formData);
      const waUrl = createWhatsAppUrl(formattedMessage);
      window.open(waUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 400);
  };

  const contactHighlights = [
    "Konsultasi sistem gratis",
    "Estimasi anggaran transparan & terukur",
    "Respon cepat dalam jam operasional"
  ];

  return (
    <section id="kontak" className="pt-10 pb-30 bg-[#fafcfb] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w[750px] h[750px] bg-linear-to-tr from-emerald-100/40 via-teal-100/30 to-cyan-100/30 rounded-full blur-[170px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION (BERADA DI TENGAH DENGAN RAPI) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Hubungi Kami untuk <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Solusi Digital</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* SISI INFORMASI KONTAK (KIRI) */}
          <div className="lg:col-span-5 relative bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden border border-slate-800">
            {/* Dekorasi Cahaya di dalam box */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-6 text-xs font-semibold tracking-wide text-emerald-400 bg-emerald-950/80 rounded-full border border-emerald-500/30">
                <span>Fast Respon</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Konsultasi Langsung</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Diskusikan spesifikasi teknis, kebutuhan web/mobile app, atau estimasi pengembangan bersama tim ahli kami.
              </p>

              {/* Detail Info Kontak */}
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Lokasi</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-2xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Jam Layanan</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">{contactInfo.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Highlights di Bawah Box */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 space-y-2.5">
              {contactHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FORMULIR INTERAKTIF (KANAN) */}
          <div className="lg:col-span-7 bg-white/95 backdrop-blur-2xl p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-950/5">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Nama Lengkap <span className="text-emerald-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="nama@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Pilihan Layanan / Kebutuhan
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="Landing Page">Landing Page</option>
                  <option value="Web App">Web App</option>
                  <option value="Mobile App">Mobile App (Android / iOS)</option>
                  <option value="IT Support">IT Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Detail Rencana Proyek
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Ceritakan gambaran singkat kebutuhan bisnis atau sistem yang ingin dibangun."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                variant="whatsapp" 
                className="relative overflow-hidden w-full py-4 px-6 rounded-2xl text-base font-bold text-white bg-emerald-600 hover:bg-emerald-600 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center cursor-pointer"
              >
                {/* Efek Kilau Cahaya Berjalan */}
                <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-beam pointer-events-none" />
                
                <span>Kirim Pesan via WhatsApp</span>
              </Button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
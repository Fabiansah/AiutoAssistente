import { useState } from 'react';
import { Mail, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { contactInfo } from '../data/contactInfo';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Pembuatan Website',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedMessage = waTemplates.contactForm(formData);
    const waUrl = createWhatsAppUrl(formattedMessage);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="kontak" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Hubungi Kami"
          title="Siap Mewujudkan Ide Digital Anda?"
          subtitle="Tinggalkan detail rencana Anda di bawah. Pesan akan langsung diteruskan ke chat WhatsApp kami."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
          {/* Sisi Informasi & Kontak */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between h-full">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-xs font-semibold tracking-wide text-emerald-400 bg-emerald-950/50 rounded-full border border-emerald-800/50">
                <MessageSquare className="w-3.5 h-3.5" /> Respon Cepat
              </span>
              <h3 className="text-2xl font-bold tracking-tight">Konsultasi Langsung</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Diskusikan estimasi anggaran, spesifikasi teknis, atau fitur yang ingin Anda buat bersama tim kami.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Lokasi</h4>
                    <p className="text-sm font-medium text-white mt-0.5">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Resmi</h4>
                    <p className="text-sm font-medium text-white mt-0.5">{contactInfo.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 mt-0.5 text-emerald-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Jam Layanan</h4>
                    <p className="text-sm font-medium text-white mt-0.5">{contactInfo.operatingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-800 text-xs text-slate-400">
              Biasanya membalas pesan dalam hitungan menit di jam operasional.
            </div>
          </div>

          {/* Formulir Card */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Nama Lengkap *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nama Anda"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Pilihan Kebutuhan</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                >
                  <option value="Pembuatan Website">Pembuatan Landing Page / Web Profile</option>
                  <option value="Aplikasi Web & Sistem">Aplikasi Web & Sistem Kustom</option>
                  <option value="Otomasi Pesan & Bot">Integrasi Bot WhatsApp / Otomasi</option>
                  <option value="Konsultasi & IT Support">Konsultasi IT & Setup Server</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Detail Rencana Proyek *</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="Ceritakan gambaran singkat kebutuhan bisnis atau sistem yang ingin dibangun..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <Button type="submit" variant="whatsapp" className="w-full py-4 rounded-xl text-base font-bold shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30">
                <Send className="w-4 h-4 mr-2" />
                Hubungi Kami via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
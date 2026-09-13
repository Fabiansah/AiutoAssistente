import { Check, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Services() {
  const servicesData = [
    {
      id: 'landing-page',
      title: 'Landing Page',
      badge: null,
      description: 'Solusi website kilat 2-3 halaman yang dirancang khusus untuk konversi penjualan, profil bisnis, atau promosi produk secara profesional.',
      features: [
        'Desain Modern & Responsif',
        'Struktur SEO Friendly',
        'Integrasi Tombol WhatsApp',
        'Kecepatan Akses Tinggi'
      ]
    },
    {
      id: 'web-app',
      title: 'Web App',
      badge: 'POPULER',
      description: 'Pengembangan aplikasi web kustom berbasis sistem manajemen, dashboard operasional, atau portal bisnis modular yang scalable.',
      features: [
        'Sistem Database & Autentikasi',
        'Fitur Custom Sesuai Request',
        'Arsitektur Cepat & Aman',
        'Garansi Pemeliharaan Sistem'
      ]
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      badge: null,
      description: 'Pembuatan aplikasi seluler lintas platform berperforma tinggi untuk memperluas jangkauan layanan digital bisnis Anda.',
      features: [
        'Cross-Platform (Android & iOS)',
        'UI/UX Interaktif & Intuitif',
        'Integrasi API & Notifikasi',
        'Deployment Play Store / App Store'
      ]
    },
    {
      id: 'it-support',
      title: 'IT Support',
      badge: null,
      description: 'Layanan pemeliharaan teknis, penataan infrastruktur server, cloud deployment, dan troubleshooting perangkat operasional kantor.',
      features: [
        'Setup & Manajemen Server/VPS',
        'Konfigurasi Jaringan & Domain',
        'Optimalisasi Keamanan Sistem',
        'Pendampingan & Pemeliharaan'
      ]
    }
  ];

  return (
    <section id="layanan" className="py-28 bg-[#fafcfb] relative overflow-hidden">
      {/* Background Ambient Glow Berjalan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w[700px] h[700px] bg-linear-to-tr from-emerald-100/50 via-teal-100/30 to-cyan-100/40 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Layanan Unggulan"
          title="Solusi Terarah untuk Pertumbuhan Bisnis"
          subtitle="Pilih paket pengembangan yang paling selaras dengan target digital usaha Anda saat ini."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch pt-8">
          {servicesData.map((service) => {
            const isFeatured = Boolean(service.badge);

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col p-7 sm:p-8 rounded-3xl transition-all duration-500 ease-out transform hover:-translate-y-3 ${
                  isFeatured 
                    ? 'bg-slate-900 text-white shadow-2xl shadow-emerald-950/30 border-2 border-emerald-500/50 lg:-translate-y-4' 
                    : 'bg-white/90 backdrop-blur-2xl text-slate-900 border border-slate-200/80 hover:border-emerald-500/60 hover:shadow-2xl hover:shadow-emerald-950/10'
                }`}
              >
                {/* Efek Ambient Glow Dinamis di Belakang Kartu Saat Hover */}
                <div className={`absolute -inset-1 rounded-3xl bg-linear-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${isFeatured ? 'opacity-75' : ''}`} />

                {/* Badge Tag dengan Efek Berputar Halus */}
                {isFeatured && (
                  <div className="inline-flex items-center gap-1.5 self-start px-3.5 py-1 mb-6 text-xs font-bold text-slate-950 bg-emerald-400 rounded-full uppercase tracking-wider shadow-lg shadow-emerald-400/30 animate-bounce">
                    <Sparkles className="w-3.5 h-3.5 text-slate-950" />
                    <span>{service.badge}</span>
                  </div>
                )}

                <h3 className={`text-xl sm:text-2xl font-black tracking-tight mb-3 transition-colors duration-300 ${isFeatured ? 'text-white group-hover:text-emerald-300' : 'text-slate-900 group-hover:text-emerald-700'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 grow ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                {/* Fitur Card dengan Efek Interaktif Item */}
                <div className={`border-t pt-5 mb-6 sm:mb-8 ${isFeatured ? 'border-slate-800' : 'border-slate-100'}`}>
                  <p className={`text-[11px] font-bold uppercase tracking-wider mb-3.5 ${isFeatured ? 'text-emerald-400' : 'text-slate-400'}`}>
                    Sudah Termasuk:
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm group/item">
                        <div className={`p-1 rounded-full shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-125 group-hover/item:rotate-12 ${
                          isFeatured ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover/item:bg-emerald-600 group-hover/item:text-white'
                        }`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={`transition-colors leading-tight ${isFeatured ? 'text-slate-200 group-hover/item:text-white' : 'text-slate-700 group-hover/item:text-slate-950 font-medium'}`}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button dengan Animasi Shimmer & Hover Membal */}
                <Button
                  variant={isFeatured ? 'whatsapp' : 'outline'}
                  href={createWhatsAppUrl(waTemplates.serviceOrder(service.title))}
                  isExternal
                  className={`relative overflow-hidden w-full justify-center py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 ${
                    isFeatured 
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/60 hover:scale-105 active:scale-95' 
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-emerald-600 hover:border-emerald-600 hover:text-white shadow-xs hover:shadow-lg hover:scale-105 active:scale-95'
                  }`}
                >
                  {/* Efek Kilau Cahaya Berjalan di Tombol */}
                  <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-beam pointer-events-none" />

                  <MessageCircle className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300 shrink-0" />
                  <span>Konsultasi Paket</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
import { Check, MessageCircle, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { servicesData } from '../data/servicesData';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Layanan Unggulan"
          title="Solusi Terarah untuk Pertumbuhan Bisnis"
          subtitle="Pilih paket pengembangan yang paling selaras dengan target digital usaha Anda saat ini."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {servicesData.map((service) => {
            const isFeatured = Boolean(service.badge);

            return (
              <div
                key={service.id}
                className={`group relative flex flex-col p-8 sm:p-9 rounded-3xl transition-all duration-300 ${
                  isFeatured 
                    ? 'bg-slate-900 text-white shadow-xl shadow-slate-900/10 border border-slate-800 md:-translate-y-2' 
                    : 'bg-white text-slate-900 border border-slate-200/90 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-100 hover:-translate-y-1'
                }`}
              >
                {/* Badge Tag */}
                {isFeatured && (
                  <div className="inline-flex self-start px-3.5 py-1 mb-6 text-xs font-bold text-emerald-950 bg-emerald-400 rounded-full uppercase tracking-wider">
                    {service.badge}
                  </div>
                )}

                <h3 className={`text-2xl font-bold tracking-tight mb-3 ${isFeatured ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                
                <p className={`text-sm leading-relaxed mb-8 grow ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                  {service.description}
                </p>

                {/* Fitur Card */}
                <div className={`border-t pt-6 mb-8 ${isFeatured ? 'border-slate-800' : 'border-slate-100'}`}>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${isFeatured ? 'text-slate-400' : 'text-slate-400'}`}>
                    Sudah Termasuk:
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm">
                        <div className={`p-0.5 rounded-full shrink-0 ${isFeatured ? 'bg-emerald-500/20 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <Button
                  variant={isFeatured ? 'whatsapp' : 'outline'}
                  href={createWhatsAppUrl(waTemplates.serviceOrder(service.title))}
                  isExternal
                  className={`w-full justify-center py-3 rounded-xl font-semibold transition-all ${
                    !isFeatured ? 'group-hover:border-slate-900 group-hover:text-slate-900' : ''
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Konsultasi Paket
                  <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
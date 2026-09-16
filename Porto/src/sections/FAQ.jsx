import { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Berapa lama proses pembuatan landing page atau sistem web?",
      a: "Untuk landing page standar biasanya memakan waktu antara 3 hingga 7 hari kerja. Sedangkan untuk Web App atau sistem kustom skala menengah disesuaikan dengan kompleksitas fitur dan kesiapan materi dari Anda."
    },
    {
      q: "Apakah nanti bisa dibantu integrasikan langsung dengan WhatsApp?",
      a: "Tentu saja. Semua tombol Call-to-Action (CTA), formulir kontak, dan pemesanan layanan akan langsung kami rancang agar otomatis membuka pesan chat WhatsApp dengan format teks yang rapi dan terstruktur."
    },
    {
      q: "Apakah aplikasi web dan mobile sudah responsif di semua perangkat?",
      a: "Pasti! Kami menerapkan standar arsitektur Mobile-First Responsive, sehingga tata letak dan performa tetap optimal dan mulus diakses lewat smartphone, tablet, maupun desktop."
    },
    {
      q: "Bagaimana sistem garansi dan pemeliharaan (maintenance) setelah rilis?",
      a: "Setiap proyek dilengkapi garansi perbaikan bug dan pemeliharaan sistem. Untuk keberlanjutan jangka panjang, kami juga menyediakan opsi dukungan teknis berkala serta bantuan pengelolaan server/hosting."
    }
  ];

  return (
    <section id="faq" className="pt-10 pb-30 bg-white relative overflow-hidden">
      
      {/* Background Ambient Glow Halus */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -[700px] h[700px] bg-linear-to-tr from-emerald-100/40 via-teal-50/20 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION YANG LEBIH MENARIK & PROFESIONAL */}
        <div className="text-center max-w-2xl mx-auto mb-15">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-bold tracking-wide text-emerald-900 bg-emerald-50 border border-emerald-200/80 rounded-full shadow-xs">
            <span>FAQ & INFORMASI</span>
          </div>
        </div>

        {/* LIST ACCORDION FAQ */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border transition-all duration-500 ease-out overflow-hidden ${
                  isOpen 
                    ? 'bg-slate-900 text-white scale-[1.01]' 
                    : 'bg-[#fafcfb] text-slate-900 border-slate-200/90 hover:border-emerald-300 hover:bg-white hover:shadow-lg hover:shadow-emerald-950/5'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-10 py-6 text-left flex items-center justify-between gap-4 font-bold transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3.5 text-base sm:text-lg">
                    <div className={`w-9 h-9 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                    }`}>
                      <HelpCircle className="w-4 h-4" />
                    </div>
                    <span className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                  </span>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-500 ease-out ${
                    isOpen ? 'bg-slate-800 text-emerald-400 rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth Accordion Expansion */}
                <div 
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0 pb-0'
                  }`}
                >
                  <div className="overflow-hidden px-7">
                    <div className="pt-2 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/80">
                      <p className="pl-12 pt-3">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
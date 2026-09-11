import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Berapa lama proses pembuatan landing page atau website?",
      a: "Untuk landing page standar biasanya memakan waktu antara 3 hingga 7 hari kerja tergantung kelengkapan materi seperti foto dan teks dari Anda."
    },
    {
      q: "Apakah nanti bisa dibantu integrasikan langsung dengan nomor WhatsApp saya?",
      a: "Tentu saja. Semua tombol Call-to-Action dan formulir konsultasi akan langsung kami rancang agar otomatis membuka pesan chat WhatsApp dengan format teks yang rapi."
    },
    {
      q: "Apakah websitenya sudah bisa dibuka lancar lewat HP / smartphone?",
      a: "Pasti! Kami memprioritaskan prinsip Mobile-First Responsive, sehingga tampilan otomatis menyesuaikan layar smartphone, tablet, maupun laptop dengan kecepatan loading tinggi."
    },
    {
      q: "Apakah ada biaya bulanan atau tahunan?",
      a: "Biaya pembuatan sistem di awal adalah satu kali bayar. Anda hanya perlu memperpanjang sewa domain (.com/.id) dan server/hosting setiap tahun sesuai paket yang Anda pilih."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Pertanyaan Umum"
          title="Hal yang Sering Ditanyakan"
          subtitle="Jawaban ringkas seputar proses kerja sama, durasi pengerjaan, dan spesifikasi teknis website."
        />

        <div className="space-y-4 mt-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-emerald-600 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
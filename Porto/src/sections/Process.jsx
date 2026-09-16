import { useState, useEffect } from 'react';
import { 
  FileSearch, 
  LayoutTemplate, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Terminal as TerminalIcon
} from 'lucide-react';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

const workflowSteps = [
  {
    step: '01',
    phase: 'Discovery & Requirement Analysis',
    tagline: 'Bedah Kebutuhan & Validasi Sistem',
    shortDesc: 'Menyelaraskan tujuan bisnis, ruang lingkup fitur, dan spesifikasi teknis.',
    description: 'Kami menganalisis target audiens, kebutuhan operasional, dan fitur inti proyek Anda. Pada tahap ini, kami menyusun dokumen spesifikasi fungsional (FSD) agar proyek berjalan tepat sasaran tanpa ada fitur yang terlewat.',
    duration: '1-2 Hari',
    icon: FileSearch,
    techStack: 'Scope Definition • System Requirements • Estimasi Timeline',
    terminalLog: 'ANALYTICS: Project requirements locked. Scope baseline established.',
    deliverables: ['Dokumen Spesifikasi Fungsional & Kebutuhan Fitur', 'Estimasi Jadwal & Tenggat Waktu (Timeline)', 'Rancangan Anggaran Biaya (RAB) Transparan']
  },
  {
    step: '02',
    phase: 'UI/UX Design & Prototyping',
    tagline: 'Perancangan Antarmuka & Alur Pengguna',
    shortDesc: 'Membuat desain visual dan kerangka interaktif sebelum tahap koding.',
    description: 'Membangun wireframe dan desain antarmuka (UI) berstandar modern. Anda dapat mereview langsung prototipe interaktif untuk memastikan kenyamanan pengguna (UX) dan kesesuaian estetika merek.',
    duration: '2-3 Hari',
    icon: LayoutTemplate,
    techStack: 'Wireframing • High-Fidelity UI • Interactive Prototype',
    terminalLog: 'DESIGN: UI components validated. Client sign-off secured.',
    deliverables: ['Prototipe Desain Interaktif (Figma)', 'Sistem Desain & Panduan Tipografi/Warna', 'Validasi Alur Konversi & Tombol Aksi (CTA)']
  },
  {
    step: '03',
    phase: 'Development & Integration',
    tagline: 'Implementasi Kode & Integrasi API',
    shortDesc: 'Penulisan kode program berstandar tinggi serta pengujian performa.',
    description: 'Tahap eksekusi teknis menggunakan teknologi web/mobile modern. Kami mengintegrasikan database, sistem keamanan, serta otomatisasi hook WhatsApp agar data prospek langsung masuk ke sistem Anda.',
    duration: '3-6 Hari',
    icon: Cpu,
    techStack: 'Clean Architecture • Secure REST API • WhatsApp Gateway',
    terminalLog: 'ENGINE: Build compiled. Zero vulnerability warnings detected.',
    deliverables: ['Struktur Kode Modular & Bersih (Clean Code)', 'Integrasi Endpoint & Database Fungsional', 'Uji Coba Responsif Lintas Perangkat']
  },
  {
    step: '04',
    phase: 'Deployment & Handover',
    tagline: 'Peluncuran Produksi & Garansi',
    shortDesc: 'Menerbitkan aplikasi ke server publik dan pelatihan penggunaan.',
    description: 'Merilis sistem ke server produksi dengan optimasi kecepatan tinggi dan enkripsi SSL. Kami juga menyerahkan dokumentasi teknis serta memberikan masa garansi pemeliharaan pasca-rilis.',
    duration: 'Hari Peluncuran',
    icon: ShieldCheck,
    techStack: 'Cloud VPS/Edge CDN • SSL 256-bit • Post-Launch Support',
    terminalLog: 'DEPLOY: Production release active. DNS propagated successfully.',
    deliverables: ['Sistem Live di Domain Utama Klien', 'Panduan Pengoperasian & Akses Dashboard', 'Garansi Pemeliharaan & Bug Fixing Berkala']
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const activeData = workflowSteps[activeStep];

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 60);
    return () => clearTimeout(timer);
  }, []);

  const handleStepChange = (idx) => {
    if (idx === activeStep || isTransitioning) return;
    setIsTransitioning(true);
    setActiveStep(idx);
    
    // Durasi jeda halus untuk animasi pergantian panel
    setTimeout(() => {
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section 
      id="proses" 
      className="pt-10 pb-30 bg-white relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w[800px] h[500px] bg-linear-to-tr from-emerald-100/30 via-teal-50/20 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-15 transition-all duration-700 ease-out ${
            hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
<h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
  Alur Kerja <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Profesional &amp; Terukur</span>
</h2>  
        </div>

        {/* 4 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((stepData, idx) => {
            const isActive = activeStep === idx;
            const IconComponent = stepData.icon;

            return (
              <div
                key={stepData.step}
                onClick={() => handleStepChange(idx)}
                className={`group relative bg-[#fafcfb] rounded-3xl p-8 flex flex-col justify-between cursor-pointer transition-all  ease-out ${
                  isActive
                    ? 'bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-950/10 scale-[1.02]'
                    : 'border border-slate-200/80 hover:border-emerald-300 hover:bg-white hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-3xl font-black transition-colors ${
                      isActive ? 'text-emerald-600' : 'text-slate-300 group-hover:text-emerald-500'
                    }`}>
                      {stepData.step}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 rotate-3' 
                        : 'bg-slate-100 text-slate-700 group-hover:bg-emerald-50 group-hover:text-emerald-600'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                    {stepData.phase}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mt-1">
                    {stepData.tagline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stepData.shortDesc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 font-mono">
                    <span className={`w-2 h-2 rounded-full inline-block transition-colors ${
                      isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'
                    }`} />
                    {stepData.duration}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all ${
                    isActive 
                      ? 'bg-slate-900 text-white shadow-xs' 
                      : 'bg-slate-200/70 text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800'
                  }`}>
                    {isActive ? 'Aktif' : 'Detail'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* DETAIL INSPECTOR PANEL (DENGAN TINGGI MINIMUM AMAN & BEBAS SHIFT) */}
        <div className="mt-10 rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden min-h[420px] lg:min-h[380px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar Terminal */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800 relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-1 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                Fase Aktif: Tahap {activeData.step} — {activeData.phase}
              </span>
            </div>

            <div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-500/30 px-3.5 py-1 rounded-full shadow-xs">
                {activeData.techStack}
              </span>
            </div>
          </div>

          {/* Konten Utama Panel dengan Efek Transisi Halus (Tanpa Layout Shift) */}
          <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10 transition-all duration-200 ease-out ${
            isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
          }`}>
            
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="inline-block text-emerald-400 text-xs font-bold uppercase tracking-wider bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
                  Estimasi Pengerjaan: {activeData.duration}
                </div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeData.phase}
                </h4>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {activeData.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 flex items-center gap-3 shadow-inner">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0 animate-ping" />
                <span className="text-slate-300 font-mono">{activeData.terminalLog}</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/40 backdrop-blur-md rounded-2xl p-6 border border-slate-700/60 shadow-xl">
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Output &amp; Deliverables Nyata
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/30">
                  Standard Verified
                </span>
              </div>

              <div className="space-y-3.5">
                {activeData.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 group/item">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="group-hover/item:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <span className="text-xs text-slate-400">Ingin mendiskusikan alur proyek Anda?</span>
                <a
                  href={createWhatsAppUrl(waTemplates.generalInquiry())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 transition-colors group/link"
                >
                  <span>Konsultasi Sekarang</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
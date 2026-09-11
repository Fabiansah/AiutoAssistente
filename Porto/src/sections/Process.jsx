import { useState, useRef, useEffect } from 'react';
import { 
  Compass, 
  Layers, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  Clock, 
  ShieldCheck, 
  Cpu,
  ChevronRight
} from 'lucide-react';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

const workflowSteps = [
  {
    step: '01',
    phase: 'Discovery & Blueprint',
    tagline: 'Pemetaan Masalah & Solusi Arsitektur',
    shortDesc: 'Analisis bottleneck bisnis dan perancangan funnel konversi WhatsApp.',
    description: 'Kami menganalisis alur bisnis dan profil pelanggan Anda, merumuskan struktur funnel penawaran, dan menyusun arsitektur sistem web serta integrasi WhatsApp yang presisi.',
    duration: '1-2 Hari',
    icon: Compass,
    color: 'from-emerald-500 to-teal-400',
    techStack: 'Business Logic Audit • Funnel Map • Wireframe',
    terminalLog: 'SYSTEM: Funnel conversion blueprint generated. Ready for UI execution.',
    deliverables: ['Wireframe Interaktif & Struktur Halaman', 'Pemetaan CTA & Flow Pesan WhatsApp', 'Rencana Konversi & Analisis Kompetitor']
  },
  {
    step: '02',
    phase: 'High-Fidelity UI/UX',
    tagline: 'Desain Kredibel Berstandar Global',
    shortDesc: 'Antarmuka modern tech-startup dengan mikro-interaksi responsif.',
    description: 'Perancangan antarmuka visual bergaya modern tech-startup dengan rasio hierarki tipografi ketat, mikro-interaksi responsif, dan tata letak tanpa distraksi visual.',
    duration: '2-3 Hari',
    icon: Layers,
    color: 'from-teal-500 to-cyan-400',
    techStack: 'Design Tokens • Responsive Breakpoints • Micro-Interactions',
    terminalLog: 'SYSTEM: Design tokens compiled. Accessibility 100% compliant.',
    deliverables: ['Prototipe Interaktif Layar Penuh', 'Komponen UI Reusable & Design Tokens', 'Audit Aksesibilitas & Responsif Mobile']
  },
  {
    step: '03',
    phase: 'Clean Engineering',
    tagline: 'Koding Performa Tinggi & Otomasi',
    shortDesc: 'Arsitektur modern ultra cepat tanpa bloatware dengan webhook WhatsApp.',
    description: 'Pengembangan menggunakan arsitektur modern berkecepatan tinggi tanpa bloatware. Dilengkapi hook otomatisasi pesan WhatsApp langsung dan protokol keamanan.',
    duration: '3-5 Hari',
    icon: Code2,
    color: 'from-cyan-500 to-emerald-400',
    techStack: 'React / Vite • Tailwind CSS • WhatsApp Hook API',
    terminalLog: 'ENGINE: Bundle compiled (<45KB). Lighthouse audit score: 100/100.',
    deliverables: ['Skor Google Lighthouse 95+', 'Integrasi Endpoint WhatsApp Otomatis', 'Pengujian Zero-Bug Multi-Perangkat']
  },
  {
    step: '04',
    phase: 'Deployment & Scaling',
    tagline: 'Peluncuran & Pemeliharaan Garansi',
    shortDesc: 'Deploy ke server edge ultra cepat dengan SSL dan monitoring penuh.',
    description: 'Deploy ke server edge berkecepatan ultra, konfigurasi domain dengan enkripsi SSL 256-bit, serta garansi monitoring untuk memastikan kelancaran konversi.',
    duration: 'Hari Peluncuran',
    icon: Rocket,
    color: 'from-emerald-600 to-teal-500',
    techStack: 'Edge Server CDN • SSL 256-bit • 24/7 Monitoring Gateway',
    terminalLog: 'DEPLOY: Production deployment complete. DNS propagated globally.',
    deliverables: ['Production Edge Server Deploy', 'Garansi Pemeliharaan & Perbaikan Bug', 'Dokumentasi Operasional Bisnis']
  }
];

function StepCard({ data, index, activeStep, setActiveStep, hasMounted }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, offX: 0, offY: 0 });
  const [isPressing, setIsPressing] = useState(false);

  const isActive = activeStep === index;
  const IconComponent = data.icon;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = (x / rect.width - 0.5) * 2;
    const normY = (y / rect.height - 0.5) * 2;

    setTilt({
      rotX: -normY * 8,
      rotY: normX * 8,
      offX: normX * 3,
      offY: normY * 3,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotX: 0, rotY: 0, offX: 0, offY: 0 });
    setIsPressing(false);
  };

  // Stagger delay persis seperti Hero (index * 100ms)
  const delayClass = index === 0 ? 'delay-100' : index === 1 ? 'delay-200' : index === 2 ? 'delay-300' : 'delay-400';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={() => setIsPressing(true)}
      onMouseUp={() => setIsPressing(false)}
      onClick={() => setActiveStep(index)}
      className={`relative cursor-pointer select-none perspective-distant h-full transition-all duration-1000 ease-out ${delayClass} ${
        hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* BACKGROUND KOTAK 3D (ANTI-BLUR, 100% TAJAM) */}
      <div
        className={`absolute inset-0 rounded-3xl border transition-shadow duration-200 pointer-events-none ${
          isActive
            ? 'bg-white border-emerald-400 shadow-2xl shadow-emerald-950/15 ring-2 ring-emerald-500/25'
            : 'bg-white/95 border-emerald-100 hover:border-emerald-300 shadow-lg shadow-slate-200/60'
        }`}
        style={{
          transform: `rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) scale(${isPressing ? 0.97 : (isActive ? 1.02 : 1)})`,
          transformOrigin: 'center center',
          transition: isPressing ? 'transform 0.08s ease-out' : 'transform 0.15s ease-out',
        }}
      />

      {/* KONTEN TEKS 2D */}
      <div
        className="relative z-10 p-6 sm:p-7 flex flex-col justify-between h-full pointer-events-none"
        style={{
          transform: `translate(${tilt.offX}px, ${tilt.offY + (isPressing ? 2 : 0)}px)`,
          transition: isPressing ? 'transform 0.08s ease-out' : 'transform 0.15s ease-out',
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-4xl font-black text-slate-300">
                {data.step}
              </span>
              {isActive && (
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
              )}
            </div>

            <div 
              className={`w-12 h-12 rounded-2xl bg-linear-to-tr ${data.color} flex items-center justify-center text-white shadow-md shadow-emerald-600/30 transition-transform ${
                isPressing ? 'scale-90' : 'scale-100'
              }`}
              style={{
                transform: `translate(${tilt.offX * 0.8}px, ${tilt.offY * 0.8}px)`,
              }}
            >
              <IconComponent className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
            {data.phase}
          </h3>
          <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mt-1 font-mono">
            {data.tagline}
          </p>

          <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {data.shortDesc}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1.5 font-mono">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              {data.duration}
            </span>
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-colors ${
              isActive 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-slate-100 text-slate-600'
            }`}>
              {isActive ? 'Aktif' : 'Detail'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const activeData = workflowSteps[activeStep];

  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="proses" 
      className="relative py-24 sm:py-32 bg-[#fafcfb] overflow-hidden selection:bg-emerald-200"
    >
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#065f46 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 sm:w-200 h-140 sm:h-200 bg-linear-to-tr from-emerald-200/20 via-teal-100/15 to-cyan-100/20 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION (STAGGERED FADE-IN) */}
        <div 
          className={`max-w-3xl mx-auto text-center mb-14 sm:mb-18 transition-all duration-1000 ease-out ${
            hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Engineering Methodology
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Alur Eksekusi Terukur Menuju{' '}
            <span className="inline-block bg-linear-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent pb-1">
              Hasil Nyata
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tanpa birokrasi berbelit. Setiap tahapan dirancang modular, transparan, dan terfokus pada konversi penjualan bisnis Anda.
          </p>
        </div>

        {/* LASER BEAM PROGRESS CONNECTOR */}
        <div className="relative hidden lg:block mb-8 px-6">
          <div className="h-1 w-full bg-slate-200/70 rounded-full relative overflow-hidden">
            <div 
              className="absolute top-0 bottom-0 bg-linear-to-r from-emerald-500 via-teal-400 to-cyan-400 transition-all duration-500 ease-out shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              style={{
                width: `${((activeStep + 1) / workflowSteps.length) * 100}%`
              }}
            />
          </div>
        </div>

        {/* 4 CARDS GRID (STAGGERED ENTRANCE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {workflowSteps.map((stepData, idx) => (
            <StepCard
              key={stepData.step}
              data={stepData}
              index={idx}
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              hasMounted={hasMounted}
            />
          ))}
        </div>

        {/* STEP INSPECTOR CONSOLE (FADE-IN BERIKUTNYA) */}
        <div 
          className={`mt-10 sm:mt-12 rounded-3xl bg-slate-900 text-white border border-slate-800 p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-1000 delay-500 ease-out ${
            hasMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-bl from-emerald-500/15 via-teal-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-1 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                fase-inspector :: step-{activeData.step}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Cpu className="w-3 h-3" />
                {activeData.techStack}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono uppercase tracking-wider mb-2">
                  <span>Tahap {activeData.step}</span>
                  <span>•</span>
                  <span>Estimasi Pengerjaan: {activeData.duration}</span>
                </div>
                <h4 className="text-2xl font-bold text-white tracking-tight">
                  {activeData.phase}
                </h4>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {activeData.description}
                </p>
              </div>

              <div className="mt-6 p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/90 font-mono text-xs text-slate-400 flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <span className="truncate text-emerald-300/90">{activeData.terminalLog}</span>
              </div>
            </div>

            <div className="lg:col-span-6 bg-slate-800/50 rounded-2xl p-5 sm:p-6 border border-slate-700/60">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Output &amp; Garansi Tahapan Ini
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-500/20">
                  Verified Standard
                </span>
              </div>

              <div className="space-y-3">
                {activeData.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between">
                <span className="text-xs text-slate-400">Siap memulai dari fase ini?</span>
                <a
                  href={createWhatsAppUrl(waTemplates.generalInquiry())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>Konsultasikan Sekarang</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, TrendingUp, Zap, MessageCircle, CheckCircle2, Activity, Code2, ChevronDown, Terminal, ShieldCheck } from 'lucide-react';
import Button from '../components/common/Button';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);

  // State intro sinematik bertingkat
  const [introPhase, setIntroPhase] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0, rotX: 0, rotY: 0, normX: 0, normY: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const [activeTab, setActiveTab] = useState('performance');

  // =========================================================
  // ORKESTRASI EFEK PEMBUKA SINEMATIK (STAGGERED ORCHESTRATION)
  // =========================================================
  useEffect(() => {
    const t1 = setTimeout(() => setIntroPhase(1), 50);   // Background & canvas muncul
    const t2 = setTimeout(() => setIntroPhase(2), 200);  // Headline & typography terangkat
    const t3 = setTimeout(() => setIntroPhase(3), 400);  // CTA button & pills mendarat
    const t4 = setTimeout(() => setIntroPhase(4), 600);  // Kartu 3D & Tech Console terbuka penuh

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  // =========================================================
  // 1. ENGINE CANVAS PARTIKEL FISIKA & SHOCKWAVE KLIK
  // =========================================================
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const particleCount = window.innerWidth < 768 ? 24 : 50;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      baseRadius: Math.random() * 2 + 1,
      colorAlpha: Math.random() * 0.25 + 0.15
    }));

    let shockwaves = [];
    let mouseCoords = { x: -1000, y: -1000, active: false };

    const handleCanvasMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseCoords = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true
      };
    };

    const handleCanvasMouseLeave = () => {
      mouseCoords.active = false;
    };

    const handleCanvasMouseDown = (e) => {
      const rect = canvas.getBoundingClientRect();
      shockwaves.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 10,
        maxRadius: 280,
        opacity: 0.75
      });
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleCanvasMouseMove);
    parent.addEventListener('mouseleave', handleCanvasMouseLeave);
    parent.addEventListener('mousedown', handleCanvasMouseDown);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Render Shockwaves
      for (let s = shockwaves.length - 1; s >= 0; s--) {
        const sw = shockwaves[s];
        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(16, 185, 129, ${sw.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        sw.radius += 6.5;
        sw.opacity *= 0.94;

        particles.forEach((p) => {
          const dX = p.x - sw.x;
          const dY = p.y - sw.y;
          const d = Math.hypot(dX, dY);
          if (Math.abs(d - sw.radius) < 30 && d > 0) {
            p.x += (dX / d) * 3.5;
            p.y += (dY / d) * 3.5;
          }
        });

        if (sw.opacity < 0.02 || sw.radius > sw.maxRadius) {
          shockwaves.splice(s, 1);
        }
      }

      // Render Nodes & Web
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        if (mouseCoords.active) {
          const dx = mouseCoords.x - p.x;
          const dy = mouseCoords.y - p.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 130;

          if (dist < maxDist) {
            const force = (maxDist - dist) / maxDist;
            p.x -= (dx / dist) * force * 2;
            p.y -= (dy / dist) * force * 2;
            p.radius = p.baseRadius * 1.4;
          } else {
            p.radius = p.baseRadius;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(16, 185, 129, ${p.colorAlpha})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 105) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.14 * (1 - distNodes / 105)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', handleCanvasMouseMove);
      parent.removeEventListener('mouseleave', handleCanvasMouseLeave);
      parent.removeEventListener('mousedown', handleCanvasMouseDown);
    };
  }, []);

  // =========================================================
  // 2. ULTRA-SMOOTH LERP TILT ENGINE
  // =========================================================
  useEffect(() => {
    let animId;
    const target = { x: 0, y: 0, rotX: 0, rotY: 0, normX: 0, normY: 0 };
    const current = { x: 0, y: 0, rotX: 0, rotY: 0, normX: 0, normY: 0 };

    const handleWindowMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const inX = e.clientX - rect.left;
      const inY = e.clientY - rect.top;

      target.x = inX;
      target.y = inY;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const nX = (inX - centerX) / centerX;
      const nY = (inY - centerY) / centerY;

      target.normX = nX;
      target.normY = nY;
      target.rotX = -nY * 5.5;
      target.rotY = nX * 5.5;
    };

    const animate = () => {
      // Damping LERP 0.045
      current.x += (target.x - current.x) * 0.045;
      current.y += (target.y - current.y) * 0.045;
      current.normX += (target.normX - current.normX) * 0.045;
      current.normY += (target.normY - current.normY) * 0.045;
      current.rotX += (target.rotX - current.rotX) * 0.045;
      current.rotY += (target.rotY - current.rotY) * 0.045;

      setMouse({
        x: current.x,
        y: current.y,
        normX: current.normX,
        normY: current.normY,
        rotX: current.rotX,
        rotY: current.rotY,
      });

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleWindowMouseMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const highlights = [
    "Arsitektur Cepat & Bersih",
    "Integrasi Direct WhatsApp",
    "Garansi Pemeliharaan Sistem"
  ];

  return (
    <section 
      id="beranda" 
      ref={heroRef}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#fafcfb] selection:bg-emerald-200 cursor-default perspective-1000"
    >
      {/* ========================================================================= */}
      {/* 1. LAYER BACKGROUND DINAMIS (FADE-IN PERTAMA: FASE 1)                      */}
      {/* ========================================================================= */}
      <div 
        className={`absolute -inset-10 pointer-events-none transform-style-3d z-0 select-none will-change-transform transition-opacity duration-1000 ease-out ${
          introPhase >= 1 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `rotateX(${mouse.rotX}deg) rotateY(${mouse.rotY}deg) scale3d(${isPressed ? 0.985 : 1}, ${isPressed ? 0.985 : 1}, 1)`,
        }}
      >
        {/* Ambient Aurora Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 sm:w-220 h-160 sm:h-220 bg-linear-to-tr from-emerald-200/35 via-teal-100/25 to-cyan-100/25 rounded-full blur-[130px] pointer-events-none" />

        {/* Pola Grid Halus */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(#065f46 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px'
          }}
        />

        {/* Kanvas Partikel */}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full opacity-75 pointer-events-auto"
        />

        {/* ==================== KARTU-KARTU MELAYANG (BUKA DI FASE 4) ==================== */}
        
        {/* KARTU 2: TENGAH KANAN */}
        <div 
          className={`hidden xl:flex absolute right-14 2xl:right-24 top-40 p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-emerald-200/80 shadow-xl shadow-emerald-950/5 items-center gap-3 z-10 will-change-transform transition-all duration-1000 ease-out ${
            introPhase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-4'
          }`}
          style={{
            transform: introPhase >= 4 ? `translate3d(${-mouse.rotY * 4.2}px, ${mouse.rotX * 4.2}px, 55px) rotateZ(${2 - mouse.normX * 1.2}deg)` : undefined,
          }}
        >
          <div className="w-11 h-11 rounded-2xl bg-slate-900 flex items-center justify-center text-emerald-400 shrink-0 shadow-md shadow-slate-900/20">
            <Zap className="w-5 h-5 animate-pulse" />
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Latency</span>
            </div>
            <p className="text-sm font-black text-slate-900 mt-0.5">0.4s Ultra Fast</p>
          </div>
        </div>

        {/* KARTU 3: KIRI TENGAH-BAWAH */}
        <div 
          className={`hidden xl:flex absolute left-10 2xl:left-20 top-100 p-3.5 rounded-3xl bg-white/95 backdrop-blur-xl border border-emerald-200/80 shadow-xl shadow-emerald-950/5 items-center gap-3 z-10 will-change-transform transition-all duration-1000 ease-out ${
            introPhase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-4'
          }`}
          style={{
            transform: introPhase >= 4 ? `translate3d(${mouse.rotY * 5}px, ${-mouse.rotX * 5}px, 45px) rotateZ(${3 + mouse.normY * 2}deg)` : undefined,
          }}
        >
          <div className="w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-500/20">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider block">Direct Order</span>
            <p className="text-sm font-black text-slate-900">WhatsApp Hook</p>
          </div>
        </div>

        {/* KARTU 4: KANAN BAWAH */}
        <div 
          className={`hidden xl:flex absolute right-10 2xl:right-20 top-135 p-4 rounded-3xl bg-white/95 backdrop-blur-xl border border-emerald-200/80 shadow-xl shadow-emerald-950/5 items-center gap-3.5 z-10 will-change-transform transition-all duration-1000 ease-out ${
            introPhase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-4'
          }`}
          style={{
            transform: introPhase >= 4 ? `translate3d(${-mouse.rotY * 3.8}px, ${mouse.rotX * 3.8}px, 50px) rotateZ(${-1.5 + mouse.normY * 1.2}deg)` : undefined,
          }}
        >
          <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 shrink-0 shadow-xs">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-[10px] text-teal-700 font-bold uppercase tracking-wider block">Arsitektur</span>
            <p className="text-sm font-black text-slate-900 mt-0.5">Modular &amp; Scalable</p>
          </div>
        </div>

        {/* KARTU 5: MICRO BADGE KIRI BAWAH */}
        <div 
          className={`hidden 2xl:flex absolute left-32 bottom-12 p-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-emerald-100 shadow-lg items-center gap-2.5 z-10 will-change-transform transition-all duration-1000 ease-out ${
            introPhase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-90 translate-y-4'
          }`}
          style={{
            transform: introPhase >= 4 ? `translate3d(${mouse.rotY * 2.5}px, ${-mouse.rotX * 2.5}px, 35px)` : undefined,
          }}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span className="text-xs font-bold text-slate-700 font-mono">SSL 256-bit Verified</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. FOREGROUND KONTEN UTAMA DENGAN ELEVASI BERTINGKAT                      */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-auto">
        
        {/* TYPOGRAPHY UTAMA (FASE 2: MELUNCUR LEMBUT DENGAN SPRING-EASE) */}
        <div 
          className={`max-w-4xl mx-auto text-center transition-all duration-900 cubic-bezier(0.16, 1, 0.3, 1) ${
            introPhase >= 2 
              ? 'opacity-100 translate-y-0 filter-none' 
              : 'opacity-0 translate-y-8 blur-[2px]'
          }`}
        >
          <h1 className="tracking-tight text-slate-900 leading-normal">
            <span className="block text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 tracking-tight pb-1">
              Tingkatkan Pertumbuhan Bisnis
            </span>
            <span className="inline-block text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mt-1 sm:mt-2 bg-linear-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent pb-3 pt-1">
              Lewat Website &amp; Otomasi Digital
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Rancang infrastruktur web berkecepatan tinggi yang terintegrasi langsung dengan WhatsApp untuk memaksimalkan konversi prospek bisnis Anda.
          </p>
        </div>

        {/* CTA ACTION BUTTONS (FASE 3: STAGGER DELAY) */}
        <div 
          className={`mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
            introPhase >= 3 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="relative w-full sm:w-auto group">
            <Button 
              variant="whatsapp" 
              href={createWhatsAppUrl(waTemplates.generalInquiry())} 
              isExternal
              className="relative overflow-hidden w-full sm:w-auto py-4 px-8 text-base font-bold rounded-2xl shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-beam pointer-events-none" />
              <MessageCircle className="w-5 h-5 mr-2" />
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <Button 
            variant="outline" 
            href="#layanan"
            className="w-full sm:w-auto py-4 px-8 text-base font-bold rounded-2xl bg-white border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-950 shadow-xs hover:-translate-y-0.5 active:scale-95 transition-all"
          >
            Lihat Solusi Layanan
          </Button>
        </div>

        {/* VALUE POINTS PILLS (FASE 3) */}
        <div 
          className={`mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-slate-600 transition-all duration-800 cubic-bezier(0.16, 1, 0.3, 1) ${
            introPhase >= 3 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
        >
          {highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* TECH CONSOLE PANEL (FASE 4: KONSOL MEMBUKA SECARA ELEGAN) */}
        <div 
          className={`relative mt-12 w-full max-w-3xl transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
            introPhase >= 4 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-10 scale-95'
          }`}
        >
          <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/20 via-teal-400/20 to-cyan-500/20 rounded-3xl blur-xl opacity-50 -z-10" />

          <div className="rounded-2xl sm:rounded-3xl bg-slate-900/95 backdrop-blur-2xl border border-slate-800 p-4 sm:p-6 shadow-2xl text-left">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  aiuto-engine :: system-status
                </span>
              </div>

              <div className="flex items-center gap-1 bg-slate-800/80 p-1 rounded-xl">
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'performance' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Speed Audit
                </button>
                <button
                  onClick={() => setActiveTab('automation')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    activeTab === 'automation' ? 'bg-emerald-500 text-slate-950 shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  WhatsApp Pipeline
                </button>
              </div>
            </div>

            {activeTab === 'performance' ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>Lighthouse</span>
                    <span className="text-emerald-400 font-bold">100/100</span>
                  </div>
                  <div className="text-xl font-black text-white mt-2">0.38s Load</div>
                  <p className="text-[11px] text-slate-400 mt-1">Core Web Vitals Optimal</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>Bundle Size</span>
                    <span className="text-cyan-400 font-bold">&lt; 45 KB</span>
                  </div>
                  <div className="text-xl font-black text-white mt-2">Ultra Lightweight</div>
                  <p className="text-[11px] text-slate-400 mt-1">Tanpa bloatware &amp; lag</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>SEO Ready</span>
                    <span className="text-amber-400 font-bold">Schema Valid</span>
                  </div>
                  <div className="text-xl font-black text-white mt-2">Google Index</div>
                  <p className="text-[11px] text-slate-400 mt-1">Struktur metadata rapi</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-emerald-400 text-xs font-mono">
                    <span>Chat Hook</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <div className="text-xl font-black text-white mt-2">Instant Route</div>
                  <p className="text-[11px] text-emerald-200/80 mt-1">Pesan otomatis terformat</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>Security</span>
                    <span className="text-emerald-400 font-bold">SSL 256-bit</span>
                  </div>
                  <div className="text-xl font-black text-white mt-2">End-to-End</div>
                  <p className="text-[11px] text-slate-400 mt-1">Privasi pesan terlindungi</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/50 border border-slate-700/60 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-slate-400 text-xs font-mono">
                    <span>Availability</span>
                    <span className="text-cyan-400 font-bold">99.9% Up</span>
                  </div>
                  <div className="text-xl font-black text-white mt-2">24/7 Gateway</div>
                  <p className="text-[11px] text-slate-400 mt-1">Menerima lead tanpa jeda</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* SCROLL CUE (FASE 4) */}
        <a 
          href="#layanan" 
          className={`mt-10 inline-flex flex-col items-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-all duration-700 delay-500 ${
            introPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-widest">Eksplorasi Layanan</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
}
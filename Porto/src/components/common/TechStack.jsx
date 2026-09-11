import { useEffect, useState } from 'react';
import { Layers, Cpu, Globe2, ShieldCheck, Zap, Server, Database, Code2 } from 'lucide-react';

export default function TechStack() {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Menggeser badge secara horizontal berdasarkan posisi scroll vertikal
      setScrollOffset(window.scrollY * 0.45);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techs = [
    { name: "React 19+", icon: Globe2 },
    { name: "Tailwind CSS v4", icon: Layers },
    { name: "Vite Engine", icon: Zap },
    { name: "WhatsApp Cloud API", icon: Cpu },
    { name: "Node.js & Express", icon: Server },
    { name: "PostgreSQL & SQLite", icon: Database },
    { name: "Clean Architecture", icon: Code2 },
    { name: "SSL & Security First", icon: ShieldCheck },
  ];

  // Gandakan array 3x agar barisan badge panjang dan tidak terpotong saat digulir
  const tripleTechs = [...techs, ...techs, ...techs];

  return (
    <div className="py-10 bg-white border-y border-slate-100 overflow-hidden relative select-none">
      {/* Label Sub-header */}
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center"></div>

      {/* Efek Masking Gradien Fade di sisi Kiri dan Kanan */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track Badge yang bergerak saat kursor menggulir layar */}
        <div
          className="flex items-center gap-4 sm:gap-6 will-change-transform transition-transform duration-75 ease-out"
          style={{
            transform: `translateX(-${scrollOffset % 1200}px)`,
          }}
        >
          {tripleTechs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-slate-800 shrink-0 hover:bg-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 transition-all cursor-default"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import { Layers, Cpu, Globe2, ShieldCheck, Zap, Server, Database, Code2, Smartphone, Terminal, Wifi } from 'lucide-react';

export default function TechStack() {
  const techs = [
    { name: "JavaScript", icon: Code2 },
    { name: "PHP & Laravel", icon: Globe2 },
    { name: "Python & FastAPI", icon: Cpu },
    { name: "React & Next.js", icon: Globe2 },
    { name: "React Native & Flutter", icon: Smartphone },
    { name: "Tailwind CSS v4 & UI Framework", icon: Layers },
    { name: "Node.js & Express.js", icon: Server },
    { name: "MySQL, PostgreSQL & SQLite", icon: Database },
    { name: "Docker & Linux Ubuntu Server", icon: Terminal },
    { name: "MikroTik RouterOS & Networking", icon: Wifi },
    { name: "Git, GitHub & CI/CD", icon: Zap },
    { name: "Nginx, SSL & Security Hardening", icon: ShieldCheck },
  ];

  // Gandakan array 3x untuk kelancaran infinite looping tanpa jeda
  const tripleTechs = [...techs, ...techs, ...techs];

  return (
    <div className="overflow-hidden relative select-none">

      {/* Efek Masking Gradien Fade di sisi Kiri dan Kanan */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-linear-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Track Badge Berjalan Otomatis dengan Animasi CSS Smooth */}
        <div className="animate-marquee flex items-center gap-5 w-max">
          {tripleTechs.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/80 text-slate-800 shrink-0 hover:bg-white hover:border-emerald-500 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 cursor-default group"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-50 group-hover:bg-emerald-600 flex items-center justify-center text-emerald-600 group-hover:text-white transition-colors duration-300 shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-700 group-hover:text-slate-950 transition-colors">
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
import { useState, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight, Sparkles, Layers } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { portfolioData } from '../data/portfolioData';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [currentImageIndexes, setCurrentImageIndexes] = useState({});

  const categories = ['Semua', 'Web Development', 'Web App', 'Automation'];

  const filteredProjects = activeFilter === 'Semua'
    ? portfolioData
    : portfolioData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  // =========================================================================
  // AUTO-SLIDE EFFECT (BERGESER OTOMATIS SETIAP 4 DETIK DENGAN HALUS)
  // =========================================================================
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndexes(prev => {
        const nextState = { ...prev };
        filteredProjects.forEach(project => {
          const imagesList = project.images || [];
          if (imagesList.length > 1) {
            const currentIndex = nextState[project.id] || 0;
            nextState[project.id] = (currentIndex + 1) % imagesList.length;
          }
        });
        return nextState;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [filteredProjects]);

  const handleNextImage = (projectId, totalImages, e) => {
    e.preventDefault();
    setCurrentImageIndexes(prev => {
      const currentIndex = prev[projectId] || 0;
      const nextIndex = (currentIndex + 1) % totalImages;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  const handlePrevImage = (projectId, totalImages, e) => {
    e.preventDefault();
    setCurrentImageIndexes(prev => {
      const currentIndex = prev[projectId] || 0;
      const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [projectId]: prevIndex };
    });
  };

  const handleDotClick = (projectId, index, e) => {
    e.preventDefault();
    setCurrentImageIndexes(prev => ({ ...prev, [projectId]: index }));
  };

  return (
    <section id="portofolio" className="pt-24 pb-32 bg-white relative overflow-hidden">
      
      {/* Ambient Aurora Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 sm:w-200 h-140 sm:h-200 bg-linear-to-tr from-emerald-200/20 via-teal-100/10 to-cyan-100/20 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Halus */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage: 'radial-gradient(#065f46 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION (GAYA SEPERTI CONTACT.JSX) */}
              <div className="max-w-3xl mx-auto text-center mb-15">
        
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Solusi &amp; Karya <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Digital Terbaik</span>
          </h2>
        </div>

        {/* GRID KARTU PORTOFOLIO (PRESISI DI TENGAH) */}
        <div className="flex justify-center">
          <div className="w-full max-w-xl lg:max-w-2xl">
            {filteredProjects.map((project) => {
              const activeImgIdx = currentImageIndexes[project.id] || 0;
              const imagesList = project.images || [];

              return (
                <div 
                  key={project.id}
                  className="group relative bg-white/95 rounded-3xl border border-emerald-200/80 shadow-xl shadow-emerald-950/5 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 flex flex-col overflow-hidden backdrop-blur-xl"
                >
                  {/* Pendaran Cahaya Halus di Sudut Kartu */}
                  <div className="absolute top-0 right-0 w-60 h-60 bg-linear-to-bl from-emerald-500/10 via-teal-500/5 to-transparent rounded-full blur-2xl pointer-events-none" />

                  {/* BROWSER MOCKUP HEADER DENGAN SLIDER GAMBAR */}
                  <div className="bg-slate-900 rounded-t-3xl p-3.5 border-b border-slate-800 relative select-none">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm" />
                      </div>
                      <div className="bg-slate-800/90 px-3.5 py-1 rounded-lg text-[11px] font-mono text-emerald-400 border border-slate-700/60 truncate max-w-220px shadow-inner">
                        {project.title.toLowerCase().replace(/[^a-z]/g, '')}.app
                      </div>
                    </div>

                    {/* CONTAINER GAMBAR / SLIDER DENGAN EFEK CROSSFADE HALUS */}
                    <div className="relative aspect-16/10 rounded-2xl overflow-hidden bg-slate-950 group/slider shadow-inner">
                      
                      {imagesList.map((img, imgIdx) => (
                        <img 
                          key={imgIdx}
                          src={img || '/placeholder.jpg'} 
                          alt={`${project.title} - Slide ${imgIdx + 1}`}
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                            activeImgIdx === imgIdx 
                              ? 'opacity-100 scale-100' 
                              : 'opacity-0 scale-105 pointer-events-none'
                          }`}
                        />
                      ))}

                      {/* Overlay Gradien Halus */}
                      <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-slate-950/60 via-slate-950/20 to-transparent pointer-events-none" />


                      {/* Baris Progres Animasi Berjalan Otomatis di Bawah Gambar */}
                      {imagesList.length > 1 && (
                        <div className="absolute bottom-3 inset-x-4 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-inner border border-white/10">
                          {imagesList.map((_, dotIdx) => (
                            <button
                              key={dotIdx}
                              onClick={(e) => handleDotClick(project.id, dotIdx, e)}
                              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                                activeImgIdx === dotIdx ? 'w-8 bg-emerald-400 shadow-sm shadow-emerald-400/50' : 'w-2 bg-white/30 hover:bg-white/70'
                              }`}
                              aria-label={`Go to slide ${dotIdx + 1}`}
                            />
                          ))}
                          <span className="ml-auto text-[10px] font-mono text-slate-300">
                            0{activeImgIdx + 1} / 0{imagesList.length}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* KONTEN KARTU DI BAWAH */}
                  <div className="p-7 sm:p-8 flex flex-col justify-between grow">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200/80 inline-flex items-center gap-1.5 font-mono">
                          <Layers className="w-3 h-3 text-emerald-600" />
                          {project.category}
                        </span>
                        <span className="text-xs font-mono text-slate-400">Production Ready</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                        {project.title}
                      </h3>
                      
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-100">
                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, i) => (
                          <span key={i} className="text-xs font-mono font-semibold bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200/60 shadow-2xs">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Tombol Konsultasi Proyek Serupa */}
                      <a
                        href={createWhatsAppUrl(waTemplates.generalInquiry())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full group/btn relative overflow-hidden inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-linear-to-r from-emerald-600 to-teal-600 text-white text-sm font-bold shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.01] active:scale-95 transition-all duration-300"
                      >
                        <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-beam pointer-events-none" />
                        <span>Konsultasi Pembuatan Sistem Serupa</span>
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
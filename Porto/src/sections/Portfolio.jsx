import { useState } from 'react';
import { ExternalLink, MessageSquare, Sparkles } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { portfolioData } from '../data/portfolioData';
import { createWhatsAppUrl, waTemplates } from '../utils/whatsapp';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const categories = ['Semua', 'Web Development', 'Web App', 'Automation'];

  const filteredProjects = activeFilter === 'Semua'
    ? portfolioData
    : portfolioData.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="portofolio" className="py-24 bg-slate-50/70 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Portofolio Pilihan"
          title="Karya Digital & Sistem yang Telah Mengudara"
          subtitle="Eksplorasi ragam solusi yang kami kembangkan dengan ketelitian desain dan keandalan kode."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative aspect-video overflow-hidden bg-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-[11px] font-bold bg-white/90 backdrop-blur-md text-emerald-800 rounded-full border border-emerald-100 shadow-xs">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Detail Content */}
              <div className="p-7 flex flex-col grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 grow">
                  {project.description}
                </p>

                <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                  <a 
                    href={project.demoUrl} 
                    className="inline-flex items-center text-xs font-bold text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    Live Preview <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                  <a
                    href={createWhatsAppUrl(waTemplates.portfolioInquiry(project.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-emerald-600 hover:text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-1" /> Konsultasi Serupa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
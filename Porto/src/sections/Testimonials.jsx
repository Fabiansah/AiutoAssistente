import { Star, Quote } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import { testimonialsData } from '../data/testimonialsData';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Ulasan Klien"
          title="Dipercaya oleh Berbagai Pelaku Usaha"
          subtitle="Dengarkan pengalaman langsung dari mitra yang telah mengembangkan sistem digital bersama kami."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
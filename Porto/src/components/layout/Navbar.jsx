import { useState, useEffect, useRef } from 'react';
import { MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { createWhatsAppUrl, waTemplates } from '../../utils/whatsapp';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('beranda');

  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  const navItems = [
    { name: 'Beranda', href: '#beranda', id: 'beranda' },
    { name: 'Layanan', href: '#layanan', id: 'layanan' },
    { name: 'Proses', href: '#proses', id: 'proses' },
    { name: 'Portofolio', href: '#portofolio', id: 'portofolio' },
    { name: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  // =========================================================
  // 1. SMART SCROLL LOGIC & ACTIVE LINK SYNC
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6) {
        if (!mobileMenuOpen) setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 6) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      const sections = navItems.map(item => document.querySelector(item.href));
      const scrollPos = currentScrollY + 220;

      sections.forEach((sec, idx) => {
        if (sec) {
          const top = sec.offsetTop;
          const height = sec.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNav(navItems[idx].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  // =========================================================
  // 2. SMOOTH LERP PHYSICS SYNCHRONIZATION WITH HERO
  // =========================================================
  useEffect(() => {
    let animationFrame;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let currentTiltX = 0;
    let currentTiltY = 0;

    const handleWindowMouseMove = (e) => {
      const normX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normY = (e.clientY / window.innerHeight - 0.5) * 2;
      targetTiltX = -normY * 3.5;
      targetTiltY = normX * 3.5;
    };

    const animate = () => {
      // Linear Interpolation (LERP) faktor 0.08 untuk kehalusan maksimal
      currentTiltX += (targetTiltX - currentTiltX) * 0.08;
      currentTiltY += (targetTiltY - currentTiltY) * 0.08;

      if (navRef.current) {
        navRef.current.style.transform = `perspective(1000px) rotateX(${currentTiltX}deg) rotateY(${currentTiltY}deg)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleWindowMouseMove);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out pointer-events-none px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-center">
        
        {/* ========================================================================= */}
        {/* NAV CONTAINER TANPA BORDER SEKAT (MENYATU DENGAN HERO)                    */}
        {/* ========================================================================= */}
        <nav
          ref={navRef}
          className={`pointer-events-auto relative w-full transition-all duration-500 ease-out select-none rounded-full ${
            isScrolled
              ? 'bg-white/70 backdrop-blur-xl shadow-emerald-950/5 py-2.5 px-4 sm:px-6'
              : 'bg-transparent py-3.5 px-5 sm:px-7'
          }`}
        >
          {/* Dynamic Light Beam yang selaras dengan cursor di Hero */}
          <div 
            className="absolute -inset-1 rounded-full pointer-events-none -z-10 blur-xl opacity-60 transition-opacity duration-300"
            style={{
              background: `radial-gradient(500px circle at var(--mouse-x, 50%) 50%, rgba(16, 185, 129, 0.22), transparent 70%)`
            }}
          />

          <div className="flex items-center justify-between">
            
            {/* BRAND LOGO TYPOGRAPHY */}
            <a 
              href="#beranda" 
              className="group flex items-center gap-1.5 text-slate-900 focus:outline-hidden"
            >
              <span className="font-['Space_Grotesk',sans-serif] text-lg sm:text-xl font-bold tracking-tight leading-none text-slate-900 group-hover:scale-[1.02] transition-transform">
                Aiuto<span className="bg-linear-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">Assistente</span>
              </span>
              <span className="relative flex h-2 w-2 mb-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </a>

            {/* NAV LINKS DENGAN BACKDROP FLUIDA */}
            <div className={`hidden md:flex items-center gap-1 p-1 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'bg-slate-100/70 backdrop-blur-md' 
                : 'bg-white/40 backdrop-blur-sm'
            }`}>
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => setActiveNav(item.id)}
                    className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-emerald-950 font-bold'
                        : 'text-slate-700 hover:text-emerald-700 hover:bg-white/50'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute inset-0 rounded-full bg-white shadow-xs -z-10 animate-fade-in" />
                    )}
                    {item.name}
                  </a>
                );
              })}
            </div>

            {/* RIGHT SIDE CTA BUTTON */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={createWhatsAppUrl(waTemplates.generalInquiry())}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-emerald-600 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/30 to-transparent animate-beam pointer-events-none" />
                <MessageCircle className="w-4 h-4 text-emerald-100" />
                <span>Chat Konsultasi</span>
              </a>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-white/40 text-slate-800 hover:text-emerald-600 focus:outline-hidden transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>

          {/* MOBILE DROPDOWN MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 mt-3 flex flex-col gap-1.5 animate-fade-in bg-white/95 rounded-2xl p-4 shadow-xl">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => {
                    setActiveNav(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold flex items-center justify-between transition-colors ${
                    activeNav === item.id
                      ? 'bg-emerald-50 text-emerald-800'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.name}</span>
                  {activeNav === item.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href={createWhatsAppUrl(waTemplates.generalInquiry())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-600/25 active:scale-95 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Konsultasi WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </nav>
      </div>
    </header>
  );
}
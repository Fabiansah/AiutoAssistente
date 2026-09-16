import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloatingBtn from './components/layout/WhatsAppFloatingBtn';
import Hero from './sections/Hero';
import TechStack from './components/common/TechStack';
import Services from './sections/Services';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-800">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <Services />
        <Process />
        <Portfolio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloatingBtn />
    </div>
  );
}
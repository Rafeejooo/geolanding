import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhySection from '@/components/WhySection';
import Partners from '@/components/Partners';
import Features from '@/components/Features';
import SpectrumSection from '@/components/SpectrumSection';
import AppDetails from '@/components/AppDetails';
import SatelliteSection from '@/components/SatelliteSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimeParticles from '@/components/AnimeParticles';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full overflow-x-hidden selection:bg-cyan-500/30 bg-[#020204]">
      <AnimeParticles />
      <Navbar />
      <Hero />
      <WhySection />
      <Features />
      <SpectrumSection />
      <AppDetails />
      <SatelliteSection />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}

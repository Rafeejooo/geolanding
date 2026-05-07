import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SatelliteSection from '@/components/SatelliteSection';
import Partners from '@/components/Partners';
import Features from '@/components/Features';
import AppDetails from '@/components/AppDetails';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AnimeParticles from '@/components/AnimeParticles';

export default function Home() {
  return (
    <main className="flex-1 flex flex-col relative w-full overflow-x-hidden selection:bg-cyan-500/30 bg-[#020204]">
      <AnimeParticles />
      <Navbar />
      <Hero />
      <SatelliteSection />
      <Partners />


      <Features />
      <AppDetails />
      <CTA />
      <Footer />
    </main>
  );
}

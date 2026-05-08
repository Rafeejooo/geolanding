'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRef } from 'react';

const Globe = dynamic(() => import('./Globe'), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effect: moves the globe down slightly as user scrolls down
  const globeY = useTransform(scrollYProgress, [0, 1], ["20%", "60%"]);
  // Fades out slightly on scroll
  const globeOpacity = useTransform(scrollYProgress, [0, 1], [0.8, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black pt-24">
      
      {/* Centered Globe Background with Parallax */}
      <motion.div 
        style={{ y: globeY, opacity: globeOpacity }}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      >
        <div className="absolute left-0 top-[15vh] md:top-[25vh] w-full h-full flex justify-center scale-100 sm:scale-125 md:scale-[1.8]">
           <Globe />
        </div>
      </motion.div>
      
      {/* Vignette to blend globe edges into black */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_65%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Hero Content */}
      <div className="z-20 max-w-5xl px-4 md:px-6 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-6 md:mb-8 flex items-center gap-3 shadow-[0_0_20px_rgba(6,182,212,0.2)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Advancing Earth Observation</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tighter leading-[1.1] relative"
        >
          {/* Tech decorative corners */}
          <div className="absolute -top-6 -left-6 w-8 h-8 border-t-2 border-l-2 border-white/20 hidden md:block" />
          <div className="absolute -bottom-6 -right-6 w-8 h-8 border-b-2 border-r-2 border-white/20 hidden md:block" />
          
          Geospatial Intelligence:<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 filter drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            From Data to Insight
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm md:text-lg text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto font-mono leading-relaxed"
        >
          Empowering organizations with precision geospatial data. Discover, analyze, and act on planetary intelligence with our seamless ecosystem.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-6 w-full sm:w-auto"
        >
          <Link href="#apps" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold flex items-center justify-center gap-2 group hover:bg-cyan-50 transition-all rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] uppercase tracking-widest text-sm">
              Explore Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold flex items-center justify-center gap-2 hover:border-white/50 transition-all rounded-full backdrop-blur-sm uppercase tracking-widest text-sm">
            Talk to Expert
          </button>
        </motion.div>
      </div>
    </section>
  );
}

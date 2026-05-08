'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function SatelliteSection() {
  return (
    <section className="relative w-full py-16 md:py-32 bg-[#020204] overflow-hidden border-t border-white/5" id="satellite">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
          
          {/* Left Side Info - Wider */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8 w-max">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Global Coverage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              High-Resolution <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Satellite Imagery
              </span>
            </h2>
            
            <p className="text-slate-400 mb-6 md:mb-10 text-lg leading-relaxed max-w-xl font-mono">
              Access the world's most comprehensive archive of Earth observation data. Stream petabytes of optical, radar, and hyperspectral imagery directly into your workflows.
            </p>
            
            <div className="space-y-4 mb-8 md:mb-12">
              {['Sub-meter resolution available globally', 'Daily revisit rates for critical monitoring', 'Analysis-ready formats (COG, STAC)'].map((feat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                  <span className="text-slate-300 font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-sm font-bold bg-white text-black px-8 py-4 rounded-full w-max hover:bg-cyan-100 transition-all group shadow-[0_0_20px_rgba(255,255,255,0.2)] uppercase tracking-widest">
              View Providers 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 blur-3xl rounded-full" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://bte-sby.telkomuniversity.ac.id/wp-content/uploads/2025/06/jaringan-satelit.jpg" 
                alt="Jaringan Satelit" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

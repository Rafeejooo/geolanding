'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden z-10 bg-[#020204]">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        >
          Ready to deploy?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 mb-8 md:mb-12 max-w-2xl font-mono"
        >
          Join the leading enterprises building the next generation of location-aware applications with BSK Geospatial.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="px-10 py-4 bg-white text-black rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-cyan-100 font-mono text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-10 py-4 bg-transparent border border-white/20 hover:border-white/50 text-white rounded-full font-bold transition-all duration-300 font-mono text-sm uppercase tracking-widest backdrop-blur-sm">
            View Documentation
          </button>
        </motion.div>
      </div>
    </section>
  );
}

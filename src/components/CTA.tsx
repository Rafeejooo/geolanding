'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden z-10">

      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.sanity.io/images/hvd5n54p/blog/b65a08b5b6067ab1185c73b68808327ac20c190b-1800x1152.jpg?w=2048&q=75&fit=clip&auto=format"
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay — heavy so text stays readable */}
        <div className="absolute inset-0 bg-black/75" />
        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(2,2,4,0.9)_100%)]" />
        {/* Top and bottom fade into page bg */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#020204] to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020204] to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-md mb-8 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase font-mono">Start Your Journey</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
        >
          Ready to deploy?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-slate-300 mb-8 md:mb-12 max-w-2xl font-mono drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]"
        >
          Join the leading enterprises building the next generation of location-aware applications with BSK Geospatial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold transition-colors duration-300 flex items-center justify-center gap-2 group hover:bg-cyan-50 font-mono text-sm uppercase tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03, borderColor: 'rgba(255,255,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-4 bg-black/30 border border-white/20 hover:border-white/50 text-white rounded-full font-bold transition-all duration-300 font-mono text-sm uppercase tracking-widest backdrop-blur-sm"
          >
            View Documentation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

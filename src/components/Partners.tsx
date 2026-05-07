'use client';

import { motion } from 'framer-motion';

const partners = ['Planet', 'Maxar', 'Airbus', 'Sentinel', 'Landsat'];

export default function Partners() {
  return (
    <section className="py-20 relative z-10">
      <div className="container mx-auto px-6 overflow-hidden">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-12 font-mono">
          Seamless integration with leading providers
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="text-3xl font-black tracking-tighter text-slate-300 hover:text-white transition-colors"
            >
              {partner.toUpperCase()}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

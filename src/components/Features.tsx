'use client';

import { motion } from 'framer-motion';
import { Database, Activity, Globe, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';

const features = [
  {
    title: 'DATA HUB',
    description: 'A unified repository for your raster files, basemaps, and satellite imagery. Order new high-res satellite data instantly.',
    icon: <Database className="w-8 h-8 text-cyan-400" />,
    color: 'from-cyan-500/20 to-transparent',
    borderColor: 'group-hover:border-cyan-500/50',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    animContent: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 border border-cyan-500/30 rounded-lg flex flex-col gap-2 p-2"
        >
          <div className="w-full h-1/4 bg-cyan-500/20 rounded" />
          <div className="w-full h-1/4 bg-cyan-500/20 rounded" />
          <div className="w-3/4 h-1/4 bg-cyan-500/20 rounded" />
        </motion.div>
      </div>
    )
  },
  {
    title: 'ANALYSIS CENTER',
    description: 'Deploy advanced AI models to detect land clearing, mining activities, and structural changes with unparalleled accuracy.',
    icon: <Activity className="w-8 h-8 text-blue-500" />,
    color: 'from-blue-500/20 to-transparent',
    borderColor: 'group-hover:border-blue-500/50',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    animContent: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="relative w-40 h-40 rounded-full border border-blue-500/30 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-blue-500 rounded-full"
          />
          <div className="w-20 h-20 border border-blue-500/30 rounded-full" />
        </div>
      </div>
    )
  },
  {
    title: 'LIVE MONITORING',
    description: 'Stream continuous updates from providers like Planet. Set up automated alerts for critical areas and stay ahead of changes.',
    icon: <Globe className="w-8 h-8 text-indigo-500" />,
    color: 'from-indigo-500/20 to-transparent',
    borderColor: 'group-hover:border-indigo-500/50',
    glow: 'shadow-[0_0_30px_rgba(99,102,241,0.15)]',
    animContent: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }} 
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full border border-dashed border-indigo-500 flex items-center justify-center"
        >
          <div className="w-16 h-16 rounded-full bg-indigo-500/20 blur-md" />
        </motion.div>
      </div>
    )
  }
];

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group rounded-3xl bg-[#030305]/80 backdrop-blur-xl border border-white/10 p-8 h-[450px] overflow-hidden transition-all duration-500 ${feature.borderColor} ${feature.glow}`}
    >
      <div 
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.08), transparent 40%)`,
        }}
      />
      
      <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px] pointer-events-none`} />

      {feature.animContent}

      <div className="relative z-10 flex flex-col h-full">
        <div className="w-16 h-16 rounded-2xl bg-black/50 border border-white/10 flex items-center justify-center mb-6 shadow-inner backdrop-blur-md">
          {feature.icon}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 tracking-wider">{feature.title}</h3>
        <p className="text-slate-400 font-mono text-sm leading-relaxed mb-10 flex-grow">
          {feature.description}
        </p>
        
        <div className="mt-auto">
          <button className="flex items-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest group-hover:text-white transition-colors">
            Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-32 relative z-10 border-t border-white/5 bg-[#020204]" id="features">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 font-mono"
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium text-white max-w-3xl leading-tight tracking-tighter"
          >
            A complete ecosystem for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">spatial workflows.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

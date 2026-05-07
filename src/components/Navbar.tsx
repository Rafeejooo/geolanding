'use client';

import { Layers } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl"
    >
      <nav className="flex items-center justify-between px-6 py-4 rounded-[2rem] bg-black/50 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 bg-cyan-500 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:bg-cyan-400 transition-colors">
            <Layers className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-bold text-white tracking-widest drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            BSK<span className="text-cyan-400 font-light ml-1">Geospatial</span>
          </span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {['Platform', 'Data Hub', 'Analysis', 'Monitoring'].map((item) => (
            <Link 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="px-6 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hidden md:block transition-colors">
            Sign In
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black text-xs uppercase tracking-widest rounded-full font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all">
            Get Access
          </button>
        </div>
      </nav>
    </motion.div>
  );
}

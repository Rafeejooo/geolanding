'use client';

import { useState } from 'react';
import { Layers, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Why Us',   href: '#why' },
  { label: 'Platform', href: '#features' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#contact') return; // no section yet
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl flex flex-col"
    >
      <nav className="flex items-center justify-between px-4 md:px-6 py-3 rounded-[2rem] bg-black/70 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="p-1.5 bg-cyan-500 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:bg-cyan-400 transition-colors">
            <Layers className="w-4 h-4 text-black" />
          </div>
          <span className="text-sm md:text-base font-bold text-white tracking-widest">
            BSK<span className="text-cyan-400 font-light ml-1">Geospatial</span>
          </span>
        </Link>

        {/* Nav links — desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA — desktop + hamburger mobile */}
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <button className="hidden md:block text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button className="hidden md:block px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black text-xs uppercase tracking-widest rounded-full font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] hover:scale-105 transition-all">
            Get Access
          </button>
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-xl bg-white/10 border border-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-all"
            onClick={() => setIsOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl mt-2 p-4 flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-cyan-500/20 mt-2 pt-3 flex flex-col gap-2">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition-all text-left"
              >
                Sign In
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black text-xs uppercase tracking-widest rounded-full font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all"
              >
                Get Access
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

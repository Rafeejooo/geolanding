'use client';

import { Layers, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const GlobeT = dynamic(() => import('react-globe.gl'), { ssr: false });

function FooterGlobe() {
  const globeRef = useRef<any>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!globeRef.current) return;
    const controls = globeRef.current.controls();
    controls.enableZoom = false;
    controls.enablePan = false;
    globeRef.current.pointOfView({ lat: -10, lng: 120, altitude: 1.4 });

    let lng = 120;
    const interval = setInterval(() => {
      if (globeRef.current) {
        lng += 0.08;
        globeRef.current.pointOfView({ lat: -10, lng, altitude: 1.4 });
      }
    }, 16);
    return () => clearInterval(interval);
  }, [ready]);

  if (!ready) return null;

  return (
    <GlobeT
      ref={globeRef}
      width={1800}
      height={1800}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      atmosphereColor="rgba(6,182,212,0.6)"
      atmosphereAltitude={0.18}
      showGraticules={false}
    />
  );
}

const links = {
  Platform: ['Data Hub', 'Analysis Center', 'Live Monitoring', 'Pricing'],
  Support: ['Documentation', 'Support Portal', 'Status Page', 'API Reference'],
  Company: ['About Us', 'Careers', 'Contact', 'Blog'],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020204] border-t border-white/5 overflow-hidden">

      {/* Globe — quarter circle rising from bottom-right */}
      {/* Container anchored to bottom-right corner, globe shifted so only top-left quarter shows */}
      <div className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] w-[1800px] h-[1800px] pointer-events-none z-0 opacity-25">
        <FooterGlobe />
      </div>

      {/* Soft cyan glow at bottom-right */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[40vh] bg-cyan-500/8 blur-[160px] pointer-events-none z-0" />

      {/* Gradient: strong top fade so content is always readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020204] via-[#020204]/90 to-transparent pointer-events-none z-10" />
      {/* Left side extra fade so links stay readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020204] via-[#020204]/60 to-transparent pointer-events-none z-10" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#020204] to-transparent pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-16 pb-8 max-w-7xl">

        {/* Top row: logo + CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

          {/* Logo + tagline */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-3 group mb-5">
              <div className="p-2 bg-cyan-500 rounded-xl shadow-[0_0_15px_rgba(6,182,212,0.8)] group-hover:bg-cyan-400 transition-colors">
                <Layers className="w-5 h-5 text-black" />
              </div>
              <span className="text-xl font-bold text-white tracking-widest">
                BSK<span className="text-cyan-400 font-light ml-1">Geospatial</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              The leading geospatial platform for managing, analyzing, and monitoring spatial data with AI-powered insights.
            </p>
            <a
              href="mailto:hello@bskgeospatial.com"
              className="inline-flex items-center gap-2 text-cyan-400 text-sm font-mono hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@bskgeospatial.com
            </a>
          </div>

          {/* GET IN TOUCH button — same style as Hero */}
          <div className="shrink-0">
            <button className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold flex items-center gap-2 hover:border-white/50 transition-all rounded-full backdrop-blur-sm uppercase tracking-widest text-sm group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-5 font-mono">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-slate-300 hover:text-white text-sm transition-colors hover:translate-x-0.5 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs font-mono">
            © {new Date().getFullYear()} BSK Geospatial. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-600 hover:text-slate-400 text-xs font-mono transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

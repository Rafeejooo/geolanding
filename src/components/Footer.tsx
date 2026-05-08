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
    globeRef.current.pointOfView({ lat: -20, lng: 120, altitude: 2.2 });

    let lng = 120;
    const interval = setInterval(() => {
      if (globeRef.current) {
        lng += 0.1;
        globeRef.current.pointOfView({ lat: -20, lng, altitude: 2.2 });
      }
    }, 16);
    return () => clearInterval(interval);
  }, [ready]);

  if (!ready) return null;

  return (
    <GlobeT
      ref={globeRef}
      width={1400}
      height={1400}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      atmosphereColor="rgba(6,182,212,0.8)"
      atmosphereAltitude={0.2}
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

      {/* Globe — bottom right, large, ~1/4 visible */}
      <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[72%] w-[130vw] h-[130vw] max-w-[1400px] max-h-[1400px] pointer-events-none z-0 opacity-70">
        <FooterGlobe />
      </div>

      {/* Atmospheric glow behind globe */}
      <div className="absolute bottom-0 right-0 translate-x-[10%] w-[60vw] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* Gradient overlay to fade globe into background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020204] via-[#020204]/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020204] to-transparent pointer-events-none z-10" />

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

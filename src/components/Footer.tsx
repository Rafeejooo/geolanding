'use client';

import { Layers, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// useEffect and useState kept for when globe is re-enabled
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from 'react';
// import { useRef } from 'react';
// import * as THREE from 'three';

/* GLOBE COMPONENT — commented out, re-enable when ready
function FooterGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 2.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(el.offsetWidth, el.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Earth sphere
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const loader = new THREE.TextureLoader();

    // Load earth textures
    const earthTexture = loader.load('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
    const bumpTexture = loader.load('//unpkg.com/three-globe/example/img/earth-topology.png');

    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      bumpMap: bumpTexture,
      bumpScale: 0.05,
      specular: new THREE.Color(0x222222),
      shininess: 8,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Atmosphere glow
    const atmGeo = new THREE.SphereGeometry(1.08, 64, 64);
    const atmMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x06b6d4),
      transparent: true,
      opacity: 0.08,
      side: THREE.FrontSide,
    });
    const atmosphere = new THREE.Mesh(atmGeo, atmMat);
    scene.add(atmosphere);

    // Outer atmosphere ring
    const outerAtmGeo = new THREE.SphereGeometry(1.14, 64, 64);
    const outerAtmMat = new THREE.MeshPhongMaterial({
      color: new THREE.Color(0x0e7490),
      transparent: true,
      opacity: 0.04,
      side: THREE.FrontSide,
    });
    const outerAtm = new THREE.Mesh(outerAtmGeo, outerAtmMat);
    scene.add(outerAtm);

    // Lighting — ambient + directional (sun-like from top-right)
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);

    const sun = new THREE.DirectionalLight(0xffffff, 1.2);
    sun.position.set(5, 3, 5);
    scene.add(sun);

    const rimLight = new THREE.DirectionalLight(0x06b6d4, 0.4);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    // Auto-rotate
    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      earth.rotation.y += 0.0015;
      atmosphere.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const onResize = () => {
      if (!el) return;
      renderer.setSize(el.offsetWidth, el.offsetHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
*/

const links = {
  Platform: ['Data Hub', 'Analysis Center', 'Live Monitoring', 'Pricing'],
  Support: ['Documentation', 'Support Portal', 'Status Page', 'API Reference'],
  Company: ['About Us', 'Careers', 'Contact', 'Blog'],
};

export default function Footer() {
  // const [mounted, setMounted] = useState(false);
  // useEffect(() => setMounted(true), []);

  return (
    <footer className="relative bg-[#020204] border-t border-white/5 overflow-hidden">

      {/* GLOBE — commented out, re-enable when ready
      {mounted && (
        <div
          className="absolute pointer-events-none z-0"
          style={{
            bottom: 0,
            right: 0,
            width: '200vw',
            height: '200vw',
            maxWidth: '2000px',
            maxHeight: '2000px',
            transform: 'translate(50%, 50%)',
            opacity: 0.6,
          }}
        >
          <FooterGlobe />
        </div>
      )}
      <div className="absolute bottom-0 right-0 w-[60vw] h-[60vh] bg-cyan-500/10 blur-[200px] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 right-0 h-[55%] bg-gradient-to-b from-[#020204] to-transparent pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020204] via-[#020204]/70 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#020204] to-transparent pointer-events-none z-10" />
      */}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 pt-16 pb-8 max-w-7xl">

        {/* Top row: logo + CTA — commented out
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">

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

          <div className="shrink-0">
            <button className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-bold flex items-center gap-2 hover:border-white/50 transition-all rounded-full backdrop-blur-sm uppercase tracking-widest text-sm group">
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        */}

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
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

        {/* Bottom bar */}
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

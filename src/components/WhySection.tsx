'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe, Search, Activity, AlertTriangle, RefreshCw,
  CheckCircle2, Database, FileX, Wifi, WifiOff, Layers
} from 'lucide-react';

/* ════════════════════════════════════════
   BEFORE — Raw / Fragmented Data
════════════════════════════════════════ */
function RawDataPanel() {
  return (
    <div className="w-full h-full bg-[#06080d] flex flex-col overflow-hidden relative">

      {/* Header */}
      <div className="shrink-0 h-9 bg-[#080a0f] border-b border-white/5 flex items-center px-4 gap-3">
        <WifiOff className="w-3 h-3 text-red-400" />
        <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase font-mono">Raw Data · No Intelligence</span>
        <span className="ml-auto text-[9px] text-red-400/70 font-mono bg-red-500/8 border border-red-500/15 px-2 py-0.5 rounded-full">OFFLINE</span>
      </div>

      {/* Body */}
      <div className="flex-1 relative overflow-hidden">

        {/* Dark space background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#0a0f1a_0%,#06080d_70%)]" />

        {/* Faint grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
          <defs>
            <pattern id="rawgrid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#64748b" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rawgrid)" />
        </svg>

        {/* Globe wireframe */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-56 h-56 opacity-20">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <circle cx="100" cy="100" r="90" fill="none" stroke="#334155" strokeWidth="1" />
              <ellipse cx="100" cy="100" rx="55" ry="90" fill="none" stroke="#334155" strokeWidth="0.8" />
              <ellipse cx="100" cy="100" rx="90" ry="35" fill="none" stroke="#334155" strokeWidth="0.8" />
              <ellipse cx="100" cy="100" rx="90" ry="60" fill="none" stroke="#334155" strokeWidth="0.5" />
              <line x1="10" y1="100" x2="190" y2="100" stroke="#334155" strokeWidth="0.5" />
              <line x1="100" y1="10" x2="100" y2="190" stroke="#334155" strokeWidth="0.5" />
              {/* Landmass blobs */}
              <path d="M70,60 Q90,50 100,65 Q110,55 120,68 Q115,85 100,88 Q85,85 70,60Z" fill="#1e293b" />
              <path d="M55,100 Q65,90 80,95 Q85,110 75,118 Q60,115 55,100Z" fill="#1e293b" />
              <path d="M110,110 Q130,105 140,118 Q135,132 118,130 Q105,125 110,110Z" fill="#1e293b" />
            </svg>
          </div>
        </div>

        {/* Scattered raw data — unconnected nodes */}
        {[
          { x: '12%', y: '20%' }, { x: '28%', y: '55%' }, { x: '45%', y: '18%' },
          { x: '62%', y: '38%' }, { x: '78%', y: '65%' }, { x: '20%', y: '75%' },
          { x: '55%', y: '72%' }, { x: '85%', y: '28%' }, { x: '38%', y: '45%' },
        ].map((pos, i) => (
          <div key={i} className="absolute" style={{ left: pos.x, top: pos.y }}>
            <div className="w-2 h-2 rounded-full bg-slate-600/50 border border-slate-500/40" />
          </div>
        ))}

        {/* Broken / error data cards */}
        <div className="absolute top-5 left-5 bg-[#0d1018]/90 border border-white/8 rounded-xl p-3 w-44 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <FileX className="w-3 h-3 text-red-400/60" />
            <span className="text-[9px] text-slate-500 font-mono font-bold">DATASET_2019.tif</span>
          </div>
          <div className="h-1 bg-white/5 rounded mb-1.5 overflow-hidden">
            <div className="w-1/3 h-full bg-red-500/40 rounded" />
          </div>
          <span className="text-[8px] text-red-400/50 font-mono">ERR: Projection mismatch</span>
        </div>

        <div className="absolute bottom-14 left-5 bg-[#0d1018]/90 border border-white/8 rounded-xl p-3 w-40 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-3 h-3 text-slate-500" />
            <span className="text-[9px] text-slate-500 font-mono font-bold">3 sources · manual</span>
          </div>
          {['Planet_raw.zip', 'Maxar_2021.zip', 'Sentinel_old/'].map((f, i) => (
            <div key={i} className="text-[8px] text-slate-600 font-mono py-0.5 border-b border-white/3 last:border-0">{f}</div>
          ))}
        </div>

        <div className="absolute top-5 right-5 bg-[#0d1018]/90 border border-orange-500/15 rounded-xl p-3 w-36 backdrop-blur-sm">
          <div className="flex items-center gap-1.5 mb-2">
            <AlertTriangle className="w-3 h-3 text-orange-400/60" />
            <span className="text-[9px] text-orange-400/60 font-mono font-bold">No Alerts</span>
          </div>
          <span className="text-[8px] text-slate-600 font-mono leading-relaxed">Manual monitoring only.<br />Last check: 8 days ago.</span>
        </div>

        <div className="absolute bottom-14 right-5 bg-[#0d1018]/90 border border-white/8 rounded-xl p-3 w-40 backdrop-blur-sm">
          <div className="text-[9px] text-slate-500 font-mono font-bold mb-2">ANALYSIS</div>
          <div className="flex flex-col gap-1">
            {['NDVI', 'Cover %', 'Change'].map((label) => (
              <div key={label} className="flex justify-between items-center">
                <span className="text-[8px] text-slate-600 font-mono">{label}</span>
                <span className="text-[8px] text-slate-600 font-mono">—</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom status */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span className="text-[9px] text-slate-600 font-mono">Avg. preprocessing time: ~6.5 hrs · No real-time data</span>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   AFTER — BSK WebGIS Dashboard
════════════════════════════════════════ */
function MockDashboard() {
  return (
    <div className="w-full h-full bg-[#0b0d14] flex flex-col text-xs overflow-hidden">

      {/* Topbar */}
      <div className="h-9 border-b border-white/5 flex items-center px-4 justify-between bg-[#080a0f] shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
            <Globe className="w-2.5 h-2.5 text-blue-400" />
          </div>
          <span className="text-white font-bold tracking-wider text-[11px]">WEBGIS <span className="text-cyan-400">BSK</span></span>
          <span className="text-slate-600 text-[9px]">· Monitoring IUP</span>
          <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8px] border border-emerald-500/20 font-bold">LIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-32 h-6 bg-white/5 border border-white/8 rounded-full flex items-center px-2.5 gap-1.5">
            <Search className="w-2.5 h-2.5 text-slate-500" />
            <span className="text-slate-500 text-[9px] font-mono">Cari wilayah...</span>
          </div>
          <div className="w-5 h-5 rounded-full bg-white/5 border border-white/8 flex items-center justify-center">
            <RefreshCw className="w-2.5 h-2.5 text-slate-500" />
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* Left panel */}
        <div className="w-44 shrink-0 bg-[#080a0f] border-r border-white/5 flex flex-col p-2.5 gap-2.5 overflow-y-auto">
          <div className="bg-gradient-to-r from-blue-600/80 to-cyan-500/80 p-2 rounded-lg text-white font-bold text-[9px] leading-snug">
            Monitoring IUP · Indonesia
          </div>
          <div className="bg-[#111318] p-2 rounded-lg border border-orange-500/20">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-orange-400 font-bold text-[8px] flex items-center gap-1">
                <Activity className="w-2 h-2" /> DEFORESTASI
              </span>
              <span className="bg-red-500/20 text-red-400 px-1 py-0.5 rounded text-[7px] font-mono">2024</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
            </div>
            <div className="flex justify-between text-[7px] text-slate-600 mt-1 font-mono">
              <span>2010</span><span>2024</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-slate-500 text-[8px] font-bold uppercase tracking-widest">Layers</span>
            <span className="text-cyan-400 text-[8px] font-mono">3 aktif</span>
          </div>
          {[
            { label: 'WIUP Pertambangan', color: 'bg-yellow-400', on: true },
            { label: 'Kawasan Hutan', color: 'bg-emerald-400', on: true },
            { label: 'PPKH Produksi', color: 'bg-blue-400', on: true },
            { label: 'PPKH Eksplorasi', color: 'bg-slate-500', on: false },
          ].map((l, i) => (
            <div key={i} className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg ${l.on ? 'bg-white/4 border border-white/8' : 'opacity-30'}`}>
              <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${l.color}`} />
              <span className="text-[8px] text-slate-300 leading-tight">{l.label}</span>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="flex-1 relative bg-[#050810] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,#0f1e0f_0%,#050810_70%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]">
            <defs>
              <pattern id="mapgrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22d3ee" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapgrid)" />
          </svg>
          <svg viewBox="0 0 800 420" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
            {/* Sumatera */}
            <path d="M30,160 L80,100 L130,90 L180,110 L200,150 L180,200 L140,230 L90,220 L50,190Z" fill="#1a2a1a" stroke="#2d4a2d" strokeWidth="1"/>
            {/* Jawa */}
            <path d="M200,260 L280,240 L360,245 L420,250 L440,265 L380,275 L300,278 L220,272Z" fill="#1a2a1a" stroke="#2d4a2d" strokeWidth="1"/>
            {/* Kalimantan */}
            <path d="M270,100 L360,70 L450,80 L490,130 L480,200 L440,250 L370,270 L290,260 L250,200 L255,140Z" fill="#1a2a1a" stroke="#2d4a2d" strokeWidth="1"/>
            {/* Sulawesi */}
            <path d="M520,130 L555,110 L575,140 L560,180 L540,200 L515,175 L510,150Z" fill="#1a2a1a" stroke="#2d4a2d" strokeWidth="1"/>
            {/* Papua */}
            <path d="M640,150 L720,130 L760,160 L750,220 L700,250 L640,240 L620,200Z" fill="#1a2a1a" stroke="#2d4a2d" strokeWidth="1"/>
            {/* Forest overlay green */}
            <motion.path d="M275,110 L450,85 L480,150 L460,230 L370,260 L265,240 L258,160Z" fill="rgba(16,185,129,0.22)" stroke="#10b981" strokeWidth="0.8" strokeDasharray="4 2" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5}}/>
            <motion.path d="M40,165 L185,105 L195,155 L170,205 L95,215 L55,188Z" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="0.8" strokeDasharray="4 2" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5,delay:0.3}}/>
            <motion.path d="M645,155 L755,135 L745,215 L695,245 L628,235 L622,195Z" fill="rgba(16,185,129,0.18)" stroke="#10b981" strokeWidth="0.8" strokeDasharray="4 2" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1.5,delay:0.5}}/>
            {/* WIUP mining zones yellow */}
            {["M295,130 L330,125 L325,160 L290,158Z","M355,170 L390,165 L388,195 L353,198Z","M420,110 L455,107 L452,135 L418,137Z","M100,130 L125,125 L122,150 L98,153Z","M150,170 L175,165 L172,188 L148,191Z"].map((d,i)=>(
              <motion.path key={i} d={d} fill="rgba(234,179,8,0.35)" stroke="#eab308" strokeWidth="0.8" initial={{opacity:0}} animate={{opacity:[0.4,0.9,0.4]}} transition={{duration:2.5,repeat:Infinity,delay:i*0.4}}/>
            ))}
            {/* Pulse radar */}
            <motion.circle cx="330" cy="148" r="6" fill="rgba(239,68,68,0.8)" animate={{r:[4,14,4],opacity:[0.9,0,0.9]}} transition={{duration:2,repeat:Infinity}}/>
            <circle cx="330" cy="148" r="3.5" fill="#ef4444"/>
          </svg>
          {/* Bottom bar */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1 bg-[#080a0f]/90 border border-white/8 rounded-lg px-2 py-1">
              <span className="text-[8px] text-slate-500 font-mono">Citra:</span>
              <span className="text-[8px] text-cyan-400 font-bold font-mono">Apr 2026</span>
            </div>
            <div className="flex items-center gap-0.5 bg-[#080a0f]/90 border border-white/8 rounded-lg px-2 py-1">
              {['Light','Dark','Satelit','Planet'].map((t,i)=>(
                <span key={i} className={`text-[7px] px-1.5 py-0.5 rounded font-mono ${i===3?'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-bold':'text-slate-500'}`}>{t}</span>
              ))}
            </div>
            <div className="bg-[#080a0f]/90 border border-white/8 rounded-lg px-2 py-1">
              <span className="text-[8px] text-cyan-400 font-mono">LAT +2.04° | LNG +94.09°</span>
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-40 shrink-0 bg-[#080a0f] border-l border-white/5 flex flex-col p-2.5 gap-2.5 overflow-y-auto">
          <div className="bg-[#111318] rounded-lg border border-white/8 p-2">
            <div className="flex items-center gap-1 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"/>
              <span className="text-[9px] text-white font-bold">Kawasan Hutan</span>
            </div>
            {[['Jenis','HPT · 100400'],['Provinsi','Kalteng · 62'],['Luas','12.7M Ha']].map(([k,v])=>(
              <div key={k} className="mb-1.5">
                <div className="text-[7px] text-slate-500">{k}</div>
                <div className="text-[8px] text-slate-200 font-mono">{v}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1">
            {[{l:'Tambang',v:'2.643',c:'text-orange-400',d:'bg-orange-400'},{l:'Hutan',v:'8.5K',c:'text-emerald-400',d:'bg-emerald-400'},{l:'Sungai',v:'92',c:'text-blue-400',d:'bg-blue-400'},{l:'Total',v:'12K',c:'text-cyan-400',d:'bg-cyan-400'}].map((s)=>(
              <div key={s.l} className="bg-[#111318] rounded-lg border border-white/5 p-1.5">
                <div className="flex items-center gap-1 mb-0.5"><div className={`w-1 h-1 rounded-full ${s.d}`}/><span className="text-[7px] text-slate-500">{s.l}</span></div>
                <span className={`text-[10px] font-bold font-mono ${s.c}`}>{s.v}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="text-[7px] text-slate-500 uppercase tracking-widest font-bold">Time Series</span>
            <div className="flex items-end gap-0.5 h-10 mt-1.5">
              {[30,45,28,62,80,68,95].map((h,i)=>(
                <motion.div key={i} initial={{height:0}} whileInView={{height:`${h}%`}} transition={{duration:0.8,delay:i*0.07,type:'spring'}} className={`flex-1 rounded-t-sm ${i===6?'bg-emerald-500':'bg-slate-700'}`}/>
              ))}
            </div>
          </div>
          <div className="bg-red-500/10 border border-red-500/25 rounded-lg p-2 flex items-start gap-1.5">
            <AlertTriangle className="w-2.5 h-2.5 text-red-400 shrink-0 mt-0.5"/>
            <span className="text-[7px] text-red-300 leading-tight">Perubahan terdeteksi · Kalteng</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════
   Comparison Slider — Raw LEFT, BSK RIGHT
════════════════════════════════════════ */
function ComparisonSlider() {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const [touched, setTouched] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const move = useCallback((clientX: number) => {
    if (!dragging || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100)));
    if (!touched) setTouched(true);
  }, [dragging, touched]);

  const stopDrag = useCallback(() => setDragging(false), []);

  useEffect(() => {
    window.addEventListener('mouseup', stopDrag);
    return () => window.removeEventListener('mouseup', stopDrag);
  }, [stopDrag]);

  return (
    <div
      ref={ref}
      className="relative w-full h-full cursor-ew-resize select-none overflow-hidden"
      onMouseMove={e => move(e.clientX)}
      onMouseLeave={stopDrag}
      onTouchMove={e => { setDragging(true); move(e.touches[0].clientX); }}
      onTouchEnd={stopDrag}
    >
      {/* RAW — full width base (LEFT) */}
      <div className="absolute inset-0">
        <RawDataPanel />
      </div>

      {/* BSK DASHBOARD — clipped from left (RIGHT) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <MockDashboard />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/50 pointer-events-none z-20"
        style={{ left: `${pos}%` }}
      />
      {/* Glow on divider */}
      <div
        className="absolute top-0 bottom-0 w-6 -translate-x-1/2 pointer-events-none z-20 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent"
        style={{ left: `${pos}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30"
        style={{ left: `${pos}%` }}
        onMouseDown={() => setDragging(true)}
        onTouchStart={() => setDragging(true)}
      >
        <motion.div
          animate={{ scale: dragging ? 1.2 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          className="w-10 h-10 rounded-full bg-[#080a0f] border-2 border-cyan-400/80 shadow-[0_0_28px_rgba(6,182,212,0.7)] flex items-center justify-center"
        >
          <Layers className="w-4 h-4 text-cyan-400" strokeWidth={2} />
        </motion.div>
      </div>

      {/* Left label */}
      <AnimatePresence>
        {pos > 15 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm border border-red-500/20 flex items-center gap-1.5"
          >
            <WifiOff className="w-2.5 h-2.5 text-red-400/70" />
            <span className="text-[9px] text-slate-400 font-mono font-bold uppercase tracking-widest">Raw · No Intel</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right label */}
      <AnimatePresence>
        {pos < 85 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-lg bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/30 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
            <span className="text-[9px] text-cyan-400 font-mono font-bold uppercase tracking-widest">BSK Live Intel</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hint */}
      {!touched && (
        <motion.div
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-[9px] text-white/40 font-mono uppercase tracking-widest pointer-events-none whitespace-nowrap"
        >
          ← drag to compare →
        </motion.div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════
   Main Section
════════════════════════════════════════ */
const bullets = [
  'Real-time satellite feeds updated daily',
  'AI-powered change detection & auto-alerts',
  'Unified hub from 50+ global data providers',
  'Sub-meter resolution, analysis-ready (COG/STAC)',
];

export default function WhySection() {
  return (
    <section id="why" className="relative py-20 md:py-32 bg-[#020204] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-cyan-500/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6 w-max">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Why BSK Geospatial</span>
          </motion.div>
          <motion.h2 initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}} className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-5 tracking-tight">
            The Cost of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Not Knowing</span>
          </motion.h2>
          <motion.p initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}} className="text-slate-400 text-base md:text-lg max-w-2xl font-mono leading-relaxed">
            Every day without geospatial intelligence is a day of missed opportunities, delayed responses, and uninformed decisions.
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.65,delay:0.1}}
          className="rounded-2xl border border-white/10 hover:border-cyan-500/30 hover:shadow-[0_0_70px_rgba(6,182,212,0.07)] bg-[#08090f] transition-all duration-500 overflow-hidden"
        >
          {/* Top row — labels + bullets */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/5">

            {/* Left label */}
            <div className="flex items-center gap-4 px-7 py-5 border-b md:border-b-0 md:border-r border-white/5">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <WifiOff className="w-4 h-4 text-red-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-widest font-mono mb-0.5">Without BSK</div>
                <div className="text-sm text-slate-400">Blind decisions on outdated, fragmented data</div>
              </div>
            </div>

            {/* Right label */}
            <div className="flex items-center gap-4 px-7 py-5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Wifi className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest font-mono mb-0.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                  With BSK
                </div>
                <div className="text-sm text-slate-400">Live intelligence across all your critical assets</div>
              </div>
            </div>
          </div>

          {/* Comparison slider — tall */}
          <div className="h-[300px] sm:h-[420px] md:h-[500px]">
            <ComparisonSlider />
          </div>

          {/* Bottom bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/5">
            {bullets.map((b, i) => (
              <div key={i} className={`flex items-start gap-2.5 px-5 py-4 border-b border-white/5 last:border-b-0 md:border-b-0 ${i < 3 ? 'md:border-r md:border-white/5' : ''}`}>
                <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400 leading-relaxed">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

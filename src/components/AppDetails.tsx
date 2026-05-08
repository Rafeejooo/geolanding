'use client';

import { motion } from 'framer-motion';
import { Database, Activity, Globe, Search, Bell, Map as MapIcon, ChevronRight } from 'lucide-react';

const apps = [
  {
    id: 'data-hub',
    title: 'Data Hub',
    description: 'The central nervous system for your spatial data. Automatically ingest, catalog, and query petabytes of raster and vector data with millisecond latency.',
    color: 'bg-blue-500',
    features: ['Auto-cataloging', 'S3 / GCS Integration', 'Vector Tile Generation'],
    ui: (
      <div className="w-full h-full bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 p-6 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
        {/* Fake UI Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Database className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">Storage Cluster Alpha</div>
              <div className="text-slate-400 text-xs">2.4 PB Active Data</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Search className="w-4 h-4 text-slate-400"/></div>
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Bell className="w-4 h-4 text-slate-400"/></div>
          </div>
        </div>
        
        {/* Fake UI Content */}
        <div className="grid grid-cols-2 gap-4 flex-grow">
          <div className="bg-white/5 rounded-3xl p-4 flex flex-col justify-between border border-white/5">
            <div className="text-slate-400 text-xs">Recent Uploads</div>
            <div className="text-white text-2xl font-bold">1,492</div>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2"><div className="w-3/4 h-full bg-blue-500 rounded-full" /></div>
          </div>
          <div className="bg-white/5 rounded-3xl p-4 flex flex-col justify-between border border-white/5">
            <div className="text-slate-400 text-xs">Processing Queue</div>
            <div className="text-white text-2xl font-bold">84</div>
            <div className="w-full h-1 bg-white/10 rounded-full mt-2"><div className="w-1/4 h-full bg-orange-500 rounded-full" /></div>
          </div>
        </div>
        
        {/* Fake List */}
        <div className="flex flex-col gap-2 mt-2">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white/5 rounded-2xl p-3 flex items-center justify-between border border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <div className="text-sm text-slate-200 font-mono">landsat_8_scene_{i}</div>
              </div>
              <div className="text-xs text-slate-500">Just now</div>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'analysis-center',
    title: 'Analysis Center',
    description: 'Build and deploy custom AI models directly on your data. Run inference at scale without moving data out of the hub.',
    color: 'bg-purple-500',
    features: ['Custom Model Training', 'Distributed Inference', 'Jupyter Notebooks'],
    ui: (
      <div className="w-full h-full bg-[#111318] rounded-[2rem] border border-white/10 flex flex-col shadow-2xl relative overflow-hidden text-xs">
        {/* Top Navbar */}
        <div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-[#0a0c10]">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/20 border border-blue-500/50">
              <Globe className="w-3 h-3 text-blue-400" />
            </div>
            <span className="text-white font-bold tracking-wider text-sm">WEBGIS <span className="text-blue-400">BSK</span></span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[9px] border border-emerald-500/20 font-medium tracking-wide">Online</span>
          </div>
          <div className="w-48 h-7 bg-white/5 border border-white/10 rounded-md flex items-center px-3">
             <Search className="w-3 h-3 text-slate-500 mr-2" />
             <span className="text-slate-500 text-[10px]">Cari wilayah...</span>
          </div>
        </div>
        
        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Map Area */}
          <div className="flex-1 relative bg-[#05080c] overflow-hidden group">
            {/* Map Grid / Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#05080c_100%)] opacity-80" />
            
            {/* Vector Map of Kalimantan & Animated Polygons */}
            <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.1)] scale-[1.15] origin-center">
              {/* Kalimantan Island Path */}
              <path 
                d="M160,40 L250,30 L290,70 L340,120 L320,180 L350,240 L300,290 L230,330 L160,340 L100,310 L60,250 L40,170 L90,120 L130,70 Z" 
                fill="#1e293b" 
                stroke="#334155" 
                strokeWidth="2" 
              />
              
              {/* Animated Polygons simulating land classification inside Kalimantan */}
              <g className="opacity-70 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                {/* Hutan Primer 1 */}
                <motion.polygon 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                  points="110,90 220,100 190,210 110,190" 
                  fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2"
                />
                {/* Hutan Primer 2 */}
                <motion.polygon 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  points="190,210 260,270 150,310 90,250" 
                  fill="rgba(16,185,129,0.15)" stroke="#10b981" strokeWidth="1" strokeDasharray="4 2"
                />
                {/* Mining area detected (Tambang) */}
                <motion.polygon 
                  initial={{ fill: "rgba(245,158,11,0.2)" }}
                  animate={{ fill: "rgba(245,158,11,0.5)" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  points="140,120 180,130 160,170 120,150" 
                  stroke="#f59e0b" strokeWidth="1.5" 
                />
              </g>
              
              {/* Radar Point */}
              <foreignObject x="150" y="140" width="20" height="20">
                <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,1)] flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full animate-ping" />
                </div>
              </foreignObject>
            </svg>

            {/* Map Controls */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end pointer-events-none">
              <div className="flex items-center bg-[#0a0c10]/80 backdrop-blur-md border border-white/10 rounded-lg p-1 gap-1">
                <div className="px-4 py-1.5 bg-blue-600 rounded shadow-[0_0_10px_rgba(37,99,235,0.5)] text-white font-medium text-[10px]">Planet Labs</div>
                <div className="px-4 py-1.5 text-slate-400 text-[10px]">Sentinel-2</div>
              </div>
            </div>
          </div>
          
          {/* Right Sidebar - Statistik */}
          <div className="hidden sm:flex w-56 bg-[#0a0c10] border-l border-white/5 flex-col p-4 overflow-y-auto">
            <div className="text-white font-bold mb-4 flex items-center gap-2 text-sm">
              <Activity className="w-4 h-4 text-blue-400" />
              Statistik Tutupan Lahan
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#111318] p-3 rounded-xl border border-white/5 shadow-inner">
                <div className="text-white font-bold text-lg mb-1">2.643</div>
                <div className="text-slate-500 text-[10px] leading-tight">Tambang (Ha)</div>
              </div>
              <div className="bg-[#111318] p-3 rounded-xl border border-white/5 shadow-inner">
                <div className="text-white font-bold text-lg mb-1">12K</div>
                <div className="text-slate-500 text-[10px] leading-tight">Total Area (Ha)</div>
              </div>
            </div>

            <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-3">Hutan</div>
            <div className="flex justify-between items-center bg-[#111318] p-3 rounded-xl border border-emerald-500/20 mb-4 group hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]" />
                <span className="text-slate-300 text-[11px] font-medium">Primer</span>
              </div>
              <span className="text-emerald-400 text-[11px] font-mono">8.565</span>
            </div>

            <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-3">Non Vegetasi</div>
            <div className="flex justify-between items-center bg-[#111318] p-3 rounded-xl border border-orange-500/20 mb-2 group hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_5px_rgba(245,158,11,1)]" />
                <span className="text-slate-300 text-[11px] font-medium">Tambang</span>
              </div>
              <span className="text-orange-400 text-[11px] font-mono">2.643</span>
            </div>

            <div className="flex justify-between items-center bg-[#111318] p-3 rounded-xl border border-blue-500/20 mb-6 group hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,1)]" />
                <span className="text-slate-300 text-[11px] font-medium">Sungai</span>
              </div>
              <span className="text-blue-400 text-[11px] font-mono">92</span>
            </div>

            <div className="mt-auto">
              <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold mb-3">Time Series (HA)</div>
              {/* Fake animated bar chart */}
              <div className="flex items-end gap-1.5 h-16 w-full">
                 {[30, 45, 25, 60, 85, 65, 95].map((h, i) => (
                   <div key={i} className="flex-1 group relative flex justify-center h-full">
                     <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: `${h}%` }}
                       transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                       className={`w-full rounded-t-sm absolute bottom-0 ${i === 6 ? 'bg-emerald-500' : 'bg-slate-700 group-hover:bg-slate-500'}`}
                     />
                   </div>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'live-monitoring',
    title: 'Live Monitoring',
    description: 'Set up autonomous agents to watch the world for you. Get instant alerts when changes are detected in your area of interest.',
    color: 'bg-emerald-500',
    features: ['Planet API Sync', 'Change Detection', 'Webhook Alerts'],
    ui: (
      <div className="w-full h-full bg-[#111318] rounded-[2rem] border border-white/10 flex flex-col shadow-2xl relative overflow-hidden text-xs">
        {/* Top Navbar */}
        <div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-[#0a0c10] z-20">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded flex items-center justify-center bg-blue-500/20 border border-blue-500/50">
              <Globe className="w-3 h-3 text-blue-400" />
            </div>
            <span className="text-white font-bold tracking-wider text-sm">WEBGIS <span className="text-blue-400">BSK</span></span>
            <span className="text-slate-500 text-[10px]">· Monitoring IUP</span>
          </div>
          <div className="w-48 h-7 bg-[#111318] border border-white/10 rounded-full flex items-center px-3">
             <Search className="w-3 h-3 text-slate-500 mr-2" />
             <span className="text-slate-500 text-[9px]">Cari nama perusahaan...</span>
          </div>
        </div>
        
        {/* Main Layout */}
        <div className="flex flex-1 relative overflow-hidden">
          
          {/* Left Sidebar Overlay */}
          <div className="hidden sm:flex absolute left-0 top-0 bottom-0 w-64 bg-[#0a0c10]/95 backdrop-blur-md border-r border-white/5 flex-col p-4 z-10">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 rounded-lg mb-4 text-white font-bold text-[11px] leading-tight shadow-lg">
              Monitoring Izin Usaha Pertambangan di Indonesia
            </div>
            
            <div className="bg-[#111318] p-3 rounded-lg border border-orange-500/30 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-400 font-bold text-[10px] flex items-center gap-1">
                  <Activity className="w-3 h-3" /> DEFORESTASI
                </span>
                <span className="bg-red-500/20 text-red-400 px-2 py-0.5 rounded text-[9px] font-mono">2024</span>
              </div>
              <input type="range" className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500" defaultValue="80" />
              <div className="flex justify-between text-[8px] text-slate-500 mt-1 font-mono">
                <span>2010</span><span>2024</span>
              </div>
            </div>

            <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold mb-2">
              <span>MAP LAYERS</span>
              <span className="text-blue-400">3 aktif</span>
            </div>

            <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
              <div className="bg-[#111318] p-2 rounded-lg border border-orange-500/50 flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <span className="text-slate-200 text-[10px] group-hover:text-white transition-colors">WIUP Pertambangan</span>
                </div>
                <span className="text-slate-500 text-[9px] font-mono">9K</span>
              </div>
              <div className="bg-[#111318] p-2 rounded-lg border border-emerald-500/50 flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-slate-200 text-[10px] group-hover:text-white transition-colors">Kawasan Hutan (Nasional)</span>
                </div>
                <span className="text-slate-500 text-[9px] font-mono">3K</span>
              </div>
              <div className="bg-[#111318] p-2 rounded-lg border border-white/5 flex items-center justify-between opacity-50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-500" />
                  <span className="text-slate-400 text-[10px]">Izin Pinjam Pakai (Operasi)</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Area */}
          <div className="absolute inset-0 bg-[#05080c] overflow-hidden">
            {/* Map Grid / Noise */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#05080c_100%)] opacity-80" />
            
            {/* Abstract Indonesia Map using CSS shapes and SVG for islands */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center mix-blend-screen ml-32 md:scale-[1.2]">
              <svg viewBox="0 0 800 400" className="w-full h-full drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                {/* Simplified Indonesia Islands */}
                <g fill="#1e293b" stroke="#334155" strokeWidth="1">
                  {/* Sumatra */}
                  <path d="M 120,100 L 160,80 L 220,160 L 300,240 L 260,260 Z" />
                  {/* Java */}
                  <path d="M 310,280 L 400,290 L 480,280 L 460,300 L 310,300 Z" />
                  {/* Kalimantan */}
                  <path d="M 340,120 L 400,80 L 500,140 L 480,240 L 380,260 L 340,200 Z" />
                  {/* Sulawesi */}
                  <path d="M 520,160 L 560,120 L 600,180 L 640,180 L 620,240 L 580,260 L 540,200 L 560,180 Z" />
                  {/* Papua */}
                  <path d="M 680,220 L 720,180 L 780,180 L 820,240 L 720,280 Z" />
                </g>
                
                {/* Adding hundreds of yellow/green dots randomly scattered along the map */}
                <g>
                  {[...Array(200)].map((_, i) => {
                    const cx = 150 + Math.random() * 650;
                    const cy = 100 + Math.random() * 200;
                    return (
                      <circle 
                        key={i} 
                        cx={cx} 
                        cy={cy} 
                        r={Math.random() > 0.8 ? 2 : 1} 
                        fill={Math.random() > 0.3 ? "#f59e0b" : "#10b981"} 
                        className={Math.random() > 0.5 ? "animate-pulse" : ""}
                      />
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Coordinate Overlay */}
            <div className="absolute top-4 right-4 bg-[#0a0c10]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[9px] font-mono text-slate-300 shadow-lg">
              LAT <span className="text-blue-400">-1.4371°</span> | LNG <span className="text-blue-400">+117.4488°</span>
            </div>
            
            {/* Map Date Overlay */}
            <div className="absolute bottom-4 left-4 sm:left-72 bg-[#0a0c10]/80 backdrop-blur-md border border-orange-500/30 rounded-lg p-1.5 flex items-center gap-2 shadow-lg">
               <div className="px-3 py-1 bg-[#1A1A1A] rounded text-orange-400 font-bold text-[9px] flex items-center gap-1">
                 <Activity className="w-3 h-3" /> Citra Planet: Nov 2024
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function AppDetails() {
  return (
    <section className="py-16 md:py-32 relative z-10 border-t border-white/10 bg-black" id="apps">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-20 md:gap-48">
          {apps.map((app, idx) => (
            <div key={app.id} className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}>
              
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-3 h-3 rounded-full ${app.color} shadow-[0_0_10px_currentColor]`} />
                  <span className="text-sm font-mono tracking-widest uppercase text-slate-400">{app.title}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                  {app.description.split('.')[0]}.
                </h2>
                <p className="text-lg text-slate-400 mb-8 font-mono leading-relaxed">
                  {app.description.split('.').slice(1).join('.')}
                </p>
                
                <ul className="flex flex-col gap-4 mb-10">
                  {app.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-300 font-mono text-sm">
                      <ChevronRight className={`w-4 h-4 ${app.color.replace('bg-', 'text-')}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`px-6 py-3 border border-white/20 hover:border-white/50 text-white font-mono text-xs uppercase tracking-widest transition-colors rounded-full backdrop-blur-md`}>
                  Explore {app.title}
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] relative"
              >
                {/* Decorative background for the UI */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[2.5rem] p-1">
                  {app.ui}
                </div>
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

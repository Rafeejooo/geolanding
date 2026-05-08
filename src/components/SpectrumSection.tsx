'use client';

import { motion } from 'framer-motion';
import { CloudLightning, Waves, Sprout, PawPrint, Trees, Building2, ArrowRight } from 'lucide-react';

/* ─── Inline SVG illustrations per card ─── */

function WeatherIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="wsky" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#0e4a6e" />
          <stop offset="100%" stopColor="#020810" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#wsky)" />
      {/* Clouds */}
      <ellipse cx="120" cy="80" rx="55" ry="28" fill="#1e3a50" opacity="0.9" />
      <ellipse cx="155" cy="68" rx="40" ry="24" fill="#224260" opacity="0.9" />
      <ellipse cx="90" cy="85" rx="35" ry="20" fill="#1a3348" opacity="0.9" />
      <ellipse cx="280" cy="60" rx="60" ry="26" fill="#1e3a50" opacity="0.7" />
      <ellipse cx="315" cy="50" rx="42" ry="22" fill="#1f3f58" opacity="0.7" />
      {/* Lightning bolts */}
      <polyline points="130,100 120,125 128,125 115,155" stroke="#22d3ee" strokeWidth="2.5" fill="none" opacity="0.9" />
      <polyline points="290,82 280,105 288,105 275,132" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.7" />
      {/* Rain streaks */}
      {[60,80,100,150,170,190,220,240,260,310,330,350].map((x, i) => (
        <line key={i} x1={x} y1={130 + (i % 3) * 10} x2={x - 6} y2={155 + (i % 3) * 10} stroke="#38bdf8" strokeWidth="1" opacity="0.4" />
      ))}
      {/* Glow behind lightning */}
      <ellipse cx="130" cy="128" rx="18" ry="8" fill="#06b6d4" opacity="0.15" />
    </svg>
  );
}

function OceanIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="osea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c2a4a" />
          <stop offset="100%" stopColor="#031525" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#osea)" />
      {/* Horizon glow */}
      <ellipse cx="200" cy="80" rx="220" ry="40" fill="#0ea5e9" opacity="0.08" />
      {/* Wave layers */}
      <path d="M0,120 Q50,100 100,115 Q150,130 200,112 Q250,94 300,110 Q350,126 400,108 L400,200 L0,200 Z" fill="#0c3d5e" opacity="0.9" />
      <path d="M0,138 Q60,118 120,134 Q180,150 240,132 Q300,114 360,130 Q380,136 400,126 L400,200 L0,200 Z" fill="#0a3050" opacity="0.95" />
      <path d="M0,158 Q70,142 140,158 Q210,174 280,155 Q340,138 400,152 L400,200 L0,200 Z" fill="#072540" opacity="1" />
      {/* Foam highlights */}
      <path d="M0,120 Q50,100 100,115 Q150,130 200,112 Q250,94 300,110 Q350,126 400,108" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.35" />
      <path d="M0,138 Q60,118 120,134 Q180,150 240,132 Q300,114 360,130 Q400,142 400,126" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.2" />
      {/* Stars/sparkle */}
      {[[60,40],[180,25],[320,35],[370,55],[30,60]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="1.2" fill="white" opacity="0.5" />
      ))}
    </svg>
  );
}

function AgricultureIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="asky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#052010" />
          <stop offset="60%" stopColor="#071a08" />
          <stop offset="100%" stopColor="#020c04" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#asky)" />
      {/* Field rows — perspective effect */}
      {[0,1,2,3,4,5,6,7].map(i => {
        const y = 80 + i * 16;
        const opacity = 0.3 + i * 0.08;
        return <rect key={i} x="0" y={y} width="400" height="8" fill={i % 2 === 0 ? '#14532d' : '#052e16'} opacity={opacity} rx="1" />;
      })}
      {/* Crop plants */}
      {[30,60,90,120,150,180,210,240,270,300,330,360].map((x, i) => (
        <g key={i}>
          <line x1={x} y1={165} x2={x} y2={148} stroke="#16a34a" strokeWidth="2" opacity="0.8" />
          <ellipse cx={x} cy={145} rx="6" ry="8" fill="#15803d" opacity="0.8" />
          <ellipse cx={x-5} cy={153} rx="5" ry="4" fill="#166534" opacity="0.6" transform={`rotate(-20,${x-5},153)`} />
          <ellipse cx={x+5} cy={153} rx="5" ry="4" fill="#166534" opacity="0.6" transform={`rotate(20,${x+5},153)`} />
        </g>
      ))}
      {/* Satellite beam */}
      <line x1="340" y1="10" x2="200" y2="130" stroke="#4ade80" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
      <polygon points="340,5 332,18 348,18" fill="#4ade80" opacity="0.6" />
      {/* Scan grid overlay */}
      <rect x="120" y="85" width="160" height="70" fill="none" stroke="#4ade80" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />
    </svg>
  );
}

function BiodiversityIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <radialGradient id="bforest" cx="40%" cy="60%" r="70%">
          <stop offset="0%" stopColor="#1e1040" />
          <stop offset="100%" stopColor="#080412" />
        </radialGradient>
      </defs>
      <rect width="400" height="200" fill="url(#bforest)" />
      {/* Trees silhouette */}
      {[20,55,90,130,170,210,250,290,330,365].map((x, i) => {
        const h = 60 + (i % 3) * 20;
        const w = 28 + (i % 2) * 10;
        return (
          <g key={i}>
            <polygon points={`${x},${170 - h} ${x - w/2},170 ${x + w/2},170`} fill="#3b0764" opacity={0.5 + (i%3)*0.15} />
            <polygon points={`${x},${155 - h} ${x - w/2 + 5},155 ${x + w/2 - 5},155`} fill="#4c1d95" opacity={0.4 + (i%3)*0.1} />
          </g>
        );
      })}
      {/* Firefly dots */}
      {[[80,100],[150,85],[220,110],[300,90],[350,105],[60,130],[180,120],[270,75]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="#a78bfa" opacity={0.4 + (i%3)*0.2}>
          <animate attributeName="opacity" values={`${0.2 + (i%3)*0.2};0.8;${0.2 + (i%3)*0.2}`} dur={`${1.5 + i*0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      {/* DNA / orbit rings */}
      <ellipse cx="200" cy="100" rx="80" ry="30" fill="none" stroke="#7c3aed" strokeWidth="0.8" opacity="0.25" />
      <ellipse cx="200" cy="100" rx="110" ry="45" fill="none" stroke="#6d28d9" strokeWidth="0.6" opacity="0.15" />
      {/* Moon */}
      <circle cx="340" cy="35" r="18" fill="#1e1040" />
      <circle cx="348" cy="30" r="15" fill="#2e1065" opacity="0.9" />
    </svg>
  );
}

function ForestryIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#011a14" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#fsky)" />
      {/* Ground */}
      <rect x="0" y="160" width="400" height="40" fill="#052e16" opacity="0.8" />
      {/* Dense forest — back layer */}
      {[0,35,70,105,140,175,210,245,280,315,350,385].map((x,i) => (
        <polygon key={i} points={`${x+15},${90+(i%3)*10} ${x},155 ${x+30},155`} fill="#14532d" opacity="0.6" />
      ))}
      {/* Front layer */}
      {[15,50,85,120,160,195,230,265,300,340,375].map((x,i) => (
        <polygon key={i} points={`${x+12},${105+(i%4)*8} ${x},158 ${x+24},158`} fill="#166534" opacity="0.8" />
      ))}
      {/* Drone path */}
      <path d="M30,50 Q120,30 200,50 Q280,70 370,40" stroke="#34d399" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.5" />
      {/* Drone */}
      <rect x="190" y="44" width="20" height="8" rx="2" fill="#065f46" opacity="0.9" />
      <line x1="186" y1="46" x2="178" y2="42" stroke="#34d399" strokeWidth="1.5" opacity="0.8" />
      <line x1="214" y1="46" x2="222" y2="42" stroke="#34d399" strokeWidth="1.5" opacity="0.8" />
      <circle cx="178" cy="41" r="3" fill="#34d399" opacity="0.7" />
      <circle cx="222" cy="41" r="3" fill="#34d399" opacity="0.7" />
      {/* Scan beam down */}
      <path d="M200,52 L185,110 L215,110 Z" fill="#34d399" opacity="0.06" />
      <line x1="200" y1="52" x2="200" y2="108" stroke="#34d399" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.3" />
    </svg>
  );
}

function LandscapeIllustration() {
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="lcity" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0c0a1e" />
          <stop offset="100%" stopColor="#04030f" />
        </linearGradient>
      </defs>
      <rect width="400" height="200" fill="url(#lcity)" />
      {/* City skyline */}
      {[
        [20,80,30],[55,60,25],[85,90,20],[115,50,30],[150,75,25],
        [180,40,35],[220,65,28],[255,45,30],[290,70,22],[320,55,28],[355,80,30],[385,65,25]
      ].map(([x,h,w],i) => (
        <rect key={i} x={x} y={170-h} width={w} height={h} fill="#1e1b4b" opacity={0.6 + (i%3)*0.15} rx="1" />
      ))}
      {/* Windows */}
      {[[30,130],[60,110],[90,140],[120,100],[155,125],[185,95],[225,115],[260,100],[295,120],[325,105],[360,130]].map(([x,y],i) => (
        <g key={i}>
          <rect x={x+3} y={y} width="4" height="5" fill="#f59e0b" opacity={0.4 + (i%3)*0.2} rx="0.5" />
          <rect x={x+10} y={y+5} width="4" height="5" fill="#fbbf24" opacity={0.3 + (i%2)*0.2} rx="0.5" />
        </g>
      ))}
      {/* Grid lines — city planning overlay */}
      {[80,160,240,320].map((x,i) => (
        <line key={i} x1={x} y1="0" x2={x} y2="200" stroke="#f97316" strokeWidth="0.5" opacity="0.12" strokeDasharray="4 4" />
      ))}
      {[80,130,160].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="400" y2={y} stroke="#f97316" strokeWidth="0.5" opacity="0.12" strokeDasharray="4 4" />
      ))}
      {/* Satellite above */}
      <circle cx="200" cy="25" r="5" fill="#1e1b4b" stroke="#f97316" strokeWidth="1.2" opacity="0.8" />
      <line x1="192" y1="25" x2="180" y2="25" stroke="#f97316" strokeWidth="2" opacity="0.7" />
      <line x1="208" y1="25" x2="220" y2="25" stroke="#f97316" strokeWidth="2" opacity="0.7" />
      {/* Beam down from satellite */}
      <path d="M200,30 L170,160 L230,160 Z" fill="#f97316" opacity="0.04" />
      <line x1="200" y1="30" x2="200" y2="158" stroke="#f97316" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.25" />
    </svg>
  );
}

const spectrumCards = [
  {
    title: 'Weather',
    icon: CloudLightning,
    borderColor: 'border-cyan-500/40',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    glowHover: 'hover:border-cyan-500/70 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    description: 'They guide meteorologists in forecasting patterns, tracking storms, and understanding climate change.',
    Illustration: WeatherIllustration,
  },
  {
    title: 'Oceanography',
    icon: Waves,
    borderColor: 'border-blue-500/40',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    glowHover: 'hover:border-blue-500/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    description: "By measuring sea temperatures and monitoring ecosystems, satellite images unlock insights into our oceans' health and global climate.",
    Illustration: OceanIllustration,
  },
  {
    title: 'Agriculture & Fishing',
    icon: Sprout,
    borderColor: 'border-green-500/40',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    glowHover: 'hover:border-green-500/70 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
    description: 'Helps locate fish populations, assess crop health, and optimize resource use for a thriving agricultural and fishing industry.',
    Illustration: AgricultureIllustration,
  },
  {
    title: 'Biodiversity',
    icon: PawPrint,
    borderColor: 'border-purple-500/40',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    glowHover: 'hover:border-purple-500/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    description: 'Conservation efforts leverage satellite technology to map habitats, monitor ecosystem changes, and protect endangered species.',
    Illustration: BiodiversityIllustration,
  },
  {
    title: 'Forestry',
    icon: Trees,
    borderColor: 'border-emerald-500/40',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    glowHover: 'hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    description: 'Satellite data empowers forest managers to monitor deforestation, track forest health, and protect critical ecosystems.',
    Illustration: ForestryIllustration,
  },
  {
    title: 'Landscape',
    icon: Building2,
    borderColor: 'border-orange-500/40',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    glowHover: 'hover:border-orange-500/70 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
    description: 'Analyzing land use patterns with satellite imagery helps urban planners and environmental agencies make informed decisions.',
    Illustration: LandscapeIllustration,
  },
];

export default function SpectrumSection() {
  return (
    <section className="py-16 md:py-28 relative z-10 bg-[#020204] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 mb-6">
            <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">
              Earth Observation Applications
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            The Spectrum of Satellite Images
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl">
            Satellite Images have numerous applications in a variety of fields
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {spectrumCards.map((card, index) => {
            const Icon = card.icon;
            const { Illustration } = card;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden border ${card.borderColor} ${card.glowHover} bg-[#08090f] transition-all duration-300 cursor-pointer`}
              >
                {/* Illustration area */}
                <div className="relative h-44 overflow-hidden">
                  <Illustration />
                  {/* Bottom fade into card */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#08090f] to-transparent" />
                  {/* Icon badge — top left */}
                  <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl ${card.iconBg} border ${card.borderColor} flex items-center justify-center backdrop-blur-sm`}>
                    <Icon className={`w-5 h-5 ${card.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 pt-3">
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <div className={`w-8 h-0.5 ${card.iconBg} mb-3`} />
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{card.description}</p>
                  <button className={`flex items-center gap-1 text-xs font-bold ${card.iconColor} group-hover:gap-2 transition-all`}>
                    Learn more <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

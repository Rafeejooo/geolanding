'use client';

import { motion } from 'framer-motion';
import { CloudLightning, Waves, Sprout, PawPrint, Trees, Building2, ArrowRight } from 'lucide-react';

const spectrumCards = [
  {
    title: 'Weather',
    icon: CloudLightning,
    borderColor: 'border-cyan-500/40',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    glowHover: 'hover:border-cyan-500/70 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]',
    description: 'They guide meteorologists in forecasting patterns, tracking storms, and understanding climate change.',
    image: 'https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?w=800&q=80',
    gradientFrom: 'from-cyan-900/40',
  },
  {
    title: 'Oceanography',
    icon: Waves,
    borderColor: 'border-blue-500/40',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    glowHover: 'hover:border-blue-500/70 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    description: "By measuring sea temperatures and monitoring ecosystems, satellite images unlock insights into our oceans' health and global climate.",
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    gradientFrom: 'from-blue-900/40',
  },
  {
    title: 'Agriculture & Fishing',
    icon: Sprout,
    borderColor: 'border-green-500/40',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    glowHover: 'hover:border-green-500/70 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]',
    description: 'Helps locate fish populations, assess crop health, and optimize resource use for a thriving agricultural and fishing industry.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    gradientFrom: 'from-green-900/40',
  },
  {
    title: 'Biodiversity',
    icon: PawPrint,
    borderColor: 'border-purple-500/40',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    glowHover: 'hover:border-purple-500/70 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]',
    description: 'Conservation efforts leverage satellite technology to map habitats, monitor ecosystem changes, and protect endangered species.',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80',
    gradientFrom: 'from-purple-900/40',
  },
  {
    title: 'Forestry',
    icon: Trees,
    borderColor: 'border-emerald-500/40',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    glowHover: 'hover:border-emerald-500/70 hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]',
    description: 'Satellite data empowers forest managers to monitor deforestation, track forest health, and protect critical ecosystems.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    gradientFrom: 'from-emerald-900/40',
  },
  {
    title: 'Landscape',
    icon: Building2,
    borderColor: 'border-orange-500/40',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    glowHover: 'hover:border-orange-500/70 hover:shadow-[0_0_30px_rgba(249,115,22,0.15)]',
    description: 'Analyzing land use patterns with satellite imagery helps urban planners and environmental agencies make informed decisions.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
    gradientFrom: 'from-orange-900/40',
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
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden border ${card.borderColor} ${card.glowHover} bg-[#08090f] transition-all duration-300 cursor-pointer`}
              >
                {/* Realistic photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Darken for readability + theme color tint */}
                  <div className="absolute inset-0 bg-black/45" />
                  <div className={`absolute inset-0 bg-linear-to-br ${card.gradientFrom} to-transparent opacity-50`} />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#08090f] to-transparent" />
                  {/* Icon badge */}
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

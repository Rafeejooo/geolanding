'use client';

import { motion } from 'framer-motion';
import { CloudLightning, Waves, Sprout, PawPrint, Trees, Building2, ArrowRight } from 'lucide-react';

const spectrumCards = [
  {
    title: 'Weather',
    icon: CloudLightning,
    color: 'cyan',
    borderColor: 'border-cyan-500/40',
    iconBg: 'bg-cyan-500/20',
    iconColor: 'text-cyan-400',
    gradientFrom: 'from-cyan-900/40',
    gradientTo: 'to-slate-900/80',
    description: 'They guide meteorologists in forecasting patterns, tracking storms, and understanding climate change.',
  },
  {
    title: 'Oceanography',
    icon: Waves,
    color: 'blue',
    borderColor: 'border-blue-500/40',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
    gradientFrom: 'from-blue-900/40',
    gradientTo: 'to-slate-900/80',
    description: "By measuring sea temperatures and monitoring ecosystems, satellite images unlock insights into our oceans' health and global climate.",
  },
  {
    title: 'Agriculture & Fishing',
    icon: Sprout,
    color: 'green',
    borderColor: 'border-green-500/40',
    iconBg: 'bg-green-500/20',
    iconColor: 'text-green-400',
    gradientFrom: 'from-green-900/40',
    gradientTo: 'to-slate-900/80',
    description: 'Helps locate fish populations, assess crop health, and optimize resource use for a thriving agricultural and fishing industry.',
  },
  {
    title: 'Biodiversity',
    icon: PawPrint,
    color: 'purple',
    borderColor: 'border-purple-500/40',
    iconBg: 'bg-purple-500/20',
    iconColor: 'text-purple-400',
    gradientFrom: 'from-purple-900/40',
    gradientTo: 'to-slate-900/80',
    description: 'Conservation efforts leverage satellite technology to map habitats, monitor ecosystem changes, and protect endangered species.',
  },
  {
    title: 'Forestry',
    icon: Trees,
    color: 'emerald',
    borderColor: 'border-emerald-500/40',
    iconBg: 'bg-emerald-500/20',
    iconColor: 'text-emerald-400',
    gradientFrom: 'from-emerald-900/40',
    gradientTo: 'to-slate-900/80',
    description: 'Satellite data empowers forest managers to monitor deforestation, track forest health, and protect critical ecosystems.',
  },
  {
    title: 'Landscape',
    icon: Building2,
    color: 'orange',
    borderColor: 'border-orange-500/40',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
    gradientFrom: 'from-orange-900/40',
    gradientTo: 'to-slate-900/80',
    description: 'Analyzing land use patterns with satellite imagery helps urban planners and environmental agencies make informed decisions.',
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
                className={`group relative rounded-2xl overflow-hidden border ${card.borderColor} bg-[#08090f] hover:border-opacity-80 transition-all duration-300 cursor-pointer`}
              >
                {/* Image area with gradient */}
                <div className={`relative h-44 bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} flex items-center justify-center overflow-hidden`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${card.iconBg} flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${card.iconColor}`} />
                  </div>
                  {/* Decorative circles */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 rounded-full ${card.iconBg} blur-2xl`} />
                  <div className={`absolute -top-8 -left-8 w-24 h-24 rounded-full ${card.iconBg} blur-3xl opacity-50`} />
                </div>

                {/* Content area */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2">{card.title}</h3>
                  <div className={`w-8 h-0.5 ${card.iconBg.replace('/20', '')} mb-3`} />
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

'use client';

import { motion } from 'framer-motion';
import { Database, BarChart3, Monitor, ArrowRight, Shield, Cloud, Zap, Users, Circle } from 'lucide-react';

const features = [
  {
    title: 'Data Hub',
    subtitle: 'Access & Order Satellite Data',
    icon: Database,
    accentColor: 'text-blue-400',
    accentBg: 'bg-blue-500/20',
    borderAccent: 'border-blue-500/30',
    glowColor: 'shadow-[0_0_40px_rgba(59,130,246,0.15)]',
    hoverBorder: 'hover:border-blue-500/50',
    gradientFrom: 'from-blue-900/30',
    gradientTo: 'to-[#08090f]',
    bulletColor: 'text-blue-400',
    bullets: ['Order satellite imagery', 'AOI management', 'Data catalog & archive', 'API access'],
    buttonText: 'Explore Data Hub',
  },
  {
    title: 'Analytics',
    subtitle: 'Transform Data into Insights',
    icon: BarChart3,
    accentColor: 'text-purple-400',
    accentBg: 'bg-purple-500/20',
    borderAccent: 'border-purple-500/30',
    glowColor: 'shadow-[0_0_40px_rgba(168,85,247,0.15)]',
    hoverBorder: 'hover:border-purple-500/50',
    gradientFrom: 'from-purple-900/30',
    gradientTo: 'to-[#08090f]',
    bulletColor: 'text-purple-400',
    bullets: ['Land cover classification', 'Change detection', 'Time series analysis', 'AI & machine learning'],
    buttonText: 'Explore Analytics',
  },
  {
    title: 'Monitoring',
    subtitle: 'Monitor Changes in Real Time',
    icon: Monitor,
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/20',
    borderAccent: 'border-emerald-500/30',
    glowColor: 'shadow-[0_0_40px_rgba(52,211,153,0.15)]',
    hoverBorder: 'hover:border-emerald-500/50',
    gradientFrom: 'from-emerald-900/30',
    gradientTo: 'to-[#08090f]',
    bulletColor: 'text-emerald-400',
    bullets: ['Crop monitoring', 'Deforestation tracking', 'Mining activity detection', 'Alert & notification'],
    buttonText: 'Open Dashboard',
  },
];

const trustBadges = [
  { icon: Shield, title: 'Secure & Reliable', desc: 'Enterprise-grade security and data reliability' },
  { icon: Cloud, title: 'Scalable Platform', desc: 'Built to handle petabytes of geospatial data' },
  { icon: Zap, title: 'Faster Insights', desc: 'AI-powered analytics for faster decision making' },
  { icon: Users, title: 'Built for Everyone', desc: 'Accessible tools for analysts, developers & decision makers' },
];

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group flex flex-col rounded-2xl bg-[#08090f] border ${feature.borderAccent} ${feature.hoverBorder} ${feature.glowColor} overflow-hidden transition-all duration-500`}
    >
      {/* Illustration area */}
      <div className={`relative h-44 bg-gradient-to-br ${feature.gradientFrom} ${feature.gradientTo} flex items-center justify-center overflow-hidden`}>
        <div className={`w-20 h-20 rounded-2xl ${feature.accentBg} border ${feature.borderAccent} flex items-center justify-center`}>
          <Icon className={`w-10 h-10 ${feature.accentColor}`} />
        </div>
        {/* Decorative glow orbs */}
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full ${feature.accentBg} blur-3xl opacity-60`} />
        <div className={`absolute -top-10 -left-10 w-32 h-32 rounded-full ${feature.accentBg} blur-3xl opacity-30`} />
        {/* Decorative grid dots */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 mb-1">
          <h3 className="text-white font-bold text-xl">{feature.title}</h3>
        </div>
        <p className={`text-sm ${feature.accentColor} font-mono mb-4`}>{feature.subtitle}</p>

        <ul className="flex flex-col gap-2.5 mb-6 flex-1">
          {feature.bullets.map((bullet, i) => (
            <li key={i} className="flex items-center gap-2.5 text-slate-300 text-sm">
              <Circle className={`w-1.5 h-1.5 ${feature.accentColor} fill-current shrink-0`} />
              {bullet}
            </li>
          ))}
        </ul>

        <button className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border ${feature.borderAccent} ${feature.accentColor} text-sm font-bold w-full justify-center group-hover:${feature.accentBg} transition-all`}>
          {feature.buttonText}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section className="py-16 md:py-28 relative z-10 border-t border-white/5 bg-[#020204]" id="features">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 font-mono"
          >
            Our Platform
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4"
          >
            End-to-End Geospatial Solution
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-mono"
          >
            From accessing satellite data to generating actionable insight and monitoring changes in real time, our platform empowers smarter decision for a better world
          </motion.p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} index={idx} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10 border-t border-white/10"
        >
          {trustBadges.map((badge, i) => {
            const BadgeIcon = badge.icon;
            return (
              <div key={i} className="flex items-start gap-3 p-4">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <BadgeIcon className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{badge.title}</div>
                  <div className="text-slate-500 text-xs mt-0.5 leading-relaxed">{badge.desc}</div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

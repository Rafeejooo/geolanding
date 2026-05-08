'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronsLeftRight } from 'lucide-react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  beforeLabel?: string;
  afterLabel?: string;
  accentColor?: string;
}

export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = 'Before',
  altAfter = 'After',
  beforeLabel = 'Before',
  afterLabel = 'After',
  accentColor = 'cyan',
}: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(42);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const newPosition = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setSliderPosition(newPosition);
    if (!hasInteracted) setHasInteracted(true);
  }, [isDragging, hasInteracted]);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchStart = () => setIsDragging(true);
  const handleTouchEnd = () => setIsDragging(false);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseUp]);

  const accentMap: Record<string, { line: string; handle: string; label: string; glow: string }> = {
    cyan:   { line: 'bg-cyan-400',   handle: 'border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.5)]',   label: 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300',   glow: 'rgba(6,182,212,0.4)' },
    blue:   { line: 'bg-blue-400',   handle: 'border-blue-400/60 shadow-[0_0_20px_rgba(59,130,246,0.5)]',   label: 'bg-blue-500/20 border-blue-500/40 text-blue-300',   glow: 'rgba(59,130,246,0.4)' },
    indigo: { line: 'bg-indigo-400', handle: 'border-indigo-400/60 shadow-[0_0_20px_rgba(99,102,241,0.5)]', label: 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300', glow: 'rgba(99,102,241,0.4)' },
  };
  const accent = accentMap[accentColor] ?? accentMap.cyan;

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none rounded-xl overflow-hidden cursor-ew-resize"
      style={{ aspectRatio: '16/7' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Before image */}
      <img
        src={beforeImage}
        alt={altBefore}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image — clipped */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={altAfter}
          className="w-full h-full object-cover"
          draggable={false}
        />
        {/* After tint overlay */}
        <div className="absolute inset-0 bg-cyan-950/10" />
      </div>

      {/* Dark overlay both sides */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />

      {/* Labels */}
      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono">{beforeLabel}</span>
      </div>
      <div
        className={`absolute top-3 right-3 px-2.5 py-1 rounded-lg border backdrop-blur-sm transition-opacity duration-300 ${accent.label}`}
        style={{ opacity: sliderPosition < 90 ? 1 : 0 }}
      >
        <span className="text-[10px] font-bold uppercase tracking-widest font-mono">{afterLabel}</span>
      </div>

      {/* Divider line */}
      <div
        className={`absolute top-0 bottom-0 w-px ${accent.line} pointer-events-none`}
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <motion.div
          animate={{ scale: isDragging ? 1.15 : 1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className={`w-9 h-9 rounded-full bg-[#0a0c12] border-2 flex items-center justify-center transition-shadow duration-200 ${accent.handle}`}
        >
          <ChevronsLeftRight className="w-4 h-4 text-white" strokeWidth={2} />
        </motion.div>
      </div>

      {/* Hint pulse — disappears after first interaction */}
      {!hasInteracted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[9px] text-white/50 font-mono uppercase tracking-widest pointer-events-none"
        >
          drag to compare
        </motion.div>
      )}
    </div>
  );
};

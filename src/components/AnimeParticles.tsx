'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';

export default function AnimeParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    
    // Clear previous
    container.innerHTML = '';
    
    const colors = ['#0ea5e9', '#38bdf8', '#0284c7', '#ffffff'];
    const numParticles = 50;
    
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.style.position = 'absolute';
      particle.style.width = Math.random() * 3 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = '50%';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      particle.style.opacity = Math.random().toString();
      container.appendChild(particle);
      
      anime({
        targets: particle,
        translateX: () => anime.random(-100, 100),
        translateY: () => anime.random(-100, 100),
        scale: () => anime.random(1, 3),
        opacity: [
          { value: 0, duration: 500 },
          { value: 1, duration: 1500 },
          { value: 0, duration: 500 }
        ],
        easing: 'linear',
        duration: () => anime.random(3000, 8000),
        loop: true,
        direction: 'alternate'
      });
    }
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-20 pointer-events-none opacity-40" />;
}

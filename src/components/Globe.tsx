'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const GlobeT = dynamic(() => import('react-globe.gl'), { ssr: false });

export default function Globe() {
  const globeRef = useRef<any>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Keep it exactly 1200x1200 or whatever size we pass from parent.
    // For now we will just bind it to window size or container size.
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let currentLng = 0;
    
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      
      // Start slightly offset
      currentLng = 100;
      globeRef.current.pointOfView({ lat: 10, lng: currentLng, altitude: 2 });
    }

    // Force constant rotation
    const interval = setInterval(() => {
      if (globeRef.current) {
        currentLng += 0.15; // Speed of rotation
        globeRef.current.pointOfView({ lat: 10, lng: currentLng, altitude: 2 });
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  if (dimensions.width === 0) return null;

  return (
    <GlobeT
      ref={globeRef}
      width={dimensions.width}
      height={dimensions.height}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      backgroundColor="rgba(0,0,0,0)"
      atmosphereColor="lightskyblue"
      atmosphereAltitude={0.15}
      showGraticules={false}
    />
  );
}

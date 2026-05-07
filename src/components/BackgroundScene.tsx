'use client';

import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('./Globe'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 w-full h-full bg-[#020204]" />
});

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-30 h-screen w-screen bg-[#000000] overflow-hidden pointer-events-none">
      {/* Intense background glow behind earth */}
      <div className="absolute top-[80%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1500px] h-[1000px] bg-blue-600/30 blur-[250px] rounded-[100%] mix-blend-screen" />
      
      {/* Globe Container - Huge and at the very bottom */}
      <div className="absolute top-[90%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100" style={{ transform: 'translate(-50%, -50%) scale(2.2)' }}>
        <Globe />
      </div>
      
      {/* Top Vignette for space depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent h-[50vh] z-10 opacity-100" />
      {/* Edges Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#000000_100%)] z-10 opacity-70" />
    </div>
  );
}

'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export default function Satellite3D() {
  const satRef = useRef<Group>(null);

  useFrame((state) => {
    if (!satRef.current) return;
    const t = state.clock.getElapsedTime();
    satRef.current.position.y = Math.sin(t * 0.5) * 0.2; // Floating effect
    satRef.current.rotation.y = t * 0.2; // Slow rotation
    satRef.current.rotation.z = Math.sin(t * 0.2) * 0.1; // Slight wobble
  });

  return (
    <group ref={satRef} scale={1} rotation={[0.4, -0.6, 0]}>
      {/* Central Body (Cube) */}
      <mesh>
        <boxGeometry args={[0.6, 0.6, 0.6]} />
        <meshStandardMaterial color="#cbd5e1" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Gold Foil / Lens on front */}
      <mesh position={[0, 0, 0.31]}>
        <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} />
        <meshStandardMaterial color="#f59e0b" metalness={1} roughness={0.1} />
      </mesh>

      {/* Solar Panel Left */}
      <mesh position={[-1.2, 0, 0]}>
        <boxGeometry args={[1.6, 0.4, 0.02]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.2} wireframe={true} />
      </mesh>
      {/* Solar Panel Left Solid Background */}
      <mesh position={[-1.2, 0, -0.01]}>
        <boxGeometry args={[1.6, 0.4, 0.01]} />
        <meshStandardMaterial color="#0c4a6e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Left Connector */}
      <mesh position={[-0.35, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2]} rotation={[0, 0, Math.PI/2]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      {/* Solar Panel Right */}
      <mesh position={[1.2, 0, 0]}>
        <boxGeometry args={[1.6, 0.4, 0.02]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.6} roughness={0.2} wireframe={true} />
      </mesh>
      {/* Solar Panel Right Solid Background */}
      <mesh position={[1.2, 0, -0.01]}>
        <boxGeometry args={[1.6, 0.4, 0.01]} />
        <meshStandardMaterial color="#0c4a6e" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Right Connector */}
      <mesh position={[0.35, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2]} rotation={[0, 0, Math.PI/2]} />
        <meshStandardMaterial color="#cbd5e1" />
      </mesh>

      {/* Antenna */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.4]} />
        <meshStandardMaterial color="#ffffff" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.6, 0]}>
        <sphereGeometry args={[0.04]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Earth() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.x = 0.2;
    }
  });

  return (
    <group>
      {/* Outer Glow / Atmosphere */}
      <Sphere args={[2.2, 64, 64]}>
        <meshBasicMaterial
          color="#1e3a8a"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Main Wireframe Globe */}
      <Sphere ref={meshRef} args={[2, 32, 32]}>
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.5}
        />
      </Sphere>

      {/* Inner Core */}
      <Sphere args={[1.95, 32, 32]}>
        <meshBasicMaterial color="#020617" />
      </Sphere>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#60a5fa" />
    </group>
  );
}

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function DustParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particleCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.02;
      pointsRef.current.rotation.x -= delta * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial transparent color="#00e5ff" size={0.03} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  );
}

function ArmoryCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.12;
      wireframeRef.current.rotation.y -= delta * 0.18;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group position={[0, 0, -5]} scale={1.5}>
        {/* Inner solid glass-like core */}
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[2, 0.6, 128, 32]} />
          <meshPhysicalMaterial 
            color="#000000" 
            emissive="#004455"
            emissiveIntensity={0.5}
            roughness={0.2} 
            metalness={0.8} 
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>
        
        {/* Outer wireframe kinetic shell */}
        <mesh ref={wireframeRef}>
          <torusKnotGeometry args={[2.2, 0.4, 100, 16]} />
          <meshBasicMaterial 
            color="#00e5ff" 
            wireframe 
            transparent 
            opacity={0.15} 
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <fog attach="fog" args={['#000000', 8, 30]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#00e5ff" />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#4ade80" />
        <DustParticles />
        <ArmoryCore />
      </Canvas>
      
      {/* Vignette Overlay for that premium Framer dark feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-80" />
    </div>
  );
}

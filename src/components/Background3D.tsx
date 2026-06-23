import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, MeshDistortMaterial, Sphere, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function KineticLiquid() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1;
      groupRef.current.rotation.z = t * 0.05;
      
      // Gentle floating with mouse interaction
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        (state.mouse.x * 2),
        0.05
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        (state.mouse.y * 2),
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        <Sphere args={[2.5, 64, 64]}>
          <MeshDistortMaterial
            ref={materialRef}
            color="#000000"
            envMapIntensity={2}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.9}
            roughness={0.1}
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </group>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-[0] pointer-events-none bg-[#050505]">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#050505']} />
        <fog attach="fog" args={['#050505', 10, 25]} />
        
        {/* Ambient base */}
        <ambientLight intensity={0.2} />
        
        {/* Neon Accent Lights */}
        <pointLight position={[5, 5, 5]} intensity={150} color="#00ffff" /> {/* Cyan */}
        <pointLight position={[-5, -5, 5]} intensity={150} color="#ff00ff" /> {/* Magenta */}
        <pointLight position={[0, 0, -5]} intensity={100} color="#0055ff" /> {/* Deep Blue */}
        
        <Environment preset="city" />
        
        <KineticLiquid />
        
        <ContactShadows 
          position={[0, -4, 0]} 
          opacity={0.5} 
          scale={20} 
          blur={2.5} 
          far={10} 
          resolution={256} 
          color="#00ffff"
          frames={1}
        />
      </Canvas>
      
      {/* Overlay to blend with the rest of the site */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] pointer-events-none" />
      
      {/* Noise texture overlay for a more premium/cinematic feel */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
    </div>
  );
}

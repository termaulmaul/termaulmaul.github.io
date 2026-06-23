import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, Text } from '@react-three/drei';
import * as THREE from 'three';

function AbstractSwitch() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 6,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -(state.mouse.y * Math.PI) / 6,
        0.05
      );
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={[0, 0, 0]} rotation={[0.4, -0.2, 0]}>
        
        {/* Main Base (The Switch Body) */}
        <mesh receiveShadow castShadow>
          <capsuleGeometry args={[1.5, 3, 32, 64]} />
          <meshStandardMaterial 
            color="#2a2a2a" 
            roughness={0.4} 
            metalness={0.6}
            envMapIntensity={1}
          />
        </mesh>

        {/* The Toggle Button (Orange Dot) */}
        <mesh position={[0, 0, 1.45]}>
          <cylinderGeometry args={[0.4, 0.4, 0.2, 32]} />
          <meshStandardMaterial 
            color="#d95a2b" 
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>
        
        {/* Subtle Text Embedded on the Pill */}
        <Text
          position={[0, 1.2, 1.45]}
          fontSize={0.2}
          color="#1a1a1a"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/doto/v1/7ca88q_w8H0E1Xz2p_g_2l37.woff2"
          material-toneMapped={false}
          rotation={[0, 0, -Math.PI / 2]}
          letterSpacing={0.1}
        >
          SDET
        </Text>
      </group>
    </Float>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-[0] pointer-events-none bg-[#404040]">
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 10], fov: 35 }}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={['#404040']} />
        <fog attach="fog" args={['#404040', 8, 20]} />
        
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-mapSize={512}
        />
        <directionalLight 
          position={[-5, 5, -5]} 
          intensity={0.5} 
          color="#ffffff" 
        />
        
        <Environment preset="studio" />
        
        <AbstractSwitch />
        
        <ContactShadows 
          position={[0, -3.5, 0]} 
          opacity={0.4} 
          scale={15} 
          blur={2} 
          far={10} 
          resolution={256} 
          color="#000000"
          frames={1}
        />
      </Canvas>
      
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none" />
    </div>
  );
}

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random points in a sphere
  const positions = useMemo(() => {
    const count = 3000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Create a random position within a sphere volume
      const r = 25 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 30;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#00ffff" size={0.05} sizeAttenuation={true} depthWrite={false} opacity={0.6} />
    </Points>
  );
}

function KineticCore() {
  const ref = useRef<THREE.Mesh>(null);
  const refOuter = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current && refOuter.current) {
      ref.current.rotation.x += delta * 0.2;
      ref.current.rotation.y += delta * 0.3;

      refOuter.current.rotation.x -= delta * 0.1;
      refOuter.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group position={[0, 0, -5]}>
      <Icosahedron ref={ref} args={[3, 1]}>
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.15} />
      </Icosahedron>
      <Icosahedron ref={refOuter} args={[4, 2]}>
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.05} />
      </Icosahedron>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ParticleField />
        <KineticCore />
      </Canvas>
    </div>
  );
}

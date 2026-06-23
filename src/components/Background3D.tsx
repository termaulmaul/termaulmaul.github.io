import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function PlexusNetwork() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const particleCount = 150;
  const maxDistance = 3.5;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      velocities.push({
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
      });
    }
    return { positions, velocities };
  }, []);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const maxLines = (particleCount * (particleCount - 1)) / 2;
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(maxLines * 6), 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(maxLines * 6), 3));
    return geometry;
  }, []);

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({
    vertexColors: true,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.5
  }), []);

  useFrame((_, delta) => {
    if (!pointsRef.current || !linesRef.current) return;
    
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const linePositions = linesRef.current.geometry.attributes.position.array as Float32Array;
    const lineColors = linesRef.current.geometry.attributes.color.array as Float32Array;
    
    let lineIndex = 0;
    let colorIndex = 0;

    for (let i = 0; i < particleCount; i++) {
      positionsArray[i * 3] += velocities[i].x;
      positionsArray[i * 3 + 1] += velocities[i].y;
      positionsArray[i * 3 + 2] += velocities[i].z;

      if (Math.abs(positionsArray[i * 3]) > 10) velocities[i].x *= -1;
      if (Math.abs(positionsArray[i * 3 + 1]) > 10) velocities[i].y *= -1;
      if (Math.abs(positionsArray[i * 3 + 2]) > 5) velocities[i].z *= -1;
    }

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsArray[i * 3] - positionsArray[j * 3];
        const dy = positionsArray[i * 3 + 1] - positionsArray[j * 3 + 1];
        const dz = positionsArray[i * 3 + 2] - positionsArray[j * 3 + 2];
        const distSq = dx * dx + dy * dy + dz * dz;

        if (distSq < maxDistance * maxDistance) {
          const alpha = 1.0 - (Math.sqrt(distSq) / maxDistance);
          
          linePositions[lineIndex++] = positionsArray[i * 3];
          linePositions[lineIndex++] = positionsArray[i * 3 + 1];
          linePositions[lineIndex++] = positionsArray[i * 3 + 2];
          
          linePositions[lineIndex++] = positionsArray[j * 3];
          linePositions[lineIndex++] = positionsArray[j * 3 + 1];
          linePositions[lineIndex++] = positionsArray[j * 3 + 2];

          const r = 0, g = 0.8, b = 1; 
          lineColors[colorIndex++] = r * alpha;
          lineColors[colorIndex++] = g * alpha;
          lineColors[colorIndex++] = b * alpha;
          
          lineColors[colorIndex++] = r * alpha;
          lineColors[colorIndex++] = g * alpha;
          lineColors[colorIndex++] = b * alpha;
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;

    pointsRef.current.rotation.y += delta * 0.05;
    pointsRef.current.rotation.x += delta * 0.02;
    linesRef.current.rotation.y += delta * 0.05;
    linesRef.current.rotation.x += delta * 0.02;
  });

  return (
    <group>
      <Points ref={pointsRef} positions={positions} stride={3}>
        <PointMaterial transparent color="#00e5ff" size={0.08} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
      <lineSegments ref={linesRef} geometry={lineGeometry} material={lineMaterial} />
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[0] pointer-events-none bg-black">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#000', 5, 25]} />
        <PlexusNetwork />
      </Canvas>
    </div>
  );
}

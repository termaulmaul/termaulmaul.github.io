import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'
import * as THREE from 'three'

function BoxGrid() {
  const group = useRef<THREE.Group>(null)
  
  const gridSize = 14
  const spacing = 2.4
  
  const boxes = useMemo(() => {
    const temp = []
    const offset = (gridSize * spacing) / 2
    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        temp.push({
          position: [(x * spacing) - offset, 0, (z * spacing) - offset] as [number, number, number],
          id: `${x}-${z}`,
          distance: Math.sqrt(Math.pow(x - gridSize/2, 2) + Math.pow(z - gridSize/2, 2))
        })
      }
    }
    return temp
  }, [])

  useFrame((state) => {
    if (!group.current) return
    const time = state.clock.getElapsedTime()
    group.current.children.forEach((child, i) => {
      const box = boxes[i]
      // DevOps data pulse animation (sine wave radiating outward)
      child.position.y = Math.sin(time * 1.5 - box.distance * 0.4) * 0.6
    })
  })

  // Geometry shared for performance
  const boxGeometry = useMemo(() => new THREE.BoxGeometry(2, 0.4, 2), [])
  const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(boxGeometry), [boxGeometry])

  return (
    <group ref={group}>
      {boxes.map((box) => (
        <mesh key={box.id} position={box.position} geometry={boxGeometry}>
          <meshStandardMaterial 
            color="#020617" 
            metalness={0.9}
            roughness={0.1}
            emissive="#22c55e"
            emissiveIntensity={0.05}
          />
          <lineSegments geometry={edgesGeometry}>
            <lineBasicMaterial color="#4ade80" opacity={0.25} transparent />
          </lineSegments>
        </mesh>
      ))}
    </group>
  )
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0 opacity-50 pointer-events-none overflow-hidden">
      <Canvas dpr={[1, 2]}>
        <OrthographicCamera 
          makeDefault 
          position={[50, 40, 50]} 
          zoom={22}
          near={-100}
          far={1000}
        />
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 10]} intensity={2} color="#6366f1" />
        <pointLight position={[-10, 10, -10]} intensity={1.5} color="#4ade80" />
        
        {/* Rotate group slightly for dynamic isometric feel */}
        <group position={[0, -6, 0]}>
          <BoxGrid />
        </group>
      </Canvas>
      {/* Vignette & fade out at the bottom */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#030712_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950 pointer-events-none" />
    </div>
  )
}

// Import core Three.js library
import * as THREE from 'three'

// React hooks
import { useRef, useState } from 'react'

// useFrame allows you to run code on every animation frame
import { useFrame } from '@react-three/fiber'

// MeshWobbleMaterial is a fancy material from Drei that wobbles the mesh
import { MeshWobbleMaterial } from '@react-three/drei'

// React Spring for smooth animations on 3D objects
import { useSpring, a } from '@react-spring/three'

// Props type for the Box component
type BoxProps = {
  scale?: number                   // scale multiplier
  position?: [number, number, number] // x, y, z position in 3D space
}

// Box component – a rotating, clickable, hoverable cube
export function Box({ scale = 1, position = [0, 0, 0] }: BoxProps) {
  // Ref to access the Three.js mesh directly
  const meshRef = useRef<THREE.Mesh | null>(null)

  // State to track hover and click interactions
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Rotate the cube every frame
  // delta = time since last frame (smooth rotation even on slow devices)
  useFrame((_, delta) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += delta   // rotate around X-axis
    meshRef.current.rotation.y += delta   // rotate around Y-axis
  })

  // Spring animation for smooth scaling when clicked
  const { animatedScale } = useSpring({
    animatedScale: clicked ? 1.5 : 1, // bigger when clicked
  })

  return (
    // 'a.mesh' is an animated mesh (from react-spring/three)
    <a.mesh
      ref={meshRef}                    // connect ref to the mesh
      position={position}              // place in 3D space
      castShadow                       // this mesh will cast shadows
      scale={animatedScale.to((s) => s * scale)} // apply animated scale
      onClick={() => setClicked(!clicked)}      // toggle clicked state
      onPointerOver={(e) => {
        e.stopPropagation()            // prevent triggering other pointer events
        setHovered(true)               // hover state on
      }}
      onPointerOut={() => setHovered(false)}    // hover state off
    >
      {/* Geometry defines the shape – a box */}
      <boxGeometry />

      {/* Material with wobble effect */}
      {/* Changes color when hovered */}
      <MeshWobbleMaterial
        color={hovered ? 'hotpink' : 'orange'} 
        factor={1}   // how much it wobbles
        speed={2}    // how fast it wobbles
      />
    </a.mesh>
  )
}

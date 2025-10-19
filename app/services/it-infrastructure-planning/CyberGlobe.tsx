"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload } from "@react-three/drei";
import * as THREE from "three";
import earthImg from "../../../public/earth-map.jpg";

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const earthMap = useTexture(earthImg.src);

  // Auto-rotation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthMap} metalness={0.4} roughness={0.7} />
    </mesh>
  );
}

export default function CyberGlobe() {
  return (
    <div className="aspect-square h-full w-full">
      <Canvas>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={2}
            color="#00a79d"
          />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <Globe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

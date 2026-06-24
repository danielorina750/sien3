"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Grid } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function MassingBlocks() {
  const group = useRef<Mesh>(null);
  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = Math.sin(clock.elapsedTime * 0.12) * 0.08;
  });

  return (
    <group position={[2.2, -0.35, -2.5]}>
      {[0, 1, 2, 3].map((item) => (
        <Float key={item} speed={0.75 + item * 0.1} rotationIntensity={0.08} floatIntensity={0.15}>
          <mesh ref={item === 0 ? group : undefined} position={[item * 0.62, item * 0.08, -item * 0.24]}>
            <boxGeometry args={[0.42, 1 + item * 0.34, 0.42]} />
            <meshStandardMaterial color="#a8e845" roughness={0.55} metalness={0.08} transparent opacity={0.15} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function ArchitecturalCanvasInner() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[var(--z-canvas)] opacity-70">
      <Canvas camera={{ position: [0, 1.2, 5], fov: 48 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 2]} intensity={0.95} />
        <Grid
          position={[0, -1.2, 0]}
          args={[12, 12]}
          cellSize={0.6}
          cellThickness={0.35}
          cellColor="#a8e845"
          sectionSize={2.4}
          sectionThickness={0.75}
          sectionColor="#f8f7f2"
          fadeDistance={8}
          fadeStrength={1.6}
          infiniteGrid
        />
        <MassingBlocks />
      </Canvas>
    </div>
  );
}

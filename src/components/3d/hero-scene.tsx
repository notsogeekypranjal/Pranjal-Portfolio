"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Edges,
  Float,
  MeshDistortMaterial,
  Sparkles,
  Sphere,
} from "@react-three/drei";
import { useTheme } from "next-themes";
import { startTransition, useEffect, useMemo, useRef, useState } from "react";
import type { Group, Mesh, PointLight } from "three";
import * as THREE from "three";

type HeroSceneProps = {
  scrollRef?: React.MutableRefObject<number>;
};

function LiquidCore() {
  const mesh = useRef<Mesh>(null);
  const color = useMemo(() => "#7c3aed", []);

  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.x = state.clock.elapsedTime * 0.28;
    m.rotation.y = state.clock.elapsedTime * 0.2;
    const wobble = 1.52 + Math.sin(state.clock.elapsedTime * 1.4) * 0.06;
    m.scale.setScalar(wobble);
  });

  return (
    <Float speed={2.4} rotationIntensity={0.55} floatIntensity={0.6}>
      <Sphere ref={mesh} args={[1, 128, 128]} scale={1.55}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.58}
          speed={3.1}
          roughness={0.06}
          metalness={0.94}
        />
      </Sphere>
    </Float>
  );
}

function TorusLiquid() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.x = state.clock.elapsedTime * 0.18;
    m.rotation.y = -state.clock.elapsedTime * 0.24;
    m.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.65} floatIntensity={0.4}>
      <mesh ref={mesh}>
        <torusKnotGeometry args={[0.85, 0.22, 256, 32]} />
        <MeshDistortMaterial
          color="#22d3ee"
          distort={0.32}
          speed={1.85}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

function CrystalShell() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    m.rotation.x = -state.clock.elapsedTime * 0.14;
    m.rotation.y = state.clock.elapsedTime * 0.22;
  });
  return (
    <mesh ref={mesh} position={[1.35, -0.4, -0.6]} scale={1.05}>
      <icosahedronGeometry args={[1.05, 0]} />
      <meshPhysicalMaterial
        color="#c4b5fd"
        metalness={0.35}
        roughness={0.12}
        transmission={0.65}
        thickness={0.8}
        transparent
        opacity={0.92}
        emissive="#6366f1"
        emissiveIntensity={0.18}
      />
      <Edges color="#e9d5ff" threshold={20} linewidth={1} />
    </mesh>
  );
}

function WireConstellation() {
  const g = useRef<Group>(null);
  useFrame((state) => {
    const gr = g.current;
    if (!gr) return;
    gr.rotation.y = state.clock.elapsedTime * 0.12;
    gr.rotation.x = Math.sin(state.clock.elapsedTime * 0.45) * 0.2;
  });
  return (
    <group ref={g} position={[-1.35, 0.45, 0.2]}>
      <mesh>
        <octahedronGeometry args={[0.38, 0]} />
        <meshBasicMaterial
          color="#c4b5fd"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh rotation={[0.4, 0.2, 0.6]}>
        <octahedronGeometry args={[0.58, 0]} />
        <meshBasicMaterial
          color="#22d3ee"
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>
    </group>
  );
}

function PulseHalo() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    const m = mesh.current;
    if (!m) return;
    const s = 3.2 + Math.sin(state.clock.elapsedTime * 0.9) * 0.25;
    m.scale.setScalar(s);
    const mat = m.material;
    if (mat && "opacity" in mat && typeof mat.opacity === "number") {
      mat.opacity = 0.08 + Math.sin(state.clock.elapsedTime * 1.1) * 0.04;
    }
  });
  return (
    <mesh ref={mesh} rotation={[Math.PI / 2.1, 0, 0]}>
      <torusGeometry args={[2.95, 0.006, 8, 120]} />
      <meshBasicMaterial
        color="#a78bfa"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function OrbitalRings({ scrollRef }: { scrollRef?: React.MutableRefObject<number> }) {
  const g = useRef<Group>(null);
  useFrame((state) => {
    const gr = g.current;
    if (!gr) return;
    const p = scrollRef?.current ?? 0;
    gr.rotation.z = state.clock.elapsedTime * 0.12 + p * 0.85;
    gr.rotation.x = Math.PI / 2.32 + p * 0.38 + Math.sin(state.clock.elapsedTime * 0.2) * 0.04;
  });
  return (
    <group ref={g}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.45, 0.018, 32, 200]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={0.58}
          metalness={1}
          roughness={0.12}
          transparent
          opacity={0.78}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.35, 0.45, 0.25]}>
        <torusGeometry args={[2.78, 0.012, 24, 160]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          metalness={1}
          roughness={0.18}
          transparent
          opacity={0.48}
        />
      </mesh>
    </group>
  );
}

function PulsingLights({ isLight }: { isLight: boolean }) {
  const a = useRef<PointLight>(null);
  const b = useRef<PointLight>(null);
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.intensity = (isLight ? 0.55 : 0.95) + Math.sin(t * 1.8) * 0.22;
      a.current.position.x = Math.sin(t * 0.7) * 1.2;
    }
    if (b.current) {
      b.current.intensity = (isLight ? 0.35 : 0.6) + Math.cos(t * 2.1) * 0.18;
      b.current.position.z = 2.2 + Math.sin(t * 0.5) * 0.4;
    }
  });
  return (
    <>
      <pointLight ref={a} position={[1.5, 2, 2]} color="#f5d0fe" />
      <pointLight ref={b} position={[-2, -0.5, 2.5]} color="#67e8f9" />
    </>
  );
}

function SceneRig({
  scrollRef,
  sparkleCount,
  isLight,
}: {
  scrollRef?: React.MutableRefObject<number>;
  sparkleCount: number;
  isLight: boolean;
}) {
  const root = useRef<Group>(null);

  useFrame((state) => {
    const g = root.current;
    if (!g) return;
    const p = scrollRef?.current ?? 0;
    g.rotation.y = THREE.MathUtils.lerp(
      g.rotation.y,
      p * Math.PI * 0.68 + state.clock.elapsedTime * 0.045,
      0.065,
    );
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, p * 0.38 - 0.08, 0.045);
    g.position.z = THREE.MathUtils.lerp(g.position.z, -0.95 - p * 1.45, 0.055);
  });

  return (
    <group ref={root}>
      <OrbitalRings scrollRef={scrollRef} />
      <PulseHalo />
      <LiquidCore />
      <TorusLiquid />
      <CrystalShell />
      <WireConstellation />
      <Sparkles
        count={sparkleCount}
        scale={9}
        size={2.4}
        speed={0.42}
        opacity={isLight ? 0.28 : 0.48}
        color="#c4b5fd"
      />
      <Sparkles
        count={Math.floor(sparkleCount * 0.45)}
        scale={6}
        position={[1, 0.5, -1]}
        size={1.6}
        speed={0.55}
        opacity={isLight ? 0.18 : 0.32}
        color="#67e8f9"
      />
    </group>
  );
}

export function HeroScene({ scrollRef }: HeroSceneProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  const isLight = mounted && resolvedTheme === "light";
  const fogColor = isLight ? "#e4e7f1" : "#030306";
  const fogNear = isLight ? 8 : 6;
  const fogFar = isLight ? 26 : 22;

  const sparkleCount = useMemo(() => {
    if (typeof window === "undefined") return 44;
    return window.innerWidth < 768 ? 26 : 58;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 h-full min-h-[100dvh] w-full">
      <Canvas
        camera={{ position: [0, 0.15, 5.8], fov: 42 }}
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        className="h-full w-full"
      >
        <color attach="background" args={["transparent"]} />
        <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
        <ambientLight intensity={isLight ? 0.48 : 0.22} />
        <directionalLight
          position={[6, 4, 8]}
          intensity={isLight ? 0.95 : 1.35}
          color={isLight ? "#ffffff" : "#faf5ff"}
        />
        <directionalLight
          position={[-6, -2, -4]}
          intensity={isLight ? 0.35 : 0.45}
          color="#22d3ee"
        />
        <PulsingLights isLight={isLight} />
        <pointLight position={[0, 3, 2]} intensity={isLight ? 0.45 : 0.88} color="#a78bfa" />
        <SceneRig
          scrollRef={scrollRef}
          sparkleCount={sparkleCount}
          isLight={isLight}
        />
      </Canvas>
    </div>
  );
}

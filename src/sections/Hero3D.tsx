import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';
import { ArrowDown } from 'lucide-react';

// Glass-like material with physical properties
const glassMaterial = (color: string, opacity = 0.35) => {
  return new THREE.MeshPhysicalMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity,
    roughness: 0.1,
    metalness: 0.1,
    transmission: 0.2,
    thickness: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.1,
    ior: 1.5,
  });
};

// Floating glass pill shape
function GlassPill({
  position,
  scale,
  color,
  rotationSpeed = 0.2,
  floatSpeed = 1.5,
  floatIntensity = 0.5,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  rotationSpeed?: number;
  floatSpeed?: number;
  floatIntensity?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => glassMaterial(color), [color]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.005;
      meshRef.current.rotation.y += rotationSpeed * 0.003;
    }
  });

  return (
    <Float speed={floatSpeed} floatIntensity={floatIntensity} rotationIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale} material={material}>
        <capsuleGeometry args={[1, 1.5, 8, 16]} />
      </mesh>
    </Float>
  );
}

// Floating glass sphere
function GlassSphere({
  position,
  scale,
  color,
  rotationSpeed = 0.3,
}: {
  position: [number, number, number];
  scale: number;
  color: string;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => glassMaterial(color, 0.3), [color]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * 0.005;
    }
  });

  return (
    <Float speed={2} floatIntensity={0.4} rotationIntensity={0.15}>
      <mesh ref={meshRef} position={position} scale={scale} material={material}>
        <sphereGeometry args={[1, 32, 32]} />
      </mesh>
    </Float>
  );
}

// Floating glass box
function GlassBox({
  position,
  scale,
  color,
  rotationSpeed = 0.25,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const material = useMemo(() => glassMaterial(color, 0.3), [color]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed * 0.004;
      meshRef.current.rotation.z += rotationSpeed * 0.003;
    }
  });

  return (
    <Float speed={1.8} floatIntensity={0.6} rotationIntensity={0.3}>
      <mesh ref={meshRef} position={position} scale={scale} material={material}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </Float>
  );
}

// Scene with all 3D objects
function Scene() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-5, 3, -5]} intensity={0.5} color="#FFE4D6" />
      
      {/* Large orange pill - left */}
      <GlassPill
        position={[-3.5, 1, -2]}
        scale={[0.8, 1.2, 0.8]}
        color="#FF6B35"
        rotationSpeed={0.2}
      />
      
      {/* Cyan pill - top right */}
      <GlassPill
        position={[3, 2, -1.5]}
        scale={[0.9, 0.6, 0.9]}
        color="#00D4FF"
        rotationSpeed={0.3}
      />
      
      {/* Purple pill - bottom right */}
      <GlassPill
        position={[3.5, -1.5, -2.5]}
        scale={[0.7, 1.0, 0.7]}
        color="#A855F7"
        rotationSpeed={0.25}
      />
      
      {/* Yellow pill - bottom left */}
      <GlassPill
        position={[-2.5, -2, -1]}
        scale={[0.8, 0.9, 0.8]}
        color="#FFD93D"
        rotationSpeed={0.15}
      />
      
      {/* Small pink sphere - left middle */}
      <GlassSphere
        position={[-4, -0.5, -1]}
        scale={0.5}
        color="#FF6B9D"
        rotationSpeed={0.4}
      />
      
      {/* Small cyan sphere - top middle */}
      <GlassSphere
        position={[1, 3, -0.5]}
        scale={0.4}
        color="#00D4FF"
        rotationSpeed={0.5}
      />
      
      {/* Orange box - middle right */}
      <GlassBox
        position={[2, 0, -1.5]}
        scale={[0.6, 0.8, 0.6]}
        color="#FF6B35"
      />
      
      {/* Purple box - middle left */}
      <GlassBox
        position={[-1.5, 2.5, -2]}
        scale={[0.5, 0.7, 0.5]}
        color="#A855F7"
      />
      
      <Environment preset="city" />
    </>
  );
}

const Hero3D = () => {
  const scrollToContent = () => {
    document.getElementById('what-this-is')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cream">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-jelly mb-8">
          <span className="text-sm font-medium text-foreground/80">
            Learn from a director who's actually used AI in production
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6">
          AI Creative<br />
          <span className="text-gradient">Systems</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          One-on-one sessions with a creative director who spent 15 years behind the camera.
          Now helping teams learn how to direct AI for real campaigns, not experiments.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#plans"
            className="px-8 py-4 rounded-2xl bg-orange text-white font-semibold text-lg hover:bg-orange/90 transition-all duration-300 hover:scale-105 shadow-lg shadow-orange/25"
          >
            Book a Session
          </a>
          <a
            href="#work"
            className="px-8 py-4 rounded-2xl glass-jelly font-semibold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            See the Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors z-10"
      >
        <span className="text-sm">Scroll</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero3D;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { type BufferGeometry, type Mesh } from "three";

export const CustomGeometry = (props: any) => {
  const meshRef = useRef<Mesh>(null!);
  const geometryRef = useRef<BufferGeometry>(null!);

  const count = 30;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10;
      const y = Math.random();
      const z = (Math.random() - 0.5) * 10;
      arr.set([x, y, z], i * 3);
    }

    return arr;
  }, [count]);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
  });

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, [positions]);

  return (
    <points {...props} ref={meshRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="orange" size={0.5} sizeAttenuation />
    </points>
  );
};

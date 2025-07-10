/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const TorusKnot = (props: any) => {
  const meshRef = useRef<any>(null);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <torusKnotGeometry args={[1, 0.5, 128, 128]} />
      <meshNormalMaterial />
    </mesh>
  );
};
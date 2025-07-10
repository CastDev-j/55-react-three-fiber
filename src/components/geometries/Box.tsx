/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Box = (props: any) => {
  const meshRef = useRef<any>(null);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshNormalMaterial />
    </mesh>
  );
};

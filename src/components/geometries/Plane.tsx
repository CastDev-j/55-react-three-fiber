/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { DoubleSide } from "three";

export const Plane = (props: any) => {
  const meshRef = useRef<any>(null!);

  useFrame((_, delta) => {
    meshRef.current.rotation.z += delta * 0.5;
  });

  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]} ref={meshRef}>
      <planeGeometry args={[10, 10]} />
      <meshNormalMaterial side={DoubleSide} />
    </mesh>
  );
};

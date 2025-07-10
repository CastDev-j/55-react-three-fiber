/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export const TorusKnot = (props: any) => {
  const meshRef = useRef<any>(null);
  const [isActive, setIsActive] = useState(false);

  useFrame((_, delta) => {
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.5;
  });

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <mesh {...props} ref={meshRef} onClick={handleClick}>
      <torusKnotGeometry args={[1, 0.5, 128, 128]} />
      {isActive ? (
        <meshBasicMaterial color={"orange"} />
      ) : (
        <meshNormalMaterial />
      )}
    </mesh>
  );
};
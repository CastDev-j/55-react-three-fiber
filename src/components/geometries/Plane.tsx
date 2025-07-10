/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { DoubleSide } from "three";

export const Plane = (props: any) => {
  const meshRef = useRef<any>(null!);
  const [isActive, setIsActive] = useState(false);

  useFrame((_, delta) => {
    meshRef.current.rotation.z += delta * 0.5;
  });

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <mesh
      {...props}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={meshRef}
      onClick={handleClick}
    >
      <planeGeometry args={[10, 10]} />
      {isActive ? (
        <meshBasicMaterial color={"orange"} side={DoubleSide} />
      ) : (
        <meshNormalMaterial side={DoubleSide} />
      )}
    </mesh>
  );
};

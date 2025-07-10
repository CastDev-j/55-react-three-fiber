/* eslint-disable @typescript-eslint/no-explicit-any */

import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export const Box = (props: any) => {
  const meshRef = useRef<any>(null);

  const [isActive, setIsActive] = useState(false);

  useFrame((_, delta) => {
    meshRef.current.rotation.x += delta * 0.5;
  });

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <mesh {...props} ref={meshRef} onClick={handleClick}>
      <boxGeometry args={[3, 3, 3]} />
      {isActive ? (
        <meshBasicMaterial color={"orange"} />
      ) : (
        <meshNormalMaterial />
      )}
    </mesh>
  );
};

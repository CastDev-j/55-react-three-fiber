import { useFrame } from "@react-three/fiber";
import { Box } from "./geometries/Box";
import { TorusKnot } from "./geometries/TorusKnot";
import { Plane } from "./geometries/Plane";
import { useRef } from "react";
import type { Group } from "three";

export const Models = () => {
  const groupRef = useRef<Group>(null!);

  useFrame((_, delta) => {
      groupRef.current.rotation.y -= delta * 0.5;
  });

  return (
      <group ref={groupRef}>
        <Box position={[2, 0, 0]} />

        <TorusKnot position={[-2, 0, 0]} />

        <Plane position={[0, -2, 0]} />
      </group>
  );
};

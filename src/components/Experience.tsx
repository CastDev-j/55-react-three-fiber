import { Canvas } from "@react-three/fiber";
import { Box } from "./geometries/Box";
import { TorusKnot } from "./geometries/TorusKnot";
import { Plane } from "./geometries/Plane";

export const Experience = () => {

  return (
    <div className="h-screen">
      <Canvas
        className="bg-pink-100"
        camera={{
          fov: 75,
          position: [0, 0, 10],
        }}
      >
        <group>
          <Box position={[2, 0, 0]} />

          <TorusKnot position={[-2, 0, 0]} />

          <Plane position={[0, -2, 0]} />
        </group>
      </Canvas>
    </div>
  );
};

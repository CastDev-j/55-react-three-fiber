import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";
import { Controls } from "./Controls";

export const Experience = () => {
  return (
    <div className="h-[70vh]">
      <Canvas
        className="bg-pink-100"
        camera={{
          fov: 75,
          position: [0, 2, 8],
        }}
      >
        <Models />
        <Controls />
      </Canvas>
    </div>
  );
};

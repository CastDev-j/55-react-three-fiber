import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";
import { Controls } from "./Controls";

export const Experience = () => {
  return (
    <div className="h-[70vh]">
      <Canvas
        className="bg-transparent rounded-lg"
        // orthographic
        camera={{
          fov: 75,
          // zoom: 40,
          position: [0, 4, 12],
          near: 0.1,
          far: 100,
        }}
      >
        {/* Models */}

        <Models />

        {/* Controls */}

        <Controls enableAnimation={false} />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={2} />
        <directionalLight position={[-5, 10, -5]} intensity={2} />
      </Canvas>
    </div>
  );
};

import { Canvas } from "@react-three/fiber";
import { Models } from "./Models";
import { Controls } from "./Controls";

export const Experience = () => {
  return (
    <div className="h-[70vh]">
      <Canvas
        className="bg-pink-100 rounded-lg"
        camera={{
          fov: 75,
          position: [0, 2, 8],
        }}
      >
        {/* Models */}

        <Models />

        {/* Controls */}

        <Controls />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 10, 5]} intensity={2} />
        <directionalLight position={[-5, 10, -5]} intensity={2} />


      </Canvas>
    </div>
  );
};

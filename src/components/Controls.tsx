import {
  extend,
  useFrame,
  useThree,
  type ThreeElement,
} from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/addons";

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: ThreeElement<typeof OrbitControls>;
  }
}

extend({ OrbitControls });

export const Controls = () => {
  const controls = useRef<OrbitControls>(null!);
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  useFrame(() => {
    controls.current.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableDamping
      enablePan={false}
    />
  );
};


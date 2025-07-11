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

interface OrbitControlsProps {
  enableAnimation?: boolean;
}

export const Controls = ({ enableAnimation }: OrbitControlsProps) => {
  const controls = useRef<OrbitControls>(null!);
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);

  const SPEED = 1.5;
  const RADIUS = 3;

  useFrame((_, delta) => {
    controls.current.update();
    
    if (!enableAnimation) return;

    camera.lookAt(0, 0, 0);
    const angle = performance.now() * 0.001 * SPEED;
    camera.position.x += Math.cos(angle) * RADIUS * delta * SPEED ** 2;
    camera.position.z += Math.sin(angle) * RADIUS * delta * SPEED ** 2;
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

import { Box } from "./geometries/Box";
import { TorusKnot } from "./geometries/TorusKnot";
import { Plane } from "./geometries/Plane";
import { CustomGeometry } from "./geometries/CustomGeometry";

export const Models = () => {

  return (
    <group>

      <CustomGeometry position={[0, 4, 0]} />

      <Box position={[2, -1, 0]} />

      <TorusKnot position={[-2, -1, 0]} />

      <Plane position={[0, -3, 0]} />
    </group>
  );
};

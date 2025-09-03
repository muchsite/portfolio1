import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

type TProps = ThreeElements["mesh"];

const Target = (props: TProps) => {
  const targetRef = useRef<Mesh>(null!);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  return (
    <mesh {...props} ref={targetRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;

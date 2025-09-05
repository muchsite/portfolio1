import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type TProps = ThreeElements["mesh"];

const Target = (props: TProps) => {
  const targetRef = useRef<Mesh>(null!);
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;

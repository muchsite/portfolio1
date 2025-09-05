import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/Loading";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Ring";
import HeroCamrea from "../components/HeroCamrea";

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Adrian <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag head-text">Building Products & Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className=" w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HeroCamrea isMobile={false}>
              <HackerRoom
                scale={sizes.deskScale}
                position={
                  sizes.deskPosition as [x: number, y: number, z: number]
                }
                rotation={[0.1, -Math.PI, 0]}
              />
            </HeroCamrea>
            <group>
              <Target
                position={
                  sizes.targetPosition as [x: number, y: number, z: number]
                }
              />
              <ReactLogo
                position={
                  sizes.reactLogoPosition as [x: number, y: number, z: number]
                }
              />
              <Cube
                position={
                  sizes.cubePosition as [x: number, y: number, z: number]
                }
              />
              <Rings
                position={
                  sizes.ringPosition as [x: number, y: number, z: number]
                }
              />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;

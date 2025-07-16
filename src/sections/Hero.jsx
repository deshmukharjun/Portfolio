import { useState, useMemo } from 'react';
import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Button from '../components/Button.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants/index.js';
import { UnsolvedCube } from '../components/UnsolvedCube.jsx';
import { SolvedCube } from '../components/SolvedCube.jsx';

const Hero = () => {
  // State to toggle between cubes
  const [showSolved, setShowSolved] = useState(false);

  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // Memoize sizes calculation for performance
  const sizes = useMemo(() => calculateSizes(isSmall, isMobile, isTablet), [isSmall, isMobile, isTablet]);
  const role = "A Frontend Developer";

  return (
    <section className="min-h-[90dvh] w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-30 mt-20 c-space gap-1">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hey, I am Arjun 
        </p>
        <p className="hero_tag text-gray_gradient">{role}</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas dpr={[1, 1.5]} className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[30, 20, 40]} />

            <HeroCamera isMobile={isMobile}>
              {showSolved ? (
                <SolvedCube
                  scale={sizes.cubeScale}
                  position={sizes.cubePosition}
                  rotation={[0, -Math.PI / 1.5, 0]}
                />
              ) : (
                <UnsolvedCube
                  scale={sizes.cubeScale}
                  position={sizes.cubePosition}
                  rotation={[0, -Math.PI / 1.5, 0]}
                />
              )}
            </HeroCamera>

            {/* Reduced to one ambient and one directional light for performance */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={0.8} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space flex justify-center gap-4">
        <button
          onClick={() => setShowSolved((prev) => !prev)}
          className="w-fit"
        >
          <Button
            name={showSolved ? "Go Back" : "Solve the cube!"}
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-70"
          />
        </button>

        <a
          href="/assets/resume2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit"
        >
          <Button
            name="Download Resume"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-70"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';

import { myProjects, myAppProjects } from '../constants/index.js';
import CanvasLoader from '../components/Loading.jsx';
import DemoMacbook from '../components/DemoMacbook.jsx';
import DemoIphone from '../components/DemoIphone.jsx';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('app'); // Default: App Dev
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const projectList = activeCategory === 'web' ? myProjects : myAppProjects;
  const projectCount = projectList.length;
  const currentProject = projectList[selectedProjectIndex];

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  useGSAP(() => {
    gsap.fromTo('.animatedText', { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [selectedProjectIndex, activeCategory]);

  return (
    <section id='projects' className="c-space p-32">
      <div className="flex items-center justify-between">
        <p className="head-text">My Projects</p>

        {/* Web Dev & App Dev Buttons */}
        <div className="flex gap-4">
          <button
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${
              activeCategory === 'web' ? 'bg-gray-200 text-black' : 'bg-black-300 text-white'
            }`}
            onClick={() => {
              setActiveCategory('web');
              setSelectedProjectIndex(0);
            }}>
            Web Dev
          </button>

          <button
            className={`px-5 py-2 rounded-lg font-semibold transition-all ${
              activeCategory === 'app' ? 'bg-gray-200 text-black' : 'bg-black-300 text-white'
            }`}
            onClick={() => {
              setActiveCategory('app');
              setSelectedProjectIndex(0);
            }}>
            App Dev
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl rounded-lg bg-black-200 shadow-black-200">
          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex items-center gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer">
              <p>{activeCategory === 'web' ? 'Check Live Site' : 'Download APK'}</p>
              <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
            </a>
          </div>

          <div className="flex justify-between items-center mt-7">
            <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
              <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <button className="arrow-btn" onClick={() => handleNavigation('next')}>
              <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
          <Canvas dpr={[1, 1.5]}>
            {/* Reduced to one ambient and one directional light for performance */}
            <ambientLight intensity={1.2} />
            <directionalLight position={[10, 10, 5]} intensity={0.7} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                {activeCategory === 'web' ? (
                  <group scale={1.5} position={[0, -0.5, 1.5]} rotation={[0, 0, 0]}>
                    <DemoMacbook texture={currentProject.texture} />
                  </group>
                ) : (
                  <group scale={1.3} position={[0, 0.4, 1]} rotation={[0, 0, 0]}>
                    <DemoIphone texture={currentProject.texture} />
                  </group>
                )}
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={true} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
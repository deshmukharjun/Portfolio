import { useState } from 'react';
import Globe from 'react-globe.gl';
import { techStack } from '../constants/index.js';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('arjundeshmukh26@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const TechStackItem = ({ name, image }) => (
    <li className="flex items-center gap-3 rounded-lg p-3 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl">
      <div className="p-2 flex items-center justify-center rounded-lg bg-[#80808026]">
        <img src={image} alt={name} className="h-5 w-5" />
      </div>
      <span className="grid-subtext text-sm">{name}</span>
    </li>
  );

  return (
    <section className="c-space p-32" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img 
              src="assets/grid11.png" 
              alt="grid-1" 
              className="w-full sm:h-[276px] object-contain" 
            />
            <div>
              <p className="grid-headtext">Hey, I’m Arjun Deshmukh</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my skills in Web Development and Android Development, 
                creating dynamic and responsive websites and apps.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <ul className="grid grid-cols-2 gap-3 w-full sm:h-[276px] h-fit object-contain">
              {techStack.map((tech) => (
                <TechStackItem key={tech.name} name={tech.name} image={tech.image} />
              ))}
            </ul>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext mb-4">
                I specialize in a variety of languages, frameworks, and tools that allow me to build 
                robust and scalable applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">
                I'm based in <span className="text-white">Pune, Maharashtra</span> and open to remote work worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">
                <a
                  href="https://www.instagram.com/arjun.3d/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn text-white-500 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <img src="assets/instagram.svg" alt="WhatsApp" className="h-6 w-6 mr-2" />
                  <span className="text-center w-full">Instagram</span>
                </a>
                <a
                  href="mailto:arjundeshmukh26@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn text-white-500 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <img src="assets/gmail.svg" alt="Gmail" className="h-6 w-6 mr-2" />
                  <span className="text-center w-full">Email Me</span>
                </a>
                <a
                  href="https://github.com/deshmukharjun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn text-white-500 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <img src="assets/github.svg" alt="GitHub" className="h-6 w-6 mr-2" />
                  <span className="text-center w-full">My GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/arjundeshmukh26/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn text-white-500 hover:text-white transition-colors duration-300 flex items-center"
                >
                  <img src="assets/linkedin.svg" alt="LinkedIn" className="h-6 w-6 mr-2" />
                  <span className="text-center w-full">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img 
              src="assets/grid3.png" 
              alt="grid-3" 
              className="w-full sm:h-[266px] h-fit object-contain" 
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn't just my 
                profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills.
                I enjoy creating spectacular visuals and going out of the box to make something special.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-xl md:text-xl font-medium text-gray_gradient text-white">
                  arjundeshmukh26@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
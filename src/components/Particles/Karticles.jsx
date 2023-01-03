import { useCallback } from 'react';
import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
const Karticles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <Particles
    className='vip'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          colors: {
            value: "#0d47a1",
          },
        },
        fpsLimit: 120,
        
        interactivity: {
          
          
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ff4800",
          },
          links: {
            color: "#ff814f",
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    ></Particles>
  
  );
};

export default Karticles;

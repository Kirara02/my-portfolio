import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={
                {
                    // fps_limit: 120,
                    // background: {                    
                    //     position: "50% 50%",
                    //     repeat: "no-repeat",
                    //     size: "20%",
                    //   },
                    //   fullScreen: {
                    //     zIndex: 1,
                    //   },
                    //   interactivity: {
                    //     events: {
                    //       onClick: {
                    //         enable: true,
                    //         mode: "repulse",
                    //       },
                    //       onHover: {
                    //         enable: true,
                    //         mode: "bubble",
                    //       },
                    //     },
                    //     modes: {
                    //       bubble: {
                    //         distance: 250,
                    //         duration: 2,
                    //         opacity: 0,
                    //         size: 0,
                    //       },
                    //       grab: {
                    //         distance: 400,
                    //       },
                    //       repulse: {
                    //         distance: 400,
                    //       },
                    //     },
                    //   },
                    //   particles: {
                    //     color: {
                    //       value: "#ffffff",
                    //     },
                    //     links: {
                    //       color: {
                    //         value: "#ffffff",
                    //       },
                    //       distance: 150,
                    //       opacity: 0.2,
                    //     },
                    //     move: {
                    //       attract: {
                    //         rotate: {
                    //           x: 800,
                    //           y: 800,
                    //         },
                    //       },
                    //       enable: true,
                    //       outModes: {
                    //         bottom: "out",
                    //         left: "out",
                    //         right: "out",
                    //         top: "out",
                    //       },
                    //       random: true,
                    //       speed: 1,
                    //     },
                    //     number: {
                    //       density: {
                    //         enable: true,
                    //       },
                    //       value: 160,
                    //     },
                    //     opacity: {
                    //       random: {
                    //         enable: true,
                    //       },
                    //       value: {
                    //         min: 0,
                    //         max: 1,
                    //       },
                    //       animation: {
                    //         enable: true,
                    //         speed: 3,
                    //         minimumValue: 0,
                    //       },
                    //     },
                    //     size: {
                    //       random: {
                    //         enable: true,
                    //       },
                    //       value: {
                    //         min: 1,
                    //         max: 3,
                    //       },
                    //       animation: {
                    //         speed: 4,
                    //         minimumValue: 0.3,
                    //       },
                    //     },
                    //   },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            attract: {
                            rotate: {
                                x: 800,
                                y: 800,
                            },
                            },
                            enable: true,
                            outModes: {
                            bottom: "out",
                            left: "out",
                            right: "out",
                            top: "out",
                            },
                            random: true,
                            speed: 3,
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
                }
            }
        />
    );
};

export default Particle;
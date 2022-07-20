import React, { useCallback, useMemo } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadBubblesPreset } from 'tsparticles-preset-bubbles';
import { loadSlim } from 'tsparticles-slim';
import styles from './Particles.module.scss';

export function ParticlesComp() {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: false,
                zIndex: -2,
            },

            particles: {
                shape: {
                    type: 'circle',
                },

                move: {
                    enable: true,
                    random: false,
                    speed: 3,
                },

                color: {
                    value: ['#9BD1FF', '#D5EBFF', '#005898', '#0094FF'],
                    animation: {
                        h: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                        s: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                        l: {
                            count: 0,
                            enable: false,
                            offset: 0,
                            speed: 1,
                            decay: 0,
                            sync: true,
                        },
                    },
                },

                destroy: {
                    mode: 'none',
                    split: {
                        count: 1,
                        factor: {
                            random: {
                                enable: true,
                                minimumValue: 0,
                            },
                            value: 3,
                        },
                        rate: {
                            random: {
                                enable: true,
                                minimumValue: 0,
                            },
                            value: {
                                min: 4,
                                max: 9,
                            },
                        },
                        sizeOffset: true,
                    },
                },

                size: {
                    random: {
                        enable: false,
                        minimumValue: 1,
                    },
                    value: {
                        min: 0.1,
                        max: 30,
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 9,
                        decay: 0,
                        sync: true,
                        destroy: 'max',
                        startValue: 'min',
                        minimumValue: 0.1,
                    },
                },
            },

            emitters: {
                autoPlay: true,
                fill: true,
                life: {
                    wait: false,
                },
                rate: {
                    quantity: 2,
                    delay: 0.1,
                    shape: 'square',
                    startCount: 0,
                },
                size: {
                    mode: 'percent',
                    height: 0,
                    width: 30,
                },
                direction: 'top',
                position: {
                    x: 40,
                    y: 80,
                },
            },

            preset: 'bubbles',
        };
    }, []);

    //
    // particlesJS.load('particles-js', '/vendors/particles.js-master/particles.json', function() {
    //     console.log('callback - particles.js config loaded');
    //         let el = document.querySelector(".particles-js-canvas-el"); el.setAttribute("height", "300px");
    // });

    const particlesInit = useCallback((engine: Engine): any => {
        loadSlim(engine);
        loadBubblesPreset(engine);
    }, []);
    return <Particles className={styles.particles} init={particlesInit} options={options} />;
}

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { loadFull } from "tsparticles";
import { useCallback, useMemo } from "react";
import React from 'react'
import type { Engine } from "tsparticles-engine";
import styles from "../styles/particles.module.scss";
import Script from "next/script";
import {  loadBigCirclesPreset } from "tsparticles-preset-big-circles";

const ParticlesComp = () => {

  const options = useMemo(() => {
      return {
          particles: {
            
              shape: {
                    type: "circle",
              },
              move: {
                    enable: true,
              },
              size: {

              }

          },
              preset: "big-circles",
      };
    }, []);

    const particlesInit = useCallback( (engine: Engine): any=> {
        loadSlim(engine);
        // loadFull(engine);
        loadBigCirclesPreset(engine);
    }, []);
  return <Particles className={styles.particles}
  init ={ particlesInit } options={ options } /> ;
};

export default ParticlesComp;
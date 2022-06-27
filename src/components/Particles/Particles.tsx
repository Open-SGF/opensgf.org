import React, { useCallback, useMemo } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadBigCirclesPreset } from 'tsparticles-preset-big-circles';
import { loadSlim } from 'tsparticles-slim';
import styles from './Particles.module.scss';

export function ParticlesComp() {
    const options = useMemo(() => {
        return {
            particles: {
                shape: {
                    type: 'circle',
                },
                move: {
                    enable: true,
                },
                size: {},
            },
            preset: 'big-circles',
        };
    }, []);

    const particlesInit = useCallback((engine: Engine): any => {
        loadSlim(engine);
        // loadFull(engine);
        loadBigCirclesPreset(engine);
    }, []);
    return <Particles className={styles.particles} init={particlesInit} options={options} />;
}

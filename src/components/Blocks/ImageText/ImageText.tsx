import { ParticlesComp } from '@/components/Particles/Particles';
import React from 'react';
import styles from './ImageText.module.scss';

interface IImageText {
    image: JSX.Element;
    text: JSX.Element;
    enableParticles?: boolean;
    textRight?: boolean;
    imageTextSizeRatio?: number;
}

export function ImageText({
    image,
    text,
    imageTextSizeRatio = 0.5,
    enableParticles = false,
    textRight = false,
}: IImageText): JSX.Element {
    return (
        <div className={`${styles.container} ${textRight ? 'textRight' : ''}`}>
            <div className={styles.textWrapper} style={{ width: imageTextSizeRatio * 100 + '%' }}>
                {text}
            </div>
            <div className={styles.graphicWrapper} style={{ width: (1 - imageTextSizeRatio) * 100 + '%' }}>
                <div className={styles.image}>{image}</div>
                {enableParticles && (
                    <div className={styles.particles}>
                        <ParticlesComp />
                    </div>
                )}
            </div>
        </div>
    );
}

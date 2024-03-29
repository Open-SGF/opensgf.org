import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ImageText.module.scss';

interface IImageText {
    image: JSX.Element;
    text: JSX.Element;
    dotsUrl?: string;
    textRight?: boolean;
    imageTextSizeRatio?: number;
}

const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addEventListener('change', updateTarget);

        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, [updateTarget, width]);

    return targetReached;
};

export function ImageText({
    image,
    text,
    imageTextSizeRatio = 0.5,
    dotsUrl = '',
    textRight = false,
}: IImageText): JSX.Element {
    const isBreakpoint = useMediaQuery(600);

    const textWrapperWidth = isBreakpoint ? '100%' : imageTextSizeRatio * 100 + '%';

    const graphicWrapperWidth = isBreakpoint ? '100%' : (1 - imageTextSizeRatio) * 100 + '%';

    return (
        <div className={`${styles.container} ${textRight ? styles.textRight : ''}`}>
            <div className={styles.textWrapper} style={{ width: textWrapperWidth }}>
                {text}
            </div>
            <div className={styles.graphicWrapper} style={{ width: graphicWrapperWidth }}>
                {image}
                {dotsUrl && <Image src={dotsUrl} alt="" fill />}
            </div>
        </div>
    );
}

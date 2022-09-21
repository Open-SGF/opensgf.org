import Image from 'next/image';
import React from 'react';
import styles from './Stats.module.scss';

export function Stats(): JSX.Element {
    const stats = [
        {
            image: {
                src: '/images/code.svg',
                alt: 'code',
            },
            numberFigure: 100,
            unitName: 'Code For America Brigades',
        },
        {
            image: {
                src: '/images/blueprint.svg',
                alt: 'blueprint',
            },
            numberFigure: 4,
            unitName: 'Projects Completed',
        },
        {
            image: {
                src: '/images/healthcare.svg',
                alt: 'healthcare',
            },
            numberFigure: 1500,
            unitName: 'Hours Volunteered',
        },
    ];

    return (
        <div className={styles.container}>
            {stats.map(({image, numberFigure, unitName}, index) => (
                <div className={styles.card} key={index}>
                    <div className={styles.image}>
                        <Image src={image.src} width={72} height={72} alt={image.alt} />
                    </div>
                    <h3>{numberFigure}</h3>
                    <p>{unitName}</p>
                </div>
            ))}
        </div>
    );
}

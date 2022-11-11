import Image from 'next/image';
import React from 'react';
import styles from './Stats.module.scss';

export function Stats(): JSX.Element {
    const stats = [
        {
            image: {
                src: '/images/icons/healthcare.svg',
                alt: 'healthcare',
            },
            numberFigure: 1500,
            unitName: 'Hours Volunteered',
        },
        {
            image: {
                src: '/images/icons/blueprint.svg',
                alt: 'blueprint',
            },
            numberFigure: 3,
            unitName: 'Projects Completed',
        },
        {
            image: {
                src: '/images/icons/code.svg',
                alt: 'code',
            },
            numberFigure: '60+',
            unitName: 'Code For America Brigades',
        },
    ];

    return (
        <div className={styles.container}>
            {stats.map(({ image, numberFigure, unitName }, index) => (
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

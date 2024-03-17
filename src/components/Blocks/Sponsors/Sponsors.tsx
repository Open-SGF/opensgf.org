import Image from 'next/image';
import React from 'react';
import styles from './Sponsors.module.scss';

export function Sponsors(): JSX.Element {
    const sponsors = [
        {
            src: '/images/sponsors/efactory-color.png',
            alt: 'efactory',
            text: 'efactory',
        },
    ];

    return (
        <div className={styles.wrap}>
            <h2>Our Sponsors</h2>
            <div className={styles.container}>
                {sponsors.map(({ src, alt, text }, index) => (
                    <div className={styles.card} key={index}>
                        <Image src={src} width={300} height={75} alt={alt} />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

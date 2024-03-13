import Image from 'next/image';
import React from 'react';
import styles from './Sponsers.module.scss';

export function Sponsers(): JSX.Element {
    const sponsers = [
        {
            src: '/images/sponsors/efactory-color.png',
            alt: 'efactory',
            text: 'efactory',
        },
    ];

    return (
        <div className={styles.wrap}>
            <h2>Our Sponsers</h2>
            <div className={styles.container}>
                {sponsers.map(({ src, alt, text }, index) => (
                    <div className={styles.card} key={index}>
                        <Image src={src} width={300} height={75} alt={alt} />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

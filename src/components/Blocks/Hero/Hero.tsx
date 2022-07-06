import Image from 'next/image';
import React from 'react';
import styles from './Hero.module.scss';

type IDropdown = {
    children: any,
    imageSrc?: string
}

export function Hero({ children, imageSrc = '/images/group-working.svg' }: IDropdown) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                { children }
            </div>
            <Image
                src={imageSrc}
                width="350"
                height="215"
                alt="Open SGF"
            />
        </div>
    );
}

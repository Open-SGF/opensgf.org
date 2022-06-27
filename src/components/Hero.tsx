import Image from 'next/image';
import React from 'react';
import styles from '@/styles/hero.module.scss';

export function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <h1>Open SGF</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem modi tenetur placeat quae voluptate
                    veniam numquam ipsa maxime earum corporis perspiciatis vero labore ab id incidunt hic, similique cum
                    est.
                </p>
            </div>
            <Image src="/images/group-working.svg" width="350" height="215" alt="Open SGF"/>
        </div>
    );
}

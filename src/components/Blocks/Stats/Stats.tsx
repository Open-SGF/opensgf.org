import Image from 'next/image';
import React from 'react';
import styles from './Stats.module.scss';

export function Stats(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src="/images/code.svg" width={72} height={72} alt="code" />
                </div>
                <h1>100</h1>
                <p>Code For America Brigades</p>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src="/images/blueprint.svg" width={72} height={72} alt="blueprint" />
                </div>
                <h1>4</h1>
                <p>Projects Completed</p>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src="/images/healthcare.svg" width={72} height={72} alt="healthcare" />
                </div>
                <h1>1,500</h1>
                <p>Hours Volunteered</p>
            </div>
        </div>
    );
}

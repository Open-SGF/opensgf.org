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
                <h3>100</h3>
                <p>Code For America Brigades</p>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src="/images/blueprint.svg" width={72} height={72} alt="blueprint" />
                </div>
                <h3>4</h3>
                <p>Projects Completed</p>
            </div>
            <div className={styles.card}>
                <div className={styles.image}>
                    <Image src="/images/healthcare.svg" width={72} height={72} alt="healthcare" />
                </div>
                <h3>1,500</h3>
                <p>Hours Volunteered</p>
            </div>
        </div>
    );
}

import Image from 'next/image';
import React from 'react';
import styles from './ArrowDown.module.scss';

export function ArrowDown(): JSX.Element {
    return (
        <Image src="/images/icons/arrow.svg" width={12} height={8} alt="arrow icon" className={styles.arrowDown} />
    );
}

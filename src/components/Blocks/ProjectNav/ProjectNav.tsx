import Image from 'next/image';
import styles from './ProjectNav.module.scss';
import { useEffect, useMemo, useState } from 'react';

export default function ProjectNav(props): JSX.Element {
    return (
        <div className={props.text == 'Next' ? styles.flippedcontainer : styles.container}>
            <Image
                className={props.text == 'Next' ? styles.nextimage : styles.image}
                src="/images/arrow.svg"
                width={28}
                height={49}
                alt={'arrow'}
            />
            <div className={styles.text}>
                <h3>View {props.text} Project</h3>
                <p>project name</p>
            </div>
        </div>
    );
}

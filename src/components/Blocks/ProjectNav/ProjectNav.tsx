﻿import Image from 'next/image';
import styles from './ProjectNav.module.scss';

interface IProjectNav {
    buttonText: string;
}

export function ProjectNav({ buttonText }: IProjectNav): JSX.Element {
    return (
        <div className={buttonText == 'Next' ? styles.flippedContainer : styles.container}>
            <Image
                className={buttonText == 'Next' ? styles.nextImage : styles.image}
                src="/images/icons/arrow.svg"
                width={28}
                height={49}
                alt={'arrow'}
            />
            <div className={styles.buttonText}>
                <h3 className="h1">View {buttonText} Project</h3>
                <p>project name</p>
            </div>
        </div>
    );
}

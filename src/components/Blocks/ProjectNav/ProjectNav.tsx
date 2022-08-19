import Image from 'next/image';
import styles from './ProjectNav.module.scss';

export function ProjectNav(props: any) {
    const { buttonText } = props;
    return (
        <div className={buttonText == 'Next' ? styles.flippedContainer : styles.container}>
            <Image
                className={buttonText == 'Next' ? styles.nextImage : styles.image}
                src="/images/arrow.svg"
                width={28}
                height={49}
                alt={'arrow'}
            />
            <div className={styles.buttonText}>
                <h3>View {buttonText} Project</h3>
                <p>project name</p>
            </div>
        </div>
    );
}

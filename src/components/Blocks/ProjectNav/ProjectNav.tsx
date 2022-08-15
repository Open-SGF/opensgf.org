import Image from 'next/image';
import styles from './ProjectNav.module.scss';

export function ProjectNav(props: any) {
    const { text } = props;
    return (
        <div className={text == 'Next' ? styles.flippedcontainer : styles.container}>
            <Image
                className={text == 'Next' ? styles.nextimage : styles.image}
                src="/images/arrow.svg"
                width={28}
                height={49}
                alt={'arrow'}
            />
            <div className={styles.text}>
                <h3>View {text} Project</h3>
                <p>project name</p>
            </div>
        </div>
    );
}

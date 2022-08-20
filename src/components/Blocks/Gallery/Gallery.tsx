import styles from './Gallery.module.scss';

export function Gallery(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.image1} />
            <div className={styles.image2} />
            <div className={styles.image3} />
            <div className={styles.image4} />
            <div className={styles.image5} />
        </div>
    );
}

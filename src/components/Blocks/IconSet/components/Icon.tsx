import Image from 'next/image';
import styles from './Icon.module.scss';

export const Icon = () => {
    return (
        <div className={styles.icon}>
            <div className={styles.imageWrapper}>
                <Image src="https://via.placeholder.com/70.png" alt="Image of a user." height="70px" width="70px" />
            </div>
            <span className={styles.name}>Name</span>
            <span className={styles.position}>Job Description</span>
        </div>
    );
};

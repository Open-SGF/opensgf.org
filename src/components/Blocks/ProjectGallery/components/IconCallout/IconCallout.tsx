import Link from 'next/link';
import styles from './IconCallout.module.scss';

interface IIconCallout {
    link: string
}

export function IconCallout({ link }: IIconCallout): JSX.Element {
    return (
        <div className={styles.container}>
            <Link href={link}>
                <button className={styles.bubble}>Help Needed</button>
            </Link>
            <Link href={link}>
                <div className={styles.bubbleTail} />
            </Link>
        </div>
    );
}

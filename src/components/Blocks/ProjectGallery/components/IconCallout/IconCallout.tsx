import Link from 'next/link';
import styles from './IconCallout.module.scss';

export function IconCallout(props: any) {
    return (
        <div className={styles.container}>
            <Link href={props.link}>
                <button className={styles.bubble}>Help Needed</button>
            </Link>
            <Link href={props.link}>
                <div className={styles.bubbleTail} />
            </Link>
        </div>
    );
}

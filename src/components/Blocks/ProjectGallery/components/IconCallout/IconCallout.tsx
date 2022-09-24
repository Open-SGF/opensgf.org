import Link from 'next/link';
import styles from './IconCallout.module.scss';

interface IIconCallout {
    link: string;
    text: string;
}

export function IconCallout({ link, text }: IIconCallout): JSX.Element {
    return (
        <div className={styles.container}>
            <Link href={link}>
                <button className={styles.bubble}>{text}</button>
            </Link>
            <Link href={link}>
                <div className={styles.bubbleTail} />
            </Link>
        </div>
    );
}

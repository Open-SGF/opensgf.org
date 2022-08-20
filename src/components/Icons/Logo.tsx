import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.scss';

interface ILogo {
    url?: string | false;
    height?: number;
    width?: number;
}

export function Logo({ url = false, width = 133, height = 61 }: ILogo): JSX.Element {
    if (typeof url === 'string') {
        return (
            <Link href={url} passHref className={styles.logo}>
                <a>
                    <Image src="/images/open-sgf-logo.svg" width={width} height={height} alt="Open SGF Logo" />
                </a>
            </Link>
        );
    } else {
        return (
            <Image
                src="/images/open-sgf-logo.svg"
                width={width}
                height={height}
                alt="Open SGF Logo"
                className={styles.logo}
            />
        );
    }
}

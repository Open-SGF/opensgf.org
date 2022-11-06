import Image from 'next/image';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Logo.module.scss';

interface ILogo {
    url?: string | false;
    height?: number;
    width?: number;
}

export function Logo({ url = false, width = 133, height = 61 }: ILogo): JSX.Element {
    if (typeof url === 'string') {
        return (
            <SmartLink to={url}>
                <Image src="/images/logos/open-sgf-logo.svg" width={width} height={height} alt="Open SGF Logo" />
            </SmartLink>
        );
    } else {
        return (
            <Image
                src="/images/logos/open-sgf-logo.svg"
                width={width}
                height={height}
                alt="Open SGF Logo"
                className={styles.logo}
            />
        );
    }
}

import Image from 'next/image';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Icon.module.scss';

export type IconData = {
    image: {
        url?: string;
        src: string;
        alt: string;
    };
    title?: React.ReactNode | boolean;
    subtitle?: React.ReactNode | boolean;
};

type IIcon = {
    icon: IconData;
};

export function Icon({ icon: { image, title = <></>, subtitle = false } }: IIcon): React.ReactNode {
    const imageElement: React.ReactNode = <Image src={image.src} alt={image.alt} fill />;
    const titleElement: React.ReactNode = <figcaption className={styles.title}>{title}</figcaption>;
    const subtitleElement: React.ReactNode = <figcaption className={styles.subtitle}>{subtitle}</figcaption>;

    const wrapInLink = (element: React.ReactNode, url: string): React.ReactNode => {
        return <SmartLink to={url}>{element}</SmartLink>;
    };

    if (image.url) {
        return (
            <figure className={styles.icon}>
                <div className={styles.imageWrapper}>{wrapInLink(imageElement, image.url)}</div>
                {title ? wrapInLink(titleElement, image.url) : <></>}
                {subtitle ? wrapInLink(subtitleElement, image.url) : <></>}
            </figure>
        );
    }
    return (
        <figure className={styles.icon}>
            <div className={styles.imageWrapper}>{imageElement}</div>
            {title ? titleElement : <></>}
            {subtitle ? subtitleElement : <></>}
        </figure>
    );
}

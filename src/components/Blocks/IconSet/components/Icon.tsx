import Image from 'next/image';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Icon.module.scss';

export type Icon = {
    image: {
        url?: string;
        src: string;
        alt: string;
    };
    title?: JSX.Element | boolean;
    subtitle?: JSX.Element | boolean;
};

type IIcon = {
    icon: Icon;
};

export function Icon({ icon: { image, title = <></>, subtitle = false } }: IIcon): JSX.Element {
    const imageElement: JSX.Element = <Image src={image.src} alt={image.alt} fill />;
    const titleElement: JSX.Element = <figcaption className={styles.title}>{title}</figcaption>;
    const subtitleElement: JSX.Element = <figcaption className={styles.subtitle}>{subtitle}</figcaption>;

    type WrapElementInLink = (element: JSX.Element, url: string) => JSX.Element;

    const wrapInLink: WrapElementInLink = (element, url) => {
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

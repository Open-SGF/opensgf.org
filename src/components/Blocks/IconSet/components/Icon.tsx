import Image from 'next/image';
import Link from 'next/link';
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
    const imageElement: JSX.Element = <Image src={image.src} alt={image.alt} layout="fill" />;
    const titleElement: JSX.Element = <span className={styles.title}>{title}</span>;
    const subtitleElement: JSX.Element = <span className={styles.subtitle}>{subtitle}</span>;

    type WrapElementInLink = (element: JSX.Element, url: string) => JSX.Element;

    const wrapInLink: WrapElementInLink = (element, url) => {
        return (
            <Link href={url} passHref>
                <a>{element}</a>
            </Link>
        );
    };

    if (image.url) {
        return (
            <div className={styles.icon}>
                <div className={styles.imageWrapper}>{wrapInLink(imageElement, image.url)}</div>
                {title ? wrapInLink(titleElement, image.url) : <></>}
                {subtitle ? wrapInLink(subtitleElement, image.url) : <></>}
            </div>
        );
    }
    return (
        <div className={styles.icon}>
            <div className={styles.imageWrapper}>{imageElement}</div>
            {title ? titleElement : <></>}
            {subtitle ? subtitleElement : <></>}
        </div>
    );
}

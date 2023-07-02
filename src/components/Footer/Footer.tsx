import Image from 'next/image';
import React from 'react';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Footer.module.scss';

export function Footer(): JSX.Element {
    type IconData = {
        url: string;
        src: string;
        alt: string;
    };

    const socialIcons: IconData[] = [
        {
            url: 'https://www.meetup.com/open-sgf/',
            src: '/images/logos/meetup-logo.svg',
            alt: 'Meetup Logo',
        },
        {
            url: 'https://discord.gg/jFD8dZP',
            src: '/images/logos/discord-logo.svg',
            alt: 'Discord Logo',
        },
    ];

    type IconElementGenerator = (iconDataArray: IconData[]) => JSX.Element[];

    const socialIconElementGenerator: IconElementGenerator = (iconDataArray) => {
        return iconDataArray.map(({ url, src, alt }) => {
            return (
                <div className={styles.imageWrapper} key={url}>
                    <SmartLink to={url}>
                        <Image src={src} fill alt={alt} />
                        <div className={styles.backgroundFill} />
                    </SmartLink>
                </div>
            );
        });
    };

    return (
        <div className={styles.pageContainer}>
            <footer className={styles.footer}>
                <div></div>
                <div className={styles.socials}>{socialIconElementGenerator(socialIcons)}</div>
            </footer>
        </div>
    );
}

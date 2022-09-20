import type { Icon } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import React from 'react';
import { UpcomingEvents } from '@/components/Blocks/UpcomingEvents/UpcomingEvents';
import styles from '@/styles/pages/Volunteer.module.scss';

export default function volunteer(): JSX.Element {
    const heroImage: JSX.Element = (
        <div className={styles.heroImage}>
            <Image src={'/images/volunteer-working.svg'} alt="volunteers-working" width={362} height={175} />
        </div>
    );

    const heroText: JSX.Element = (
        <div className={styles.heroText}>
            <h1>Volunteer With Us</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur enim exercitationem impedit iure
                labore libero modi mollitia nesciunt quae quibusdam! Ad animi eveniet excepturi fugiat modi? Ab animi
                fugit rerum.
            </p>
            <h2 className="p"> Skillsets Needed</h2>
            <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
            </ul>
        </div>
    );

    const socialIcons: Icon[] = [
        {
            image: {
                url: 'https://www.meetup.com/open-sgf/',
                src: '/images/meetup-logo.svg',
                alt: 'Meetup Logo',
            },
            title: <div className="h1">Meetup</div>,
        },
        {
            image: {
                url: 'https://discord.gg/jFD8dZP',
                src: '/images/discord-logo.svg',
                alt: 'Discord Logo',
            },
            title: <div className="h1">Discord</div>,
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <ImageText image={heroImage} text={heroText} enableParticles={true} />
            <UpcomingEvents />
            <div className={styles.socialIconWrapper}>
                <IconSet icons={socialIcons} />
            </div>
        </div>
    );
}

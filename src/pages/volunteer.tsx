import type { GetServerSideProps } from 'next';
import type { Icon } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import React from 'react';
import { UpcomingEvents } from '@/components/Blocks/UpcomingEvents/UpcomingEvents';
import { getMeetupEvents } from '@/utils/api';
import styles from '@/styles/pages/Volunteer.module.scss';

export const getServerSideProps: GetServerSideProps = async () => {
    const events = await getMeetupEvents();

    return { props: { events } };
};

export default function volunteer({ events }: { events: MeetupEvent[] }): JSX.Element {
    const heroImage: JSX.Element = (
        <div className={styles.heroImage}>
            <Image src={'/images/volunteer-working.svg'} alt="volunteers-working" width={362} height={175} />
        </div>
    );

    const heroText: JSX.Element = (
        <div className={styles.heroText}>
            <h1>Volunteer With Us</h1>
            <p>
                Open SGF, a Code for America Brigade, provides a forum for local designers; mobile, web, and application
                developers to tackle technical problems for our community. Many organizations lack the necessary funding
                to produce quality technical solutions for their problems. This group aims to close that gap by bringing
                people together to work on these projects weekly. We welcome all skill levels, and no coding experience
                is necessary.
            </p>
            <h2 className="p">Where We Could Use Help</h2>
            <ul>
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Project Management</li>
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
            <UpcomingEvents events={events} />
            <div className={styles.socialIconWrapper}>
                <IconSet icons={socialIcons} />
            </div>
        </div>
    );
}

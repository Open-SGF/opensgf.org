import { getMeetupEvents } from '@/server';
import type { IconData } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import type { Metadata } from 'next';
import styles from '@/styles/pages/Volunteer.module.scss';
import { UpcomingEvents } from '@/components/Blocks/UpcomingEvents/UpcomingEvents';

export const metadata: Metadata = {
    title: 'Volunteer | Open SGF',
};

async function getEvents() {
    return await getMeetupEvents();
}

export const dynamic = 'force-dynamic';

export default async function Volunteer() {
    const events = await getEvents();

    const heroImage = (
        <Image src="/images/icons/volunteer-working.svg" alt="volunteers-working" width={362} height={175} />
    );

    const heroText = (
        <div className={styles.heroText}>
            <h1>Volunteer With Us</h1>
            <p className={styles.groupDescription}>
                We are a volunteer group of designers and developers out of Springfield, Missouri. We provide a forum
                for mobile, web, and application designers and developers to tackle technical problems for our
                community.
            </p>
            <p className={styles.groupDescription}>
                Many organizations lack the necessary funding to produce quality technical solutions for their problems.
                This group aims to close that gap by bringing people together to work on these projects weekly
            </p>
            <h2 className="p">Where We Could Use Help</h2>
            <ul>
                <li>Web Development</li>
                <li>Web Design</li>
                <li>Project Management</li>
            </ul>
        </div>
    );

    const socialIcons: IconData[] = [
        {
            image: {
                url: 'https://www.meetup.com/open-sgf/',
                src: '/images/logos/meetup-logo.svg',
                alt: 'Meetup Logo',
            },
            title: <div className="h1">Meetup</div>,
        },
        {
            image: {
                url: 'https://discord.gg/jFD8dZP',
                src: '/images/logos/discord-logo.svg',
                alt: 'Discord Logo',
            },
            title: <div className="h1">Discord</div>,
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <ImageText image={heroImage} text={heroText} dotsUrl="/images/icons/dots-three.png" />
            <UpcomingEvents events={events} />
            <div className={styles.socialIconWrapper}>
                <IconSet icons={socialIcons} />
            </div>
        </div>
    );
}

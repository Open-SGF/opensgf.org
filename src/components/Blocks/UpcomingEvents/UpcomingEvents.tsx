import { EventCard } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import React from 'react';
import styles from './UpcomingEvents.module.scss';

export function UpcomingEvents(): JSX.Element {
    const events: MeetupEvent[] = [
        {
            id: '0',
            image: {
                src: '/images/rectangle-1.png',
                alt: '',
            },
            date: '1970-01-01',
            title: 'Title',
            description: 'Description',
        },
        {
            id: '0',
            image: {
                src: '/images/rectangle-1.png',
                alt: '',
            },
            date: '1970-01-01',
            title: 'Title',
            description: 'Description',
        },
        {
            id: '0',
            image: {
                src: '/images/rectangle-1.png',
                alt: '',
            },
            date: '1970-01-01',
            title: 'Title',
            description: 'Description',
        },
    ];

    return (
        <div className={styles.container}>
            <hr />
            <h2 className="p">View Upcoming Events</h2>
            <div className={styles.cardWrapper}>
                {events.map((event) => (
                    <EventCard event={event} key={event.id} />
                ))}
            </div>
            <hr />
        </div>
    );
}

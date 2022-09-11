import { EventCard } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import React from 'react';
import styles from './UpcomingEvents.module.scss';

export function UpcomingEvents(): JSX.Element {
    return (
        <div className={styles.container}>
            <hr />
            <h2 className="p">View Upcoming Events</h2>
            <div className={styles.cardWrapper}>
                <EventCard />
                <EventCard />
            </div>
            <hr />
        </div>
    );
}

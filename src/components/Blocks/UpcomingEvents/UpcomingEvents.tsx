import React from 'react';
import styles from './UpcomingEvents.module.scss';
import { EventCard } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';

export function UpcomingEvents() {
    return (
        <div className={styles.container}>
            <hr />
            <h1>View Upcoming Events</h1>
            <div className={styles.cardWrapper}>
                <EventCard />
                <EventCard />
            </div>
            <hr />
        </div>
    );
}

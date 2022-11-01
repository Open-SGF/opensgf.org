import Image from 'next/image';
import React from 'react';
import styles from './EventCard.module.scss';

export type MeetupEvent = {
    title: string;
    eventUrl: string;
    description: string;
    duration: string;
    endTime: string;
    going: number;
    imageUrl: string;
    imageAlt: string;
    dateTime: string;
    timezone: string;
    shortUrl: string;
};

interface IEventCard {
    event: MeetupEvent;
}

export function EventCard({ event: { imageUrl, imageAlt, title, dateTime, description } }: IEventCard): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.headerStripe} />
            <div className={styles.body}>
                <div className={styles.imageWrapper}>
                    <Image src={imageUrl} alt={imageAlt} layout="fill" />
                </div>
                <div className={styles.textContent}>
                    <div className={styles.eventDate}>{dateTime}</div>
                    <div className={styles.eventTitle}>{title}</div>
                    <div className={styles.eventDescription}>{description}</div>
                </div>
            </div>
        </div>
    );
}

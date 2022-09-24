import Image from 'next/image';
import React from 'react';
import styles from './EventCard.module.scss';

export type MeetupEvent = {
    id: string;
    image: {
        src: string;
        alt: string;
    };
    date: string;
    title: string;
    description: string;
};

interface IEventCard {
    event: MeetupEvent;
}

export function EventCard({ event: { image, date, title, description } }: IEventCard): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.headerStripe} />
            <div className={styles.body}>
                <div className={styles.imageWrapper}>
                    <Image src={image.src} alt={image.alt} layout="fill" />
                </div>
                <div className={styles.textContent}>
                    <div className={styles.eventDate}>{date}</div>
                    <div className={styles.eventTitle}>{title}</div>
                    <div className={styles.eventDescription}>{description}</div>
                </div>
            </div>
        </div>
    );
}

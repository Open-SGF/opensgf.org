import dayjs, { extend } from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import styles from './EventCard.module.scss';

export type MeetupEvent = {
    title: string;
    eventUrl: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    dateTime: string;
};

interface IEventCard {
    event: MeetupEvent;
}

export function EventCard({
    event: { imageUrl, imageAlt, title, dateTime, description, eventUrl },
}: IEventCard): JSX.Element {
    extend(advancedFormat);

    const timeReadable = dayjs(dateTime).format('dddd, MMMM Do [at] h:mm a');

    return (
        <SmartLink to={eventUrl}>
            <div className={styles.container}>
                <div className={styles.headerStripe} />
                <div className={styles.body}>
                    <div className={styles.imageWrapper}>
                        <Image src={imageUrl} alt={imageAlt} fill />
                    </div>
                    <div className={styles.textContent}>
                        <div className={styles.eventDate}>{timeReadable}</div>
                        <div className={styles.eventTitle}>{title}</div>
                        <div className={styles.eventDescription}>{description}</div>
                    </div>
                </div>
            </div>
        </SmartLink>
    );
}

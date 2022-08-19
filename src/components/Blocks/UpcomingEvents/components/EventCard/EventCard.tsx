import Image from 'next/image';
import React from 'react';
import styles from './EventCard.module.scss';

export function EventCard() {
    return (
        <div className={styles.container}>
            <div className={styles.headerStripe} />
            <div className={styles.body}>
                <div className={styles.imageWrapper}>
                    <Image src="/images/meetup-logo.svg" alt="image" layout="fill" />
                </div>
                <div className={styles.textContent}>
                    <div className={styles.eventDate}>Lorem Ipsum</div>
                    <div className={styles.eventTitle}>Lorem Ipsum</div>
                    <div className={styles.eventDescription}>Lorem Ipsum</div>
                </div>
            </div>
        </div>
    );
}

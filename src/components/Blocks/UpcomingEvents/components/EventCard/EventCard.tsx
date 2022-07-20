import React from 'react';
import styles from './EventCard.module.scss';

export function EventCard() {
    return (
        <div className={styles.container}>
            <div className={styles.headerStripe}></div>
            <div className={styles.body}>
                <img src="" alt="image" />
                <div className={styles.textContent}>
                    <div>Lorem Ipsum</div>
                    <div>Lorem Ipsum</div>
                    <div>Lorem Ipsum</div>
                </div>
            </div>
        </div>
    );
}

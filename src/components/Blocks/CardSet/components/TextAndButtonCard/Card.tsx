import type { ReactElement } from 'react';
import styles from './Card.module.css';

interface ICard {
    heading: string;
    text: string;
    button: ReactElement;
}

export const Card = ({ heading, text, button }: ICard) => {
    return (
        <div className={styles.cardContainer}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.text}>{text}</p>
            <div className={styles.button}>
                {/* double check the syntax of the following line -- I want to do it without the ternary */}
                {button ? button : ''}
            </div>
        </div>
    );
};

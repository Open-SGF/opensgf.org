import styles from './TextAndButtonCard.module.css';
import { ITextAndButtonCard } from './ITextAndButtonCard';

export const TextAndButtonCard = ({heading, text, button}: ITextAndButtonCard) => {
    return (
        <div>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.text}>{text}</p>
            {/* double check the syntax of the following line -- I want to do it without the ternary */}
            {button ? button : ''}
        </div>
    )
}
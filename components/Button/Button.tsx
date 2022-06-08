import styles from './Button.module.css';
import { IButton } from './IButton';

export const FilledButton = ({text, onClick}: IButton) => {
    return <button className={styles.button} onClick={onClick}>{text}</button>;
}
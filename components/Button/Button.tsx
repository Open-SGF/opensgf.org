import styles from './Button.module.css';

interface IButton {
    text: string;
    href: string;
}

export const Button = ({text, href}: IButton) => {
    return <button className={styles.button}><a href={href}>{text}</a></button>;
}
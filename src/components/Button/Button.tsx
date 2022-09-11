import styles from './Button.module.scss';

interface IButton {
    text: string;
    href: string;
    className: string;
}

export const Button = ({ text, href, className }: IButton): JSX.Element => {
    return (
        <button className={`${styles.button} ${className}`}>
            <a href={href}>{text}</a>
        </button>
    );
};

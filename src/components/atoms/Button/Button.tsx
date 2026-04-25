import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Button.module.scss';

interface IButton {
    text: string;
    href?: string;
}

export const Button = ({ text, href = '' }: IButton): React.ReactNode => {
    return <button className={styles.button}>{href ? <SmartLink to={href}>{text}</SmartLink> : <p>{text}</p>}</button>;
};

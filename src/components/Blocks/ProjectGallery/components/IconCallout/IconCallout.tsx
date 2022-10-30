import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './IconCallout.module.scss';

interface IIconCallout {
    link: string;
    text: string;
}

export function IconCallout({ link, text }: IIconCallout): JSX.Element {
    return (
        <div className={styles.container}>
            <SmartLink to={link}>
                <button className={styles.bubble}>{text}</button>
            </SmartLink>
            <SmartLink to={link}>
                <div className={styles.bubbleTail} />
            </SmartLink>
        </div>
    );
}

import { ChatBubbleLeft } from '@/components/Icons/ChatBubbleLeft/ChatBubbleLeft';
import { ChatBubbleRight } from '@/components/Icons/ChatBubbleRight/ChatBubbleRight';
import styles from './ChatBubble.module.scss';

export function ChatBubble(): JSX.Element {
    const clientIssue =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.';
    const ourSolution =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.';

    return (
        <div className={styles.container}>
            <div className={styles.bubble}>
                <div className={styles.imageWrapper}>
                    <ChatBubbleLeft />
                </div>
                <div className={styles.textWrapper}>
                    <div className={`${styles.title} h1`}>Client Issue</div>
                    <div className={styles.body}>{clientIssue}</div>
                </div>
            </div>
            <div className={styles.bubble}>
                <div className={styles.imageWrapper}>
                    <ChatBubbleRight />
                </div>
                <div className={styles.textWrapper}>
                    <div className={`${styles.title} h1`}>Our Solution</div>
                    <div className={styles.body}>{ourSolution}</div>
                </div>
            </div>
        </div>
    );
}

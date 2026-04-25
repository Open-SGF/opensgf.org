import { ChatBubble } from '@/components/Icons/ChatBubble/ChatBubble';
import styles from './ChatBubbles.module.scss';
import { lightBlue, darkBlue } from '@/lib/variables';

interface IChatBubbles {
    leftText: string;
    rightText: string;
}

export function ChatBubbles({ leftText, rightText }: IChatBubbles): React.ReactNode {
    return (
        <div className={styles.container}>
            <div className={styles.bubble}>
                <div className={styles.imageWrapper}>
                    <ChatBubble color={lightBlue} />
                </div>
                <div className={styles.textWrapper}>
                    <div className={`${styles.title} h1`}>Client Issue</div>
                    <div className={styles.body}>{leftText}</div>
                </div>
            </div>
            <div className={styles.bubble}>
                <div className={styles.imageWrapper}>
                    <ChatBubble color={darkBlue} mirror={true} />
                </div>
                <div className={styles.textWrapper}>
                    <div className={`${styles.title} h1`}>Our Solution</div>
                    <div className={styles.body}>{rightText}</div>
                </div>
            </div>
        </div>
    );
}

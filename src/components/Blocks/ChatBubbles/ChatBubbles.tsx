import { ChatBubble } from '@/components/Icons/ChatBubble/ChatBubble';
import styles from './ChatBubbles.module.scss';
import variables from '@/styles/utils/variables.module.scss';

interface IChatBubbles {
    leftText: string;
    rightText: string;
}

export function ChatBubbles({ leftText, rightText }: IChatBubbles): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.bubble}>
                <div className={styles.imageWrapper}>
                    <ChatBubble color={variables.lightBlue} />
                </div>
                <div className={styles.textWrapper}>
                    <div className={`${styles.title} h1`}>Client Issue</div>
                    <div className={styles.body}>{leftText}</div>
                </div>
            </div>
            <div className={styles.bubble}>
                <div className={styles.imageWrapper}>
                    <ChatBubble color={variables.darkBlue} mirror={true} />
                </div>
                <div className={styles.textWrapper}>
                    <div className={`${styles.title} h1`}>Our Solution</div>
                    <div className={styles.body}>{rightText}</div>
                </div>
            </div>
        </div>
    );
}

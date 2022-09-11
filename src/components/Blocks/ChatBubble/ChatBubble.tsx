import Image from 'next/image';
import styles from './ChatBubble.module.scss';

export function ChatBubble(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.columnOne}>
                    <div className={styles.columnBubble}>
                        <Image
                            src="/images/light-blue-chat-bubble.svg"
                            alt="A chat bubble about a client issue"
                            width="526.03px"
                            height="300px"
                        />
                        <div className={styles.bubbleChat}>
                            <div className={`${styles.bubbleHeader} h1`}>Client Issue</div>
                            <div className={styles.chat}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.columnTwo}>
                    <div className={styles.columnBubble}>
                        <Image
                            src="/images/dark-blue-chat-bubble.svg"
                            alt="A chat bubble about a client issue"
                            width="526.03px"
                            height="300px"
                        />
                        <div className={styles.bubbleChat}>
                            <div className={`${styles.bubbleHeader} h1`}>Our Solution</div>
                            <div className={styles.chat}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

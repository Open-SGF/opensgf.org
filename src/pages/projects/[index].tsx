import { Hero } from '@/components/Blocks/Hero/Hero';
import styles from '@/styles/Home.module.scss';

export default function Project(): JSX.Element {
    return (
        <div className={styles.container}>
            Project Page
            <Hero />
            <div>Project Detail Block</div>
            <div>Chat Bubble Block</div>
            <div>Gallery Block</div>
            <div>Previous Next Button Block</div>
        </div>
    );
}

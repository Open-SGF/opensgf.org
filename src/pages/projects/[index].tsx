import styles from '@/styles/Home.module.scss';
import {Hero} from "@/components/Blocks/Hero/Hero";

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

import { Hero } from '@/components/Blocks/Hero/Hero';
import styles from '@/styles/Home.module.scss';
import {ProjectDetails} from "@/components/Blocks/ProjectDetails/ProjectDetails";

export default function Project(): JSX.Element {
    return (
        <div className={styles.container}>
            <Hero>
                <div>Content</div>
            </Hero>
            <ProjectDetails />
            <div>Chat Bubble Block</div>
            <div>Gallery Block</div>
            <div>Previous Next Button Block</div>
        </div>
    );
}

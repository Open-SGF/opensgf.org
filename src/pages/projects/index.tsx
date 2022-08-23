import { ProjectGallery } from '@/components/Blocks/ProjectGallery/ProjectGallery';
import styles from '@/styles/pages/Projects.module.scss';

export default function Projects(): JSX.Element {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Projects</h1>
            <ProjectGallery />
        </div>
    );
}

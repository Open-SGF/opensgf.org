import { ProjectGallery } from '@/components/Blocks/ProjectGallery/ProjectGallery';
import styles from '@/styles/Projects.module.scss';

export default function Projects(): JSX.Element {
    return (
        <div>
            <h1 className={styles.title}>Projects</h1>
            <ProjectGallery />
        </div>
    );
}

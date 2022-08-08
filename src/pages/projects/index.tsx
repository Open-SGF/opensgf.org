import styles from '@/styles/Home.module.scss';
import { ProjectGallery } from '@/components/Blocks/ProjectGallery/ProjectGallery';

export default function Projects(): JSX.Element {
    return (
        <div className={styles.container}>
            <ProjectGallery />
        </div>
    );
}

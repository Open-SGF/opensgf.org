import { Card } from '@/components/Blocks/ProjectGallery/components/Card/Card';
import { projects } from '@/utils/projectData';
import styles from './ProjectGallery.module.scss';

export function ProjectGallery(): React.ReactNode {
    return (
        <div className={styles.cardWrapper}>
            {projects.map((project) => (
                <Card project={project} key={project.id} />
            ))}
        </div>
    );
}

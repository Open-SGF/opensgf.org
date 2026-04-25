import type { Metadata } from 'next';
import { ProjectGallery } from '@/components/Blocks/ProjectGallery/ProjectGallery';
import styles from '@/styles/pages/Projects.module.scss';

export const metadata: Metadata = {
    title: 'Projects | Open SGF',
};

export default function Projects() {
    return (
        <div className={styles.pageWrapper}>
            <h1 className={styles.title}>Projects</h1>
            <ProjectGallery />
        </div>
    );
}

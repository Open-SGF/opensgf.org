import { Card } from '@/components/Blocks/ProjectGallery/components/Card/Card';
import styles from './ProjectGallery.module.scss';

export function ProjectGallery(): JSX.Element {
    type projectSummary = {
        id: string;
        title: string;
        link: string;
        image: {
            src: string;
            alt: string;
        };
        inProgress: boolean;
        helpWanted: boolean;
    };

    const projects: Array<projectSummary> = [
        {
            id: '0',
            title: 'MOJobs Mobile App',
            link: '/projects/mo-jobs',
            image: {
                src: '/images/mo-jobs-landing.jpg',
                alt: 'A preview of the MOJobs mobile app.',
            },
            inProgress: true,
            helpWanted: true,
        },
        {
            id: '1',
            title: 'Motherhood Reclaimed Website',
            link: '/projects/motherhood-reclaimed',
            image: {
                src: '/images/motherhood-reclaimed-landing.jpg',
                alt: 'A preview of motherhoodreclaimed.org',
            },
            inProgress: false,
            helpWanted: false,
        },
    ];

    return (
        <div className={styles.cardWrapper}>
            {projects.map((project) => (
                <Card project={project} key={project.id} />
            ))}
        </div>
    );
}

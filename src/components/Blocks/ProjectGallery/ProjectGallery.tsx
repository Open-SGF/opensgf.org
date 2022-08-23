import { Card } from '@/components/Blocks/ProjectGallery/components/Card/Card';
import styles from './ProjectGallery.module.scss';

export function ProjectGallery(): JSX.Element {
    type projectSummary = {
        id: string,
        title: string,
        link: string,
        image: {
            src: string,
            alt: string,
        },
        inProgress: boolean,
        helpWanted: boolean,
    }

    const projects: Array<projectSummary> = [
        {
            id: '0',
            title: 'Motherhood Reclaimed Website',
            link: '/projects/project',
            image: {
                src: 'https://via.placeholder.com/300.png',
                alt: 'A preview of motherhoodreclaimed.org',
            },
            inProgress: true,
            helpWanted: true,
        },
        {
            id: '1',
            title: 'MOJobs Mobile App',
            link: '/projects/project',
            image: {
                src: 'https://via.placeholder.com/300.png',
                alt: 'A preview of the MOJobs mobile app.',
            },
            inProgress: true,
            helpWanted: false,
        },
        {
            id: '2',
            title: 'SGF Covid Support',
            link: '/projects/project',
            image: {
                src: 'https://via.placeholder.com/300.png',
                alt: 'A preview of the SGF Covid Support project.',
            },
            inProgress: true,
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

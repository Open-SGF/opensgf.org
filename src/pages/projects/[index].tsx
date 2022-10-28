import { ChatBubbles } from '@/components/Blocks/ChatBubbles/ChatBubbles';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { ProjectNav } from '@/components/Blocks/ProjectNav/ProjectNav';
import React from 'react';
import styles from '@/styles/pages/Project.module.scss';
import { useRouter } from 'next/router';

export default function Project(): JSX.Element {
    const moJobsProjectData = {
        id: '0',
        slug: 'mo-jobs',
        name: 'MOJobs Mobile App',
        description:
            'An easy, free phone app for finding nearby job postings relative' + ' to your location or home address.',
        skillsNeeded: ['Development', 'Project Management'],
        links: [
            {
                label: 'https://github.com/Open-SGF/portal-to-work-client',
                url: 'https://github.com/Open-SGF/portal-to-work-client',
            },
            {
                label: 'https://github.com/Open-SGF/portal-to-work-api',
                url: 'https://github.com/Open-SGF/portal-to-work-api',
            },
        ],
        toolsUsed: [
            {
                label: 'Fastify',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'PostgreSQL',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'Typescript',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'TypeORM',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'Vue',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'Ionic',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
        ],
        contributors: [
            {
                name: 'Levi Zitting',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'Ethan Zitting',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'Zach Bradshaw',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
        ],
        clientIssue: 'People without cars should have an easier time finding close' + ' jobs.',
        ourSolution: 'Make a free, easy mobile app that shows jobs nearby by foot, or' + ' by bus route.',
    };

    const motherhoodReclaimedData = {
        id: '0',
        slug: 'motherhood-reclaimed',
        name: 'Motherhood Reclaimed',
        description: 'A website for an organization focused on reunited children with' + ' their mothers.',
        skillsNeeded: [],
        links: [
            {
                label: 'https://www.motherhoodreclaimed.org/',
                url: 'https://www.motherhoodreclaimed.org/',
            },
            {
                label: 'https://github.com/Open-SGF/motherhood-reclaimed-website',
                url: 'https://github.com/Open-SGF/motherhood-reclaimed-website',
            },
        ],
        toolsUsed: [
            {
                label: 'CraftCMS',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'Node',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
            {
                label: 'MySQL',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
        ],
        contributors: [
            {
                name: 'Ethan Zitting',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'Levi Zitting',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'Shannon Treadway',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'Aaron Merrick',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
        ],
        clientIssue: 'Client needed a website to help share their mission to' + ' potential partners',
        ourSolution:
            'We worked with them to come up with a design they liked and' +
            ' then launched their website with a CMS so they could edit the' +
            ' content as needed.',
    };

    const router = useRouter();

    let projectData;

    if (router.asPath.includes('mo-jobs')) {
        projectData = moJobsProjectData;
    } else if (router.asPath.includes('motherhood-reclaimed')) {
        projectData = motherhoodReclaimedData;
    } else {
        projectData = motherhoodReclaimedData;
    }

    const projectDetailsImage: JSX.Element = (
        <div className={styles.projectDetailsImage}>
            <Image src={'/images/laptop-with-phone.png'} alt="laptop" width={500} height={500} />
        </div>
    );

    const projectDetailsText: JSX.Element = (
        <div className={styles.projectDetailsText}>
            <h1>{projectData.name}</h1>
            <p>{projectData.description} </p>
            {projectData.skillsNeeded.length ? (
                <>
                    <h2 className="p">Skills/Help Needed</h2>
                    <ul>
                        {projectData.skillsNeeded.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </>
            ) : (
                ''
            )}
        </div>
    );

    return (
        <div className={styles.pageWrapper}>
            <ImageText
                image={projectDetailsImage}
                text={projectDetailsText}
                enableParticles={true}
                textRight={true}
                imageTextSizeRatio={0.55}
            />
            <ProjectDetails
                links={projectData.links}
                toolsUsed={projectData.toolsUsed}
                contributors={projectData.contributors}
            />
            <ChatBubbles leftText={projectData.clientIssue} rightText={projectData.ourSolution} />
            <Gallery />
            <div className={styles.projectNav}>
                <ProjectNav buttonText={'Previous'} />
                <ProjectNav buttonText={'Next'} />
            </div>
        </div>
    );
}

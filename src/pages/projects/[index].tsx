import { ChatBubbles } from '@/components/Blocks/ChatBubbles/ChatBubbles';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { ProjectNav } from '@/components/Blocks/ProjectNav/ProjectNav';
import React from 'react';
import styles from '@/styles/pages/Project.module.scss';

export default function Project(): JSX.Element {
    const project = {
        id: '0',
        slug: 'template-project',
        name: 'Example Project Name',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto labore reprehenderit repudiandae tenetur velit voluptates!',
        skillsNeeded: ['Design', 'Development', 'Marketing'],
        links: [
            {
                label: 'https://github.com/Open-SGF/opensgf.org',
                url: 'https://github.com/Open-SGF/opensgf.org',
            },
            {
                label: 'https://github.com/Open-SGF/opensgf.org',
                url: 'https://github.com/Open-SGF/opensgf.org',
            },
        ],
        toolsUsed: [
            {
                label: 'React',
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
                label: 'Node',
                image: {
                    src: 'https://via.placeholder.com/70.png',
                    alt: 'Example Alt Text',
                },
            },
        ],
        contributors: [
            {
                name: 'John Smith',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'John Smith',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
            {
                name: 'John Smith',
                image: {
                    src: 'https://via.placeholder.com/85.png',
                    alt: 'Image alt text.',
                },
                linkUrl: 'https://github.com/ethanzitting',
            },
        ],
        clientIssue:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.',
        ourSolution:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.',
    };

    const projectDetailsImage: JSX.Element = (
        <div className={styles.projectDetailsImage}>
            <Image src={'/images/laptop-with-phone.png'} alt="laptop" width={500} height={500} />
        </div>
    );

    const projectDetailsText: JSX.Element = (
        <div className={styles.projectDetailsText}>
            <h1>{project.name}</h1>
            <p>{project.description} </p>
            <h2 className="p">Skills/Help Needed</h2>
            <ul>
                {project.skillsNeeded.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
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
            <ProjectDetails links={project.links} toolsUsed={project.toolsUsed} contributors={project.contributors} />
            <ChatBubbles />
            <Gallery />
            <div className={styles.projectNav}>
                <ProjectNav buttonText={'Previous'} />
                <ProjectNav buttonText={'Next'} />
            </div>
        </div>
    );
}

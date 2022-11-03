import { ChatBubbles } from '@/components/Blocks/ChatBubbles/ChatBubbles';
import type { Contributor } from '@/utils/api';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { ProjectNav } from '@/components/Blocks/ProjectNav/ProjectNav';
import React from 'react';
import { getProjectContributors } from '@/utils/api';
import { projects } from '@/utils/projectData';
import styles from '@/styles/pages/Project.module.scss';

export const getServerSideProps: GetServerSideProps = async ({ query: { index: url } }) => {
    const projectData = projects.find(({ slug }: { slug: string }) => slug === url);

    if (!projectData) {
        return {
            notFound: true,
        };
    }

    const contributors = await getContributors(projectData);

    return { props: { contributors, projectData } };
};

async function getContributors(projectData) {
    const repoNames = projectData.repos.map(({ name }) => name);

    const contributorPromises = repoNames.map((name) => getProjectContributors(name));

    const allContributors = await Promise.all(contributorPromises);

    const uniqueContributors = mergeDuplicateContributors(allContributors.flat(1));

    uniqueContributors.sort((a: { total: number }, b: { total: number }) => b.total - a.total);

    return uniqueContributors;
}

function mergeDuplicateContributors(contributors: Contributor[]): Contributor[] {
    const contributorMap = new Map();

    for (const contributor of contributors) {
        const { total, id } = contributor;

        const existingContributions = contributorMap.get(id);

        if (existingContributions) {
            const newTotal = existingContributions.total + total;
            contributorMap.set(id, { ...contributor, total: newTotal });
        } else {
            contributorMap.set(id, contributor);
        }
    }

    return Array.from(contributorMap.values());
}

interface IProject {
    contributors: Contributor[];
    projectData: any;
}

export default function Project({ contributors, projectData }: IProject): JSX.Element {
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
                        {projectData.skillsNeeded.map((skill: string) => (
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
            <ProjectDetails project={projectData} contributors={contributors} />
            <ChatBubbles leftText={projectData.clientIssue} rightText={projectData.ourSolution} />
            <Gallery />
            <div className={styles.projectNav}>
                <ProjectNav buttonText={'Previous'} />
                <ProjectNav buttonText={'Next'} />
            </div>
        </div>
    );
}

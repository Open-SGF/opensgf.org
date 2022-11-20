import { ChatBubbles } from '@/components/Blocks/ChatBubbles/ChatBubbles';
import type { Contributor } from '@/utils/api';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import type { GetServerSideProps } from 'next';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
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

async function getContributors(projectData: any) {
    const repoNames = projectData.repos.map(({ name }: { name: any }) => name);

    const contributorPromises = repoNames.map((name: any) => getProjectContributors(name));

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
        <Image src={projectData.showCaseImage.src} alt={projectData.showCaseImage.alt} width={500} height={500} />
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
                dotsUrl="/images/icons/dots-two.png"
                textRight={true}
                imageTextSizeRatio={0.5}
            />
            <ProjectDetails project={projectData} contributors={contributors} />
            <ChatBubbles leftText={projectData.clientIssue} rightText={projectData.ourSolution} />
            <Gallery images={projectData.siteScreenshots} />
        </div>
    );
}

import { moJobsProjectData, motherhoodReclaimedData } from '@/utils/projectData';
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
import styles from '@/styles/pages/Project.module.scss';

export const getServerSideProps: GetServerSideProps = async ({ query: { index: url } }) => {
    let contributors;
    let projectData;

    if (url === 'mo-jobs') {
        const apiContributors = await getProjectContributors('portal-to-work-api');
        const clientContributors = await getProjectContributors('portal-to-work-client');

        contributors = mergeContributors(apiContributors, clientContributors);
        projectData = moJobsProjectData;
    } else if (url === 'motherhood-reclaimed') {
        contributors = await getProjectContributors('motherhood-reclaimed-website');
        projectData = motherhoodReclaimedData;
    } else {
        return {
            notFound: true,
        };
    }

    contributors.sort((a: { total: number }, b: { total: number }) => b.total - a.total);

    return { props: { contributors, projectData } };
};

function mergeContributors(groupA: Contributor[], groupB: Contributor[]): Contributor[] {
    const contributors = new Map();

    for (const contributor of [...groupA, ...groupB]) {
        const { total, id } = contributor;

        const existingContributions = contributors.get(id);

        if (existingContributions) {
            const newTotal = existingContributions.total + total;
            contributors.set(id, { ...contributor, total: newTotal });
        } else {
            contributors.set(id, contributor);
        }
    }

    return Array.from(contributors.values());
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
            <ProjectDetails links={projectData.links} toolsUsed={projectData.toolsUsed} contributors={contributors} />
            <ChatBubbles leftText={projectData.clientIssue} rightText={projectData.ourSolution} />
            <Gallery />
            <div className={styles.projectNav}>
                <ProjectNav buttonText={'Previous'} />
                <ProjectNav buttonText={'Next'} />
            </div>
        </div>
    );
}

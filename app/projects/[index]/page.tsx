import { ChatBubbles } from '@/components/Blocks/ChatBubbles/ChatBubbles';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import { getProjectContributors } from '@/server';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { projects } from '@/utils/projectData';
import styles from '@/styles/pages/Project.module.scss';

interface Props {
    params: Promise<{ index: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({ index: project.slug }));
}

export const dynamic = 'force-dynamic';

async function getPageMetadata({ index }: { index: string }) {
    const projectData = projects.find((p) => p.slug === index);
    if (!projectData) return null;
    return { title: `${projectData.name} | Open SGF` };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { index } = await params;
    const meta = await getPageMetadata({ index });
    if (!meta) return { title: 'Not Found | Open SGF' };
    return meta;
}

async function getContributors(projectData: any) {
    const repoNames = projectData.repos.map(({ name }: { name: string }) => name);

    const contributorPromises = repoNames.map((name: string) => getProjectContributors(name));

    const allContributors = await Promise.all(contributorPromises);

    const uniqueContributors = mergeDuplicateContributors(allContributors.flat(1));

    uniqueContributors.sort((a: { total: number }, b: { total: number }) => b.total - a.total);

    return uniqueContributors;
}

function mergeDuplicateContributors(
    contributors: { total: number; id: string; login: string; avatar_url: string; html_url: string }[],
) {
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

export default async function Project({ params }: Props) {
    const { index } = await params;
    const projectData = projects.find((p) => p.slug === index);

    if (!projectData) {
        notFound();
    }

    const contributors = await getContributors(projectData);

    const projectDetailsImage = (
        <Image src={projectData.showCaseImage.src} alt={projectData.showCaseImage.alt} width={500} height={500} />
    );

    const projectDetailsText = (
        <div className={styles.projectDetailsText}>
            <h1>{projectData.name}</h1>
            <p>{projectData.description}</p>
            {projectData.skillsNeeded.length ? (
                <>
                    <h2 className="p">Skills/Help Needed</h2>
                    <ul>
                        {projectData.skillsNeeded.map((skill: string) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>
                </>
            ) : null}
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

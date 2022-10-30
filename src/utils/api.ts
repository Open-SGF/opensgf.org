import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';

export type Contributor = {
    total: number;
    id: string;
    login: string;
    avatar_url: string;
    html_url: string;
};

export async function getMeetupEvents(): Promise<MeetupEvent[]> {
    try {
        const response: Response = await fetch(`${process.env.SITE_URL}/api/meetup`);
        return await response.json();
    } catch (e) {
        console.log(e);
        return [];
    }
}

export async function getProjectContributors(projectRepoName: string): Promise<Contributor[]> {
    try {
        const response: Response = await fetch(
            `${process.env.SITE_URL}/api/github?apiUrl=/repos/Open-SGF/${projectRepoName}/stats/contributors`,
        );

        const contributors = await response.json();

        return contributors.map(({ total, author }: { total: unknown; author: any }): Contributor => {
            return {
                total: Number(total) ?? 0,
                id: String(author.id) ?? '',
                login: String(author.login) ?? '',
                avatar_url: String(author.avatar_url) ?? '',
                html_url: String(author.html_url) ?? '',
            };
        });
    } catch (e) {
        console.log(e);
        return [];
    }
}

import { Octokit } from 'octokit';
import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';
import type { Contributor } from '@/utils/api';

export async function getMeetupEvents(): Promise<MeetupEvent[]> {
    const variables = { groupId: 34547654 };

    const query = `query GetUpcomingEventsForGroup ($groupId: ID) {
        group(id: $groupId) {
          id,
          name,
          upcomingEvents (input: {first: 3}) {
            edges {
              node {
                title,
                eventUrl,
                description,
                imageUrl,
                dateTime,
              }
            }
          }
        }
      }
    `;

    try {
        const response = await fetch('https://api.meetup.com/gql', {
            method: 'post',
            body: JSON.stringify({ query, variables }),
            headers: { 'Content-Type': 'application/json' },
        });

        const { data } = await response.json();

        const events: MeetupEvent[] = data.group.upcomingEvents.edges.map(({ node }: { node: any }): MeetupEvent => {
            const { title, eventUrl, description, imageUrl, dateTime } = node;

            return {
                title,
                eventUrl,
                description,
                imageUrl,
                imageAlt: 'Main image for event: ' + title,
                dateTime,
            };
        });

        return events;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getProjectContributors(projectRepoName: string): Promise<Contributor[]> {
    const octokit = new Octokit();

    try {
        const response = await octokit.request('GET /repos/Open-SGF/{repo}/stats/contributors', {
            repo: projectRepoName,
        });

        const contributors = response.data;

        if (!Array.isArray(contributors) || contributors.length === 0) {
            return [];
        }

        return contributors.map(({ total, author }: { total: unknown; author: any }): Contributor => {
            return {
                total: typeof total === 'number' ? total : Number(total) || 0,
                id: author?.id != null ? String(author.id) : String(author?.id) || '',
                login: author?.login != null ? String(author.login) : String(author?.login) || '',
                avatar_url: author?.avatar_url != null ? String(author.avatar_url) : String(author?.avatar_url) || '',
                html_url: author?.html_url != null ? String(author.html_url) : String(author?.html_url) || '',
            };
        });
    } catch (e) {
        console.error(e);
        return [];
    }
}

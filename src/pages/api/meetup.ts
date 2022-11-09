import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';

export default async function handler(req: any, res: any) {
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

        const events = data.group.upcomingEvents.edges.map(({ node }: { node: any }): MeetupEvent => {
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

        res.status(200).json(events);
    } catch (e) {
        console.error(e);
        return [];
    }
}

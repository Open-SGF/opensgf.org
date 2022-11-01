import type { MeetupEvent } from '@/components/Blocks/UpcomingEvents/components/EventCard/EventCard';

export async function getMeetupEvents(): Promise<MeetupEvent[]> {
    try {
        const response: Response = await fetch(`${process.env.SITE_URL}/api/meetup`);
        return await response.json();
    } catch (e) {
        console.log(e);
        return [];
    }
}

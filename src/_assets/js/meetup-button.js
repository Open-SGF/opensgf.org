export function meetupButton() {
    return {
        init() {
            const groupSlug = 'open-sgf';
            const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

            fetch(`${corsAnywhere}https://api.meetup.com/${groupSlug}/events`)
                .then(res => res.json())
                .then(events => {
                    if (!events || events.length === 0) {
                        return;
                    }
                    const nextMeetup = events[0];
                    this.$el.href = nextMeetup.link;
                });
        },
    };
}

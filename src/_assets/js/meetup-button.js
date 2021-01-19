export function meetupButton() {

    const groupSlug = 'open-sgf';
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const button = document.querySelector('#meetupButton');

    fetch(${corsAnywhere}https://api.meetup.com/${groupSlug}/events)
        .then(res => res.json())
        .then(events => {
            if (typeof events === 'undefined' || events.length === 0) {
                return;
            };
            const nextMeetup = events[0];
            button.href = nextMeetup.link;
        });
};

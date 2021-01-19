export function meetupButton() {

    const groupSlug = 'Springfield-Women-In-Technology';
    const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
    const button = document.querySelector('#meetupButton');

    fetch(`${corsAnywhere}https://api.meetup.com/${groupSlug}/events`)
        .then(res => res.json())
        .then(events => {
            const nextMeetup = events[0];
            button.href = nextMeetup.link;
        });
};

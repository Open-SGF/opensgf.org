import 'alpinejs';
import '../styles/main.scss';
import { meetupButton } from './meetup-button';
import { navigation } from './navigation';

window.addEventListener('load', function() {
    meetupButton();
});
window.app = {
    components: {
        navigation,
    },
};

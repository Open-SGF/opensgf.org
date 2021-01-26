import 'alpinejs';
import '../styles/main.scss';
import { meetupButton } from './meetup-button';
import { navigation } from './navigation';

window.app = {
    components: {
        navigation,
        meetupButton,
    },
};

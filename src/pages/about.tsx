import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import styles from '@/styles/About.module.scss';

export default function About() {
    return (
        <div className={styles.container}>
            <h1>About Us</h1>
            <IconSet />
            <p>
                A group who takes on tech volunteer work around the community. We meet every Tuesday and host occasional
                socials. Connect with us and{' '}
            </p>
            <div>Gallery Block</div>
        </div>
    );
}

import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import styles from '@/styles/pages/About.module.scss';

export default function About(): JSX.Element {
    return (
        <div className={styles.pageWrapper}>
            <h1>About Us</h1>
            <IconSet />
            <p>
                A group who takes on tech volunteer work around the community. We meet every Tuesday and host occasional
                socials. Connect with us and{' '}
            </p>
            <Gallery />
        </div>
    );
}

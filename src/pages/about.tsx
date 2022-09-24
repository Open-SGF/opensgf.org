import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import type { Icon } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import styles from '@/styles/pages/About.module.scss';

export default function About(): JSX.Element {
    const teamIcons: Icon[] = [
        {
            image: {
                src: '/images/man-profile-2.png',
                alt: 'Meetup Logo',
            },
            title: <figcaption className={'h3 ' + styles.name}>Fred Lawler</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
        {
            image: {
                src: '/images/man-profile-1.png',
                alt: 'Discord Logo',
            },
            title: <figcaption className={'h3 ' + styles.name}>Levi Zitting</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
        {
            image: {
                src: '/images/man-profile-3.png',
                alt: 'Discord Logo',
            },
            title: <figcaption className={'h3 ' + styles.name}>Ethan Zitting</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <h1>About Us</h1>
            <IconSet icons={teamIcons} />
            <p className={styles.groupDescription}>
                A group who takes on tech volunteer work around the community. We meet every Tuesday and host occasional
                socials.
            </p>
            <Gallery />
        </div>
    );
}

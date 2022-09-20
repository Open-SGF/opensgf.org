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
            title: <div className={'h3 ' + styles.name}>Fred Lawler</div>,
            subtitle: <div className={'h6 ' + styles.position}>Co-Organizer</div>,
        },
        {
            image: {
                src: '/images/man-profile-1.png',
                alt: 'Discord Logo',
            },
            title: <div className={'h3 ' + styles.name}>Levi Zitting</div>,
            subtitle: <div className={'h6 ' + styles.position}>Co-Organizer</div>,
        },
        {
            image: {
                src: '/images/man-profile-3.png',
                alt: 'Discord Logo',
            },
            title: <div className={'h3 ' + styles.name}>Ethan Zitting</div>,
            subtitle: <div className={'h6 ' + styles.position}>Co-Organizer</div>,
        },
    ];

    return (
        <div className={styles.pageWrapper}>
            <h1>About Us</h1>
            <IconSet icons={teamIcons} />
            <p className={styles.groupDescription}>
                A group who takes on tech volunteer work around the community. We meet every Tuesday and host occasional
                socials. Connect with us and{' '}
            </p>
            <Gallery />
        </div>
    );
}

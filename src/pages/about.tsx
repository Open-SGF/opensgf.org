import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import type { Icon } from '@/components/Blocks/IconSet/components/Icon';
import { IconSet } from '@/components/Blocks/IconSet/IconSet';
import styles from '@/styles/pages/About.module.scss';

export default function About(): JSX.Element {
    const teamIcons: Icon[] = [
        {
            image: {
                src: '/images/fred-lawler-headshot.jpg',
                alt: 'Image of Fred Lawler',
            },
            title: <figcaption className={'h3 ' + styles.name}>Fred Lawler</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
        {
            image: {
                src: '/images/levi-zitting-headshot.jpg',
                alt: 'Image of Levi Zitting',
            },
            title: <figcaption className={'h3 ' + styles.name}>Levi Zitting</figcaption>,
            subtitle: <figcaption className={'h6 ' + styles.position}>Co-Organizer</figcaption>,
        },
        {
            image: {
                src: '/images/ethan-zitting-headshot.jpg',
                alt: 'Image of Ethan Zitting',
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
                Open SGF, a Code for America Brigade, provides a forum for local designers; mobile, web, and application
                developers to tackle technical problems for our community. Many organizations lack the necessary funding
                to produce quality technical solutions for their problems. This group aims to close that gap by bringing
                people together to work on these projects weekly. We welcome all skill levels, and no coding experience
                is necessary.
            </p>
            <Gallery />
        </div>
    );
}

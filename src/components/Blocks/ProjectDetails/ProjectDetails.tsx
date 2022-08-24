import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetails.module.scss';

type contributor = {
    name: string,
    image: {
        src: string,
        alt: string
    },
    linkUrl: string
}

interface IProjectDetails {
    links: Array<{url: string, label: string}>,
    toolsUsed: Array<{label: string, image:{src: string, alt: string}}>,
    contributors: Array<contributor>
}

export function ProjectDetails({links, toolsUsed, contributors}: IProjectDetails): JSX.Element {
    return (
        <div className={styles.projectDetails}>
            <div className={styles.linksWrapper}>
                <div className={styles.verticalLine} />
                <div className={styles.icon}>
                    <Image src="/images/hyperlink.svg" width="60" height="60" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>Links</h2>
                    <ul>
                        {links.map((link) => (
                            <li>
                                <Link href={link.url} passHref>
                                    <a>
                                        <span className={styles.link}>{link.label}</span>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.techStackWrapper}>
                <div className={styles.verticalLine} />
                <div className={styles.icon}>
                    <Image src="/images/monitor.svg" width="60" height="60" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>Tech Stack</h2>
                    <ul className={styles.tools}>
                        {toolsUsed.map(({label, image}) => (
                            <li>
                                <Image src={image.src} height="70" width="70" alt={image.alt} />
                                <span>{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles.contributorsWrapper}>
                <div className={styles.verticalLine} />
                <div className={styles.icon}>
                    <Image src="/images/networking.svg" width="60" height="60" alt="" />
                </div>
                <div className={styles.text}>
                    <h2>Contributors</h2>
                    <ul className={styles.contributors}>
                        {contributors.map(({name, image, linkUrl}) => (
                            <li>
                                <Link href={linkUrl} passHref>
                                    <a>
                                        <div className={styles.image}>
                                            <Image src={image.src} height="85" width="85" alt={image.src} />
                                        </div>
                                        <h3>{name}</h3>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

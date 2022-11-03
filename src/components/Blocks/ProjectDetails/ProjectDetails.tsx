import type { Contributor } from '@/utils/api';
import Image from 'next/image';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './ProjectDetails.module.scss';
import { tools } from '@/utils/toolData';

interface IProjectDetails {
    project: any;
    contributors: Contributor[];
}

export function ProjectDetails({ project, contributors }: IProjectDetails): JSX.Element {
    const toolsUsed = project.toolsUsed.map((tool) => {
        return tools.find(({ label }) => label === tool);
    });

    return (
        <div className={styles.projectDetails}>
            <div className={styles.linksWrapper}>
                <div className={styles.verticalLine} />
                <div className={styles.icon}>
                    <Image src="/images/hyperlink.svg" width="60" height="60" alt="" />
                </div>
                <div className={styles.text}>
                    <h2 className="h1">Links</h2>
                    <ul>
                        {project.links.map((link, index) => (
                            <li key={link.url + index}>
                                <SmartLink to={link.url}>
                                    <span className={styles.link}>{link.label}</span>
                                </SmartLink>
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
                    <h2 className="h1">Tech Stack</h2>
                    <ul className={styles.tools}>
                        {toolsUsed.map(({ label, image }) => (
                            <li key={label}>
                                <Image src={image.src} height="70" width="70" alt={image.alt} />
                                <span>{label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {Array.isArray(contributors) && contributors.length > 0 ? (
                <div className={styles.contributorsWrapper}>
                    <div className={styles.verticalLine} />
                    <div className={styles.icon}>
                        <Image src="/images/networking.svg" width="60" height="60" alt="" />
                    </div>
                    <div className={styles.text}>
                        <h2 className="h1">Contributors</h2>
                        <ul className={styles.contributors}>
                            {contributors.map(({ login, avatar_url, html_url }) => (
                                <li key={login}>
                                    <SmartLink to={html_url}>
                                        <div className={styles.image}>
                                            <Image
                                                src={avatar_url}
                                                height="85"
                                                width="85"
                                                alt={`The github profile picture for ${login}`}
                                            />
                                        </div>
                                        <h3 className="p">{login}</h3>
                                    </SmartLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
}

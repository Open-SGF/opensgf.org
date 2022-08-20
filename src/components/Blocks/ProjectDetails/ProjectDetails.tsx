import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectDetails.module.scss';

export function ProjectDetails(): JSX.Element {
    return (
        <div className={styles.projectDetails}>
            <div className={styles.linksWrapper}>
                <div className={styles.verticalLine} />
                <Image className={styles.icon} src="/images/hyperlink.svg" width="60" height="60" alt="" />
                <div className={styles.text}>
                    <h2>Links</h2>
                    <ul>
                        <li>
                            <Link href="/">Github Repository</Link>
                        </li>
                        <li>
                            <Link href="/">Live Preview</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.techStackWrapper}>
                <div className={styles.verticalLine} />
                <Image className={styles.icon} src="/images/monitor.svg" width="60" height="60" alt="" />
                <div className={styles.text}>
                    <h2>Tech Stack</h2>
                    <ul className={styles.tools}>
                        <li>
                            <Image src="https://via.placeholder.com/70" height="70" width="70" alt="" />
                            <span>Tool Text</span>
                        </li>
                        <li>
                            <Image src="https://via.placeholder.com/70" height="70" width="70" alt="" />
                            <span>Tool Text</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contributorsWrapper}>
                <div className={styles.verticalLine} />
                <Image className={styles.icon} src="/images/networking.svg" width="60" height="60" alt="" />
                <div className={styles.text}>
                    <h2>Contributors</h2>
                    <ul className={styles.contributors}>
                        <li>
                            <Image src="https://via.placeholder.com/85" height="85" width="85" alt="" />
                            <h3>Person Name</h3>
                        </li>
                        <li>
                            <Image src="https://via.placeholder.com/85" height="85" width="85" alt="" />
                            <h3>Person Name</h3>
                        </li>
                        <li>
                            <Image src="https://via.placeholder.com/85" height="85" width="85" alt="" />
                            <h3>Person Name</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

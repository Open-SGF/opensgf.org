import styles from './ProjectDetails.module.scss';

interface IProjectDetails {
}

export function ProjectDetails({}: IProjectDetails) {
    return (
        <div className={styles.projectDetails}>
            <div className={styles.linksWrapper}>
                <div className={styles.verticalLine} />
                <img className={styles.icon} src="/images/hyperlink.svg" alt="An icon of a paperclip."/>
                <div className={styles.text}>
                    <h2>Links</h2>
                    <ul>
                        <li><a href="/">Github Repository</a></li>
                        <li><a href="/">Live Preview</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.techStackWrapper}>
                <div className={styles.verticalLine} />
                <img className={styles.icon} src="/images/monitor.svg" alt="An icon of a computer monitor."/>
                <div className={styles.text}>
                    <h2>Tech Stack</h2>
                    <ul className={styles.tools}>
                        <li>
                            <img src="https://via.placeholder.com/70" alt="Tool Image"/>
                            <span>Tool Text</span>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/70" alt="Tool Image"/>
                            <span>Tool Text</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.contributorsWrapper}>
                <div className={styles.verticalLine} />
                <img className={styles.icon} src="/images/networking.svg" alt="An icons of dots and lines suggesting networking."/>
                <div className={styles.text}>
                    <h2>Contributors</h2>
                    <ul className={styles.contributors}>
                        <li>
                            <img src="https://via.placeholder.com/85" alt="Person Image"/>
                            <h3>Person Name</h3>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/85" alt="Person Image"/>
                            <h3>Person Name</h3>
                        </li>
                        <li>
                            <img src="https://via.placeholder.com/85" alt="Person Image"/>
                            <h3>Person Name</h3>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

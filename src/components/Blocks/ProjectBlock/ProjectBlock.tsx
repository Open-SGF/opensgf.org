import Link from 'next/link';
import styles from './ProjectBlock.module.scss';

export const ProjectBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.sideBySideSet}>
                <img
                    src="https://via.placeholder.com/484.png"
                    alt="An image of several people working together."
                    height="300px"
                    width="300px"
                />
                <div className={styles.textSet}>
                    <h2>Project Section</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate quia laboriosam
                        unde! Quae facilis quia illo officia eos atque fugit enim perferendis est nostrum ad, porro
                        ducimus, quam soluta.
                    </p>
                </div>
            </div>
            <a href="/projects" className={styles.projectsLink}>
                View All Projects
            </a>
        </div>
    );
};

import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectBlock.module.scss';

export const ProjectBlock = () => {
    return (
        <div className={styles.projectBlockContainer}>
            <div className={styles.sideBySideSet}>
                <Image src="https://via.placeholder.com/484" alt="An image of several people working together." />
                <div className={styles.textSet}>
                    <h2>Project Section</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate quia laboriosam
                        unde! Quae facilis quia illo officia eos atque fugit enim perferendis est nostrum ad, porro
                        ducimus, quam soluta.
                    </p>
                </div>
            </div>
            <Link href="/projects" className={styles.projectsLink}>
                View All Projects
            </Link>
        </div>
    );
};

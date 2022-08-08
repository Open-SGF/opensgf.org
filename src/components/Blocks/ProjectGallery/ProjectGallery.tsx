import styles from './ProjectGallery.module.scss';

export function ProjectGallery() {
    return (
        <div className={styles.container}>
            <h2>Projects</h2>
            <div className={styles.grid}>
                <div className={styles.card1}>
                    <h3>Motherhood Reclaimed Website</h3>
                </div>
                <div className={styles.card1}>
                    <button>Help Needed</button>
                    <h3>MoJobs Mobile App</h3>
                </div>
                <div className={styles.card1}>
                    <h3>SGF Covid Support</h3>
                </div>
            </div>
        </div>
    );
}

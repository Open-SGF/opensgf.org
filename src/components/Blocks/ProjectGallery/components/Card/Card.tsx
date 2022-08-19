import { IconCallout } from '../IconCallout/IconCallout';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

export function Card({ project, project: { image } }: any) {
    return (
        <div className={styles.card}>
            {project.helpWanted && (
                <div className={styles.iconCallout}>
                    <IconCallout link={project.link} />
                </div>
            )}
            <Link href={project.link}>
                <h2 className={styles.title}>{project.title}</h2>
            </Link>
            <Link href={project.link}>
                <div className={styles.shadow} />
            </Link>
            <div className={styles.imageWrapper}>
                <Image src={image.src} alt={image.alt} layout="fill" />
            </div>
        </div>
    );
}

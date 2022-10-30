import { IconCallout } from '../IconCallout/IconCallout';
import Image from 'next/image';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Card.module.scss';

interface ICard {
    project: {
        helpWanted: boolean;
        link: string;
        title: string;
        image: {
            src: string;
            alt: string;
        };
    };
}

export function Card({ project, project: { image } }: ICard): JSX.Element {
    return (
        <div className={styles.card}>
            {project.helpWanted && (
                <div className={styles.iconCallout}>
                    <IconCallout link={project.link} text="Help Needed" />
                </div>
            )}
            <SmartLink to={project.link}>
                <h2 className={`${styles.title} h1`}>{project.title}</h2>
            </SmartLink>
            <SmartLink to={project.link}>
                <div className={styles.shadow} />
            </SmartLink>
            <div className={styles.imageWrapper}>
                <Image src={image.src} alt={image.alt} layout="fill" />
            </div>
        </div>
    );
}

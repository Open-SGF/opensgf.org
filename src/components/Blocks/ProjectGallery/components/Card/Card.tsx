import { IconCallout } from '../IconCallout/IconCallout';
import Image from 'next/image';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Card.module.scss';

interface ICard {
    project: any;
}

export function Card({ project, project: { landingImage } }: ICard): JSX.Element {
    return (
        <div className={styles.card}>
            {project.helpWanted && (
                <div className={styles.iconCallout}>
                    <IconCallout link={project.siteUrl} text="Help Needed" />
                </div>
            )}
            <SmartLink to={project.siteUrl}>
                <h2 className={`${styles.title} h1`}>{project.title}</h2>
            </SmartLink>
            <SmartLink to={project.siteUrl}>
                <div className={styles.shadow} />
            </SmartLink>
            <Image src={landingImage.src} alt={landingImage.alt} fill />
        </div>
    );
}

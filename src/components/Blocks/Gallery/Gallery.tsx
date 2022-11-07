import Image from 'next/image';
import styles from './Gallery.module.scss';

interface IGallery {
    images: any[];
}

export function Gallery({ images }: IGallery): JSX.Element {
    return (
        <div className={styles.container}>
            {images.map((image) => (
                <Image src={image.src} alt={image.alt} key={image.src} fill />
            ))}
        </div>
    );
}

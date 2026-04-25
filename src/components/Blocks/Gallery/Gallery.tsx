import Image from 'next/image';
import styles from './Gallery.module.scss';

interface IGallery {
    images: any[];
}

export function Gallery({ images }: IGallery): React.ReactNode {
    return (
        <div className={styles.container}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    fill
                />
            ))}
        </div>
    );
}

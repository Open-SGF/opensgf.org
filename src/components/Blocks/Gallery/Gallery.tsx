import Image from 'next/image';
import styles from './Gallery.module.scss';

interface IGallery {
    images: any[];
}

export function Gallery({ images }: IGallery): JSX.Element {
    return (
        <div className={styles.container}>
            <Image src={images[0].src} alt={images[0].alt} key={images[0].src} fill />
            <Image src={images[1].src} alt={images[1].alt} key={images[1].src} fill />
            <Image src={images[2].src} alt={images[2].alt} key={images[2].src} fill />
            <Image src={images[3].src} alt={images[3].alt} key={images[3].src} fill />
        </div>
    );
}

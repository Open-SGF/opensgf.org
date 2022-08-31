import styles from './Gallery.module.scss';
import Image from 'next/image';

export function Gallery(): JSX.Element {
    const images = [
        {
            src: '/images/rectangle-1.svg',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-2.svg',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-3.svg',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-4.svg',
            alt: 'alt text'
        },
        {
            src: '/images/rectangle-5.svg',
            alt: 'alt text'
        }
    ]
    return (
        <div className={styles.container}>
            {images.map((image, index ) => (
                <div className={styles.imageWrapper} key={index}>
                    <Image src={image.src} alt={image.alt} layout="fill" />
                </div>
            ))}
        </div>
    );
}

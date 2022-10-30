import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import React from 'react';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './ImageTextLink.module.scss';

interface IImageTextLink {
    image: JSX.Element;
    text: JSX.Element;
    enableParticles?: boolean;
    textRight?: boolean;
    imageTextSizeRatio?: number;
    link: {
        text: string;
        url: string;
    };
}

export function ImageTextLink({
    image,
    text,
    link,
    imageTextSizeRatio = 0.5,
    enableParticles = false,
    textRight = false,
}: IImageTextLink): JSX.Element {
    return (
        <div className={styles.container}>
            <ImageText
                image={image}
                text={text}
                textRight={textRight}
                imageTextSizeRatio={imageTextSizeRatio}
                enableParticles={enableParticles}
            />
            <SmartLink to={link.url}>
                <h3 className={`${styles.link} h1`}>{link.text}</h3>
            </SmartLink>
        </div>
    );
}

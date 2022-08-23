import { ChatBubble } from '@/components/Blocks/ChatBubble/ChatBubble';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { ProjectNav } from '@/components/Blocks/ProjectNav/ProjectNav';
import React from 'react';
import styles from '@/styles/pages/Project.module.scss';

export default function Project(): JSX.Element {
    const projectDetailsImage: JSX.Element = (
        <div className={styles.projectDetailsImage}>
            <Image src={'/images/laptop-with-phone.png'} alt="laptop" width={500} height={500} />
        </div>
    )

    const projectDetailsText: JSX.Element = (
        <div className={styles.projectDetailsText}>
            <h1>Project Name</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto
                labore reprehenderit repudiandae tenetur velit voluptates!
            </p>
            <h2>Skills/Help Needed</h2>
            <ul>
                <li>Design</li>
                <li>Development</li>
                <li>Marketing</li>
            </ul>
        </div>
    )

    return (
        <div className={styles.pageWrapper}>
            <ImageText
                image={projectDetailsImage}
                text={projectDetailsText}
                enableParticles={true}
                textRight={true}
                imageTextSizeRatio={.55}
            />
            <ProjectDetails />
            <ChatBubble />
            <Gallery />
            <div className={styles.projectNav}>
                <ProjectNav buttonText={'Previous'} />
                <ProjectNav buttonText={'Next'} />
            </div>
        </div>
    );
}

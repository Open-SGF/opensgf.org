import { ChatBubble } from '@/components/Blocks/ChatBubble/ChatBubble';
import { Gallery } from '@/components/Blocks/Gallery/Gallery';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import Image from 'next/image';
import { ParticlesComp } from '@/components/Particles/Particles';
import { ProjectDetails } from '@/components/Blocks/ProjectDetails/ProjectDetails';
import { ProjectNav } from '@/components/Blocks/ProjectNav/ProjectNav';
import React from 'react';
import styles from '@/styles/pages/Home.module.scss';

export default function Project(): JSX.Element {
    return (
        <div className={styles.container}>
            <ImageText
                text={
                    <div>
                        <h2>Project Name</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto labore
                            reprehenderit repudiandae tenetur velit voluptates!
                        </p>
                        <h3>Skills/Help Needed</h3>
                        <ul>
                            <li>Design</li>
                            <li>Development</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                }
                image={<Image src={'/images/Laptop-phone.svg'} alt="laptop" width={500} height={500} />}
                particles={<ParticlesComp />}
                swapSides={true}
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

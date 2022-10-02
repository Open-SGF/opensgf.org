import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Blocks/CardSet/components/Card/Card';
import { CardSet } from '@/components/Blocks/CardSet/CardSet';
import Head from 'next/head';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { ImageTextLink } from '@/components/Blocks/ImageTextLink/ImageTextLink';
import { Stats } from '@/components/Blocks/Stats/Stats';
import fs from 'fs';
import matter from 'gray-matter';
import styles from '@/styles/pages/Home.module.scss';

interface IHome {
    textContent: {
        title: string;
        body: string;
    };
}

export default function Home({ textContent }: IHome): JSX.Element {
    const heroImage = <Image src={'/images/group-working.svg'} alt="group working " width={360} height={220} />;

    const heroText = (
        <div className={styles.heroText}>
            <h1>Open SGF</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci asperiores debitis doloremque
                dolorum eligendi fugit iste iure, maiores, maxime odio provident rerum sit ut, vitae? Architecto facere
                pariatur quo.
            </p>
        </div>
    );

    const projectTeaserImage = <Image src={'/images/laptop-with-phone.png'} alt="laptop" width={600} height={600} />;

    const projectTeaserText = (
        <div className={`${styles.projectTeaserText} h1`}>
            <h1>{textContent.title}</h1>
            <p>{textContent.body}</p>
        </div>
    );

    const contactButton = <Button text="Contact" className="h3" href="/" />;

    const volunteerCard = (
        <Card
            heading="Volunteer With Us"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iste recusandae quam aliquam vel porro aliquid sapiente perferendis, autem delectus repellat eveniet laboriosam voluptas. Magni nobis rerum ipsa perspiciatis veritatis."
            button={contactButton}
        />
    );

    const partnerCard = (
        <Card
            heading="Partner With Us"
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iste recusandae quam aliquam vel porro aliquid sapiente perferendis, autem delectus repellat eveniet laboriosam voluptas. Magni nobis rerum ipsa perspiciatis veritatis."
            button={contactButton}
        />
    );

    return (
        <>
            <Head>
                <title>Open SGF | Home</title>
                <meta name="keywords" content="Open SGF" />
            </Head>
            <div className={styles.pageWrapper}>
                <ImageText image={heroImage} text={heroText} enableParticles={true} imageTextSizeRatio={0.435} />
                <Stats />
                <ImageTextLink
                    image={projectTeaserImage}
                    text={projectTeaserText}
                    textRight={true}
                    link={{ text: 'View All Projects', url: '/projects' }}
                />
                <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />
            </div>
        </>
    );
}

export async function getStaticProps() {
    const file = fs.readFileSync(`./content/home.md`, 'utf8');
    const textContent = matter(file);
    return {
        props: {
            textContent: {
                title: textContent.data.title,
                body: textContent.content,
            },
        },
    };
}

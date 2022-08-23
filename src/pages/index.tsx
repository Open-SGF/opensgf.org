import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Blocks/CardSet/components/Card/Card';
import { CardSet } from '@/components/Blocks/CardSet/CardSet';
import Head from 'next/head';
import Image from 'next/image';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import { Stats } from '@/components/Blocks/Stats/Stats';
import styles from '@/styles/pages/Home.module.scss';

export default function Home(): JSX.Element {
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
        <div className={styles.projectTeaserText}>
            <h2>Project Section</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto labore
                reprehenderit repudiandae tenetur velit voluptates!
            </p>
        </div>
    );

    const contactButton = <Button text="Contact" href="/" />;

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
                <ImageText image={projectTeaserImage} text={projectTeaserText} textRight={true} />
                <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />
            </div>
        </>
    );
}

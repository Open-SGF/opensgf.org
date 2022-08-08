import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Blocks/CardSet/components/Card/Card';
import { CardSet } from '@/components/Blocks/CardSet/CardSet';
import Head from 'next/head';
import { Hero } from '@/components/Blocks/Hero/Hero';
import Image from 'next/image';
// import Link from 'next/link';
import { ParticlesComp } from '@/components/Particles/Particles';
import { ProjectBlock } from '@/components/Blocks/ProjectBlock/ProjectBlock';
import { Stats } from '@/components/Blocks/Stats/Stats';
// import styles from '@/styles/index.module.scss';

export default function Home() {
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
            <div>
                <Hero
                    header={<h1>Open SGF</h1>}
                    text={
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci asperiores debitis
                            doloremque dolorum eligendi fugit iste iure, maiores, maxime odio provident rerum sit ut,
                            vitae? Architecto facere pariatur quo.
                        </p>
                    }
                    image={<Image src={'/images/group-working.svg'} alt="group working " width={360} height={220} />}
                    particles={<ParticlesComp />}
                />
                <Stats />
                <Hero
                    header={<h2>Project Section</h2>}
                    text={
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto
                            labore reprehenderit repudiandae tenetur velit voluptates!
                        </p>
                    }
                    image={<Image src={'/images/Laptop-phone.svg'} alt="laptop" width={600} height={600} />}
                    bool={true}
                />
                {/*<ProjectBlock />*/}
                <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />
            </div>
        </>
    );
}

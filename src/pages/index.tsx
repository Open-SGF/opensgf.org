import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Blocks/CardSet/components/Card/Card';
import { CardSet } from '@/components/Blocks/CardSet/CardSet';
import Head from 'next/head';
import { Hero } from '@/components/Blocks/Hero/Hero';
// import { ParticlesComp } from '@/components/Particles';
import { ProjectBlock } from '@/components/Blocks/ProjectBlock/ProjectBlock';
import { Stats } from '@/components/Blocks/Stats/Stats';

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
                <Hero>
                    <h1>Open SGF</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis.
                    </p>
                </Hero>
                {/*<ParticlesComp />*/}
                <Stats />
                <ProjectBlock />
                <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />
            </div>
        </>
    );
}

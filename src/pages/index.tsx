import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Blocks/CardSet/components/Card/Card';
import { CardSet } from '@/components/Blocks/CardSet/CardSet';
import Head from 'next/head';
import { ImageText } from '@/components/Blocks/ImageText/ImageText';
import Image from 'next/image';
import { ParticlesComp } from '@/components/Particles/Particles';
import { Stats } from '@/components/Blocks/Stats/Stats';

export default function Home(): JSX.Element {
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
                <ImageText
                    text={
                        <div>
                            <h1>Open SGF</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci asperiores debitis
                                doloremque dolorum eligendi fugit iste iure, maiores, maxime odio provident rerum sit ut,
                                vitae? Architecto facere pariatur quo.
                            </p>
                        </div>
                    }
                    image={<Image src={'/images/group-working.svg'} alt="group working " width={360} height={220} />}
                    particles={<ParticlesComp />}
                />
                <Stats />
                <ImageText
                    text={
                        <div>
                            <h2>Project Section</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto
                                labore reprehenderit repudiandae tenetur velit voluptates!
                            </p>
                        </div>
                    }
                    image={<Image src={'/images/Laptop-phone.svg'} alt="laptop" width={600} height={600} />}
                    swapSides={true}
                />
                <CardSet volunteerCard={volunteerCard} partnerCard={partnerCard} />
            </div>
        </>
    );
}

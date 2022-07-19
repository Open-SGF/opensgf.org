import Head from 'next/head';
import { Hero } from '@/components/Blocks/Hero/Hero';
import { Stats } from '@/components/Blocks/Stats/Stats';
import {ParticlesComp} from "@/components/Particles/Particles";
import styles from "@/styles/index.module.scss"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Open SGF | Home</title>
                <meta name="keywords" content="Open SGF" />
            </Head>
            <div>
                <Hero
                   header={<h1>Open SGF</h1>}
                   text={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci asperiores debitis doloremque dolorum eligendi fugit iste iure, maiores, maxime odio provident rerum sit ut, vitae? Architecto facere pariatur quo.</p>}
                   image={<Image src={"/images/group-working.svg"} alt="group working " width={360} height={220} /> }
                   particles={<ParticlesComp />}
                   bool={true}
                />
                <Stats />
                <Hero
                    header={<h2>Project Section</h2>}
                    text={<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum est harum illum iusto labore reprehenderit repudiandae tenetur velit voluptates!</p>}
                    image={<Image src={"/images/Laptop-phone.svg"} alt='laptop' width={500} height={500}/> }
                />
                {/*<Link href={"/projects"}><a>View All Projects</a></Link>*/}
            </div>
        </>
    );
}

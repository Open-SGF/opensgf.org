import Head from 'next/head';
import { Hero } from '@/components/Blocks/Hero/Hero';
// import { ParticlesComp } from '@/components/Particles';
import { ProjectBlock } from '@/components/Blocks/ProjectBlock/ProjectBlock';
import { Stats } from '@/components/Blocks/Stats/Stats';

export default function Home() {
    return (
        <>
            <Head>
                <title>Open SGF | Home</title>
                <meta name="keywords" content="Open SGF" />
            </Head>
            <div>
                <Hero />
                {/*<ParticlesComp />*/}
                <Stats />
                <ProjectBlock />
            </div>
        </>
    );
}

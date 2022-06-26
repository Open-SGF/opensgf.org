import Head from 'next/head';
import { Hero } from '../components/Hero';
// import { ParticlesComp } from '../components/Particles';
import { Stats } from '../components/Stats';

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
            </div>
        </>
    );
}

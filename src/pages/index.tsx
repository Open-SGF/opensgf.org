import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Stats from "../components/Stats";
import Hero from "../components/Hero";
import Particles from "../components/Particles";
import syles from "../styles/particles.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Open SGF | Home</title>
        <meta name="keywords" content="Open SGF" />
      </Head>
      <div>
      <Hero />
      {/* <Particles  /> */}
      <Stats />
      </div>
    </>
  );
}

import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from '@/components/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
                <link rel="shortcut icon" sizes="196x196" href="/images/favicons/android-chrome-192x192.png" />
                <link rel="shortcut icon" sizes="512x512" href="/images/favicons/android-chrome-512x512.png" />
                <link rel="manifest" sizes="512x512" href="/images/favicons/android-chrome-512x512.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <title>Open SGF</title>
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

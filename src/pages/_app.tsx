import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
            <Component {...pageProps} />
        </Layout>
    );
}

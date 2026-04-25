import '@/styles/globals.scss';
import { Layout } from '@/components/Layout';
import type { Metadata } from 'next';
import PlausibleProvider from 'next-plausible';

export const metadata: Metadata = {
    title: {
        default: 'Open SGF',
        template: '%s | Open SGF',
    },
    icons: {
        apple: [{ sizes: '180x180', url: '/images/favicons/apple-touch-icon.png' }],
        icon: [
            { sizes: '32x32', url: '/images/favicons/favicon-32x32.png' },
            { sizes: '16x16', url: '/images/favicons/favicon-16x16.png' },
        ],
        shortcut: [
            { sizes: '196x196', url: '/images/favicons/android-chrome-192x192.png' },
            { sizes: '512x512', url: '/images/favicons/android-chrome-512x512.png' },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    <PlausibleProvider src="https://plausible.sgf.dev/js/script.js">{children}</PlausibleProvider>
                </Layout>
            </body>
        </html>
    );
}

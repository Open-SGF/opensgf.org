import React from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import Banner from '@/components/Banner/banner.jsx';
import styles from './layout.module.scss';

interface ILayout {
    children: any;
}

export function Layout({ children }: ILayout): JSX.Element {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <Navbar />
                <Banner />
                {children}
            </div>
            <Footer />
        </div>
    );
}

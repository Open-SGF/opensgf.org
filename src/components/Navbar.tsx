import { Dropdown } from './Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/nav.module.scss';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image src="/images/open-sgf-logo.svg" width={126.54} height={57.95} alt="Open SGF Logo" />
                </Link>
            </div>
            <div className={styles.navlinks}>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Dropdown />
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/donate">
                    <button className={styles.btn}>Donate</button>
                </Link>
            </div>
        </nav>
    );
}

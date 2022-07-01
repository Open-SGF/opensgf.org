import { Dropdown } from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/" passHref>
                    <a>
                        <Image src="/images/open-sgf-logo.svg" width={126.54} height={57.95} alt="Open SGF Logo" />
                    </a>
                </Link>
            </div>
            <div className={styles.navlinks}>
                <Link href="/projects" passHref>
                    <a>Projects</a>
                </Link>
                <Dropdown />
                <Link href="/about" passHref>
                    <a>About</a>
                </Link>
                <Link href="/donate" passHref>
                    <a>
                        <button className={styles.btn}>Donate</button>
                    </a>
                </Link>
            </div>
        </nav>
    );
}

import { Dropdown } from '@/components/Dropdown/Dropdown';
import Link from 'next/link';
import { Logo } from '@/components/Icons/Logo';
import React from 'react';
import styles from './Navbar.module.scss';

export function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Logo url="/" />
            </div>
            <div className={styles.navlinks}>
                <Link href="/projects" passHref>
                    <a>Projects</a>
                </Link>
                <Dropdown heading="Join Us">
                    <Link href="/partner">Partnering</Link>
                    <p> See what we can help you with </p>
                    <Link href="/volunteer">Volunteering</Link>
                    <p>Learn how you can get involved</p>
                </Dropdown>
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

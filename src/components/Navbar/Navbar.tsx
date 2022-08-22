import React, { useEffect, useRef, useState } from 'react';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Icons/Logo';
import styles from './Navbar.module.scss';

export function Navbar(): JSX.Element {
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const previousScrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);
            setShow(!(window.scrollY > previousScrollYRef.current));
            previousScrollYRef.current = window.scrollY;
        };

        const handleClick = (event: any) => {
            // TODO: replace with the react way of grabbing elements
            if (!event.target.matches('#navbar, #navbar *') || event.target.matches('a')) {
                setOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <nav
            id="navbar"
            className={`${styles.navbar} ${show ? styles.shown : styles.hidden} ${
                previousScrollYRef.current > 0 ? styles.bottomShadow : ''
            }`}
        >
            <div className={styles.logo}>
                <Logo url="/" />
            </div>
            <div className={`${styles.navLinks} ${open ? styles.open : styles.closed}`}>
                <Link href="/projects" passHref>
                    <a>Projects</a>
                </Link>
                <Dropdown heading="Join Us" forceClosed={false}>
                    <Link href="/partner">
                        <a>Partnering</a>
                    </Link>
                    <p> See what we can help you with </p>
                    <Link href="/volunteer">
                        <a>Volunteering</a>
                    </Link>
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
            <button className={styles.hamburgerIcon} onClick={() => setOpen(!open)}>
                <Image src="/images/hamburger-icon-solid.svg" width={30} height={30} alt="bars" />
            </button>
        </nav>
    );
}

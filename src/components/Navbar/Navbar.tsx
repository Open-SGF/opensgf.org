import React, {useEffect, useRef, useState} from 'react';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Icons/Logo';
import styles from './Navbar.module.scss';

export function Navbar() {
    const [show, setShow] = useState(true);
    const previousScrollYRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            setShow(!(window.scrollY > previousScrollYRef.current))
            previousScrollYRef.current = window.scrollY;
        };

        const handleClick = (event: any) => {
            if (!event.target.matches('#navbar, #navbar *')) {
                setShow(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.addEventListener('click', handleClick);
        };
    }, []);

    return (
        <nav
            id="navbar"
            className={`${styles.navbar} ${show ? styles.open : styles.closed}`}
        >
            <div className={styles.logo}>
                <Logo url="/" />
            </div>
            <div className={styles.navLinks}>
                <Link href="/projects" passHref>
                    <a>Projects</a>
                </Link>
                <Dropdown heading="Join Us">
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
            <a href={'#!'} className={styles.icon}>
                <Image src="/images/bars-solid.svg" width={30} height={30} alt="bars" />
            </a>
        </nav>
    );
}

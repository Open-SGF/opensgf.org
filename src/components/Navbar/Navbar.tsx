import React, {useEffect, useState} from 'react';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Icons/Logo';
import styles from './Navbar.module.scss';

export function Navbar() {
    const [show, setShow] = useState(true);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        window.scrollY > scrollY ? setShow(false) : setShow(true)
        setScrollY(window.scrollY);
    }

    const handleClick = (event: any) => {
        if (!event.target.matches('#navbar, #navbar *')) {
            setShow(false)
        }
    }

    useEffect(() => {
        const body = document.querySelector('body')
        if (!body) {
            return
        }
        const options = { passive: true } as EventListenerOptions
        window.addEventListener("scroll", handleScroll, options);
        window.addEventListener('click', handleClick)
        return () => {
            window.removeEventListener("scroll", handleScroll, options);
            window.addEventListener('click', handleClick)
        };
    }, [scrollY]);

    return (
        <nav id='navbar' className={`${styles.navbar} ${show ? styles.open : styles.closed}`}>
            <div className={styles.logo}>
                <Logo url="/"/>
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
                <Link href="/about" passHref >
                    <a>About</a>
                </Link>
                <Link href="/donate" passHref>
                    <a>
                        <button className={styles.btn} >
                            Donate
                        </button>
                    </a>
                </Link>
            </div>
            <a href={'#!'} className={styles.icon}>
                <Image src="/images/bars-solid.svg" width={30} height={30} alt="bars"/>
            </a>
        </nav>
    );
}

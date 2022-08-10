import React, { useEffect, useState } from 'react';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { Logo } from '@/components/Icons/Logo';
import styles from './Navbar.module.scss';

export function Navbar() {

        this.Navlinks = React.createRef();

    function openNav() {
        const x = this.NavLinks
        x.style.height = '100%';

    }

    function closeNav() {
        const x = document.getElementById('Navlinks');
        x.style.height = '0%';
    }

    Navbar = () => {
        const [show, setShow] = useState(true);
        const [lastScrollY, setLastScrollY] = useState(0);
        console.log("scroll")

        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) {
                    setShow(false);
                } else {
                    setShow(true);
                }

                setLastScrollY(window.scrollY);
            }
        };

        useEffect(() => {
            if (typeof window !== 'undefined') {
                window.addEventListener('scroll', controlNavbar);

                return () => {
                    window.removeEventListener('scroll', controlNavbar);
                };
            }
        }, [lastScrollY]);

        return (
            <nav className={styles.navbar} ref={this.Navlinks}>
                <div className={styles.logo}>
                    <Logo url="/"/>
                </div>
                <div className={styles.navlinks} id={'Navlinks'}>
                    <Link href="/projects" passHref>
                        <a onClick={closeNav}>Projects</a>
                    </Link>
                    <Dropdown heading="Join Us">
                        <Link href="/partner">
                            <a onClick={closeNav}>Partnering</a>
                        </Link>
                        <p> See what we can help you with </p>
                        <Link href="/volunteer">
                            <a onClick={closeNav}>Volunteering</a>
                        </Link>
                        <p>Learn how you can get involved</p>
                    </Dropdown>
                    <Link href="/about" passHref onClick={closeNav}>
                        <a onClick={closeNav}>About</a>
                    </Link>
                    <Link href="/donate" passHref>
                        <a>
                            <button className={styles.btn} onClick={closeNav}>
                                Donate
                            </button>
                        </a>
                    </Link>
                </div>
                <a href={'#!'} className={styles.icon} onClick={openNav}>
                    <Image src="/images/bars-solid.svg" width={30} height={30} alt="bars"/>
                </a>
            </nav>

        );
    };
}

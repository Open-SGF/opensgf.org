import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Accordion } from '@/components/Accordion/Accordion';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Hamburger } from '@/components/Icons/Hamburger/Hamburger';
import Link from 'next/link';
import { Logo } from '@/components/Icons/Logo/Logo';
import styles from './Navbar.module.scss';

const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }

        return () => media.removeListener(updateTarget);
    }, [updateTarget, width]);

    return targetReached;
};

export function Navbar(): JSX.Element {
    const isBreakpoint = useMediaQuery(600);
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const previousScrollYRef = useRef(0);
    const previousLowestScrollYRef = useRef(0);

    const contactLinks = (
        <>
            <div className={styles.contactLink}>
                <Link href="/partner" passHref>
                    <a className="h4" >Partnering</a>
                </Link>
            </div>
            <p className={styles.contactLinkDescription}> See what we can help you with </p>
            <div className={styles.contactLink}>
                <Link className={styles.contactLink} href="/volunteer" passHref>
                    <a className="h4" >Volunteering</a>
                </Link>
            </div>
            <p className={styles.contactLinkDescription}>Learn how you can get involved</p>
        </>
    );

    useEffect(() => {
        const handleScroll = () => {
            setOpen(false);

            if (window.scrollY > previousScrollYRef.current) {
                setShow(false);
                previousLowestScrollYRef.current = window.scrollY;
            }

            previousScrollYRef.current = window.scrollY;

            if (window.scrollY === 0 || window.scrollY < previousLowestScrollYRef.current - 100) {
                setShow(true);
            }
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
            className={`${styles.navbar} ${show ? '' : styles.hidden} ${
                previousScrollYRef.current > 0 ? styles.bottomShadow : ''
            }`}
        >
            <div className={styles.logo}>
                <Logo url="/" />
            </div>
            <div className={`${styles.navLinks} ${open ? styles.open : styles.closed}`}>
                <Link href="/projects" passHref>
                    <a className="h2" >Projects</a>
                </Link>
                {isBreakpoint ? (
                    <div>
                        <Accordion heading={(<div className="h2">Join Us</div>)} forceClosed={!show}>
                            {contactLinks}
                        </Accordion>
                    </div>
                ) : (
                    <div>
                        <Dropdown heading={(<div className="h2">Join Us</div>)} forceClosed={!show}>
                            {contactLinks}
                        </Dropdown>
                    </div>
                )}
                <Link href="/about" passHref>
                    <a className="h2">About</a>
                </Link>
                <Link href="/donate" passHref>
                    <a>
                        <button className={`${styles.btn} h1`}>Donate</button>
                    </a>
                </Link>
            </div>
            <div onClick={() => setOpen(!open)} className={styles.hamburgerIcon}>
                <Hamburger active={open} />
            </div>
            <div className={styles.backgroundCover} />
        </nav>
    );
}

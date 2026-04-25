'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Accordion } from '@/components/Accordion/Accordion';
import { breakpointSmall } from '@/lib/variables';
import { Button } from '@/components/atoms/Button/Button';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Hamburger } from '@/components/Icons/Hamburger/Hamburger';
import { Logo } from '@/components/Icons/Logo/Logo';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Navbar.module.scss';

const useMediaQuery = (width: string) => {
    const [targetReached, setTargetReached] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }
        return window.matchMedia(`(max-width: ${width}px)`).matches;
    });

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
        return () => media.removeListener(updateTarget);
    }, [updateTarget, width]);

    return targetReached;
};

export function Navbar(): React.ReactNode {
    const isBreakpoint = useMediaQuery(String(breakpointSmall));
    const [open, setOpen] = useState(false);

    const contactLinks = (
        <>
            <div className={styles.contactLink}>
                <SmartLink to="/partner">Partnering</SmartLink>
            </div>
            <p className={styles.contactLinkDescription}> See what we can help you with </p>
            <div className={styles.contactLink}>
                <a href="/register" target="_blank" rel="noopener noreferrer">
                    Register to Volunteer
                </a>
            </div>
            <p className={styles.contactLinkDescription}>Fill out the form and get involved</p>
        </>
    );

    useEffect(() => {
        const handleClick = (event: any) => {
            if (!event.target.matches('#navbar, #navbar *') || event.target.matches('a')) {
                setOpen(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <nav id="navbar" className={`${styles.navbar}`}>
            <div className={styles.logo}>
                <Logo url="/" />
            </div>
            <div className={`${styles.navLinks} ${open ? styles.open : styles.closed}`}>
                <SmartLink to="/projects">Projects</SmartLink>
                {isBreakpoint ? (
                    <div>
                        <Accordion heading={<div className="h2">Join Us</div>}>{contactLinks}</Accordion>
                    </div>
                ) : (
                    <div>
                        <Dropdown heading={<div className="h2">Join Us</div>}>{contactLinks}</Dropdown>
                    </div>
                )}
                <SmartLink to="/about">About</SmartLink>
                <SmartLink to="/code-of-conduct">Code of Conduct</SmartLink>
                <SmartLink to="https://docs.opensgf.org/s/public-docs">Docs</SmartLink>
                <Button href="https://discord.gg/jFD8dZP" text="Join" />
            </div>
            <div onClick={() => setOpen(!open)} className={styles.hamburgerWrapper}>
                <Hamburger active={open} />
            </div>
            <div className={styles.backgroundCover} />
        </nav>
    );
}

import React, { useCallback, useEffect, useState } from 'react';
import { Accordion } from '@/components/Accordion/Accordion';
import { Button } from '@/components/atoms/Button/Button';
import { Dropdown } from '@/components/Dropdown/Dropdown';
import { Hamburger } from '@/components/Icons/Hamburger/Hamburger';
import { Logo } from '@/components/Icons/Logo/Logo';
import { SmartLink } from '@/components/SmartLink/SmartLink';
import styles from './Navbar.module.scss';
import variables from '@/styles/utils/variables.module.scss';

const useMediaQuery = (width: string) => {
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
    const isBreakpoint = useMediaQuery(variables.breakpointSmall);
    const [open, setOpen] = useState(false);

    const contactLinks = (
        <>
            <div className={styles.contactLink}>
                <SmartLink to="/partner">Partnering</SmartLink>
            </div>
            <p className={styles.contactLinkDescription}> See what we can help you with </p>
            <div className={styles.contactLink}>
                <SmartLink to="/volunteer">Volunteering</SmartLink>
            </div>
            <p className={styles.contactLinkDescription}>Learn how you can get involved</p>
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
                <Button href="https://www.codeforamerica.org/donate" text="Donate" />
            </div>
            <div onClick={() => setOpen(!open)} className={styles.hamburgerWrapper}>
                <Hamburger active={open} />
            </div>
            <div className={styles.backgroundCover} />
        </nav>
    );
}

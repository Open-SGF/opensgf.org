import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/dropdown.module.scss';

export function Dropdown() {
    const toggle = () => {
        return () => {
            const menu: HTMLElement | null = document.getElementById('menu');
            if (menu == null) {
                return undefined;
            }
            menu.classList.toggle(styles['show']);
        };
    };

    useEffect(() => {
        window.onclick = function (event) {
            const clickedarea = event.target as HTMLInputElement | null;

            if (clickedarea == null) {
                return;
            }

            if (clickedarea.classList.contains(styles['trigger'])) {
                return;
            }

            const dropdowns = document.getElementsByClassName(styles['content']);
            console.log(event.target);
            let i;
            for (i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains(styles['show'])) {
                    openDropdown.classList.remove(styles['show']);
                }
            }
        };
    }, []);

    return (
        <div>
            <button className={styles.trigger} onClick={toggle()}>
                Join Us
            </button>
            <Image src="/arrow.svg" width={16} height={8} alt="arrow"/>
            <div id="menu" className={styles.content}>
                <Link href="/partner">Partnering</Link>
                <p> See what we can help you with </p>
                <Link href="/volunteer">Volunteering</Link>
                <p>Learn how you can get involved</p>
            </div>
        </div>
    );
}

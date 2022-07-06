import React, { useEffect } from 'react';
import { ArrowDown } from '@/components/Icons/ArrowDown';
import styles from './Dropdown.module.scss';

type IDropdown = {
    children: any;
    heading: string;
};

export function Dropdown({ children, heading }: IDropdown): JSX.Element {
    const toggle = () => {
        const menu: HTMLElement | null = document.getElementById('menu');

        if (menu === null) {
            return;
        }

        menu.classList.toggle(styles['show']);
    };

    useEffect(() => {
        window.onclick = function (event) {
            const clickedArea = event.target as HTMLInputElement | null;

            if (clickedArea == null) {
                return;
            }

            if (clickedArea.classList.contains(styles['trigger'])) {
                return;
            }

            const dropdowns = document.getElementsByClassName(styles['content']);

            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains(styles['show'])) {
                    openDropdown.classList.remove(styles['show']);
                }
            }
        };
    }, []);

    return (
        <div>
            <button className={styles.trigger} onClick={toggle}>
                {heading}
                <ArrowDown />
            </button>
            <div id="menu" className={styles.content}>
                {children}
            </div>
        </div>
    );
}

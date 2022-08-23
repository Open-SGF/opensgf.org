import React, { useEffect, useState } from 'react';
import { ArrowDown } from '@/components/Icons/ArrowDown/ArrowDown';
import styles from './Dropdown.module.scss';

type IDropdown = {
    children: any;
    heading: string;
    forceClosed?: boolean;
};

export function Dropdown({ children, heading, forceClosed = false }: IDropdown): JSX.Element {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleClick = (event: any) => {
            // TODO: replace with react way of referencing elements.
            if (!event.target.matches('#dropdown, #dropdown *')) {
                setShow(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div id="dropdown" className={styles.dropdown}>
            <button
                className={`${styles.trigger} ${show && !forceClosed ? styles.open : ''}`}
                onClick={() => setShow(!show)}
            >
                <span>{heading}</span>
                <ArrowDown />
            </button>
            <div className={`${styles.content}  ${show && !forceClosed ? styles.open : ''}`}>{children}</div>
        </div>
    );
}

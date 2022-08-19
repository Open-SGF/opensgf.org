import React, {useEffect, useState} from 'react';
import { ArrowDown } from '@/components/Icons/ArrowDown';
import styles from './Dropdown.module.scss';

type IDropdown = {
    children: any;
    heading: string;
    forceClosed: boolean;
};

export function Dropdown({ children, heading, forceClosed }: IDropdown): JSX.Element {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleClick = (event: any) => {
            if (!event.target.matches('#navbar, #navbar *')) {
                setShow(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className={styles.dropdown}>
            <button className={styles.trigger} onClick={() => setShow(!show)}>
                {heading}
                <ArrowDown />
            </button>
            <div className={`${styles.content}  ${show && !forceClosed ? styles.shown : ''}`}>
                {children}
            </div>
        </div>
    );
}

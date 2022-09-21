import React, { useEffect, useState } from 'react';
import { ArrowDown } from '@/components/Icons/ArrowDown/ArrowDown';
import styles from './Accordion.module.scss';

interface IAccordion {
    children: JSX.Element;
    heading: JSX.Element;
    forceClosed?: boolean;
}

export function Accordion({ children, heading, forceClosed = false }: IAccordion): JSX.Element {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleClick = (event: any) => {
            // TODO: replace with react way of referencing elements.
            if (!event.target.matches('#accordion, #accordion *')) {
                setShow(false);
            }
        };

        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div id="accordion" className={styles.accordion}>
            <button
                className={`${styles.trigger} ${show && !forceClosed ? styles.open : ''}`}
                onClick={() => setShow(!show)}
            >
                {heading}
                <ArrowDown />
            </button>
            <div className={`${styles.content} ${show && !forceClosed ? styles.open : ''}`}>{children}</div>
        </div>
    );
}

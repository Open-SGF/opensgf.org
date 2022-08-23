import styles from './Hamburger.module.scss';
import { useState } from 'react';

interface IHamburger {
    onClick?: () => void;
    className?: string;
}

export function Hamburger({ onClick = (() => undefined), className: classesFromParent }: IHamburger): JSX.Element {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    const handleClick = () => {
        toggleClass();
        onClick();
    };

    return (
        <div
            className={`${styles.navTrigger} ${classesFromParent} ${isActive ? styles.active : ''}`}
            onClick={handleClick}
        >
            <i />
            <i />
            <i />
        </div>
    );
}

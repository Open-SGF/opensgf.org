import styles from './Hamburger.module.scss';

interface IHamburger {
    active: boolean;
}

export function Hamburger({ active }: IHamburger): React.ReactNode {
    return (
        <div className={`${styles.navTrigger} ${active ? styles.active : ''}`}>
            <i />
            <i />
            <i />
        </div>
    );
}

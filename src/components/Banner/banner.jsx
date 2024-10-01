import { useEffect, useState } from 'react';
import styles from './banner.module.scss';

export function Banner() {
    const [displayBanner, setDisplayBanner] = useState(null);

    useEffect(() => {
        const stateCondition = localStorage.getItem('displayBanner');
        console.log('localStorage = ' + localStorage.getItem('displayBanner'));
        if (stateCondition === 'false') {
            setDisplayBanner(false);
        } else {
            setDisplayBanner(true);
        }
        console.log('stateCondition =' + stateCondition);
    }, []);

    const hideBanner = () => {
        localStorage.setItem('displayBanner', 'false');
        setDisplayBanner(false);
    };

    const display = displayBanner ? styles.banner : styles.hidden;

    return (
        <div className={display}>
            <div>
                <h3 className={styles.textBold}>Method Conference</h3>
            </div>
            <div className={styles.textArea}>
                <p className={styles.textBold}>Join us for a full day of code & learning.</p>
                <p className={styles.text}>Saturday, October 12, 2024, @ eFactory</p>
            </div>
            <div className={styles.container}>
                <a href="https://www.methodconf.com/2024/" target="_blank" className={styles.anchor}>
                    <button className={styles.button}>BUY TICKETS</button>
                </a>
                <button className={styles.exitButton} onClick={hideBanner}>
                    {/* eslint-disable */}
                        <img src="/images/icons/exit-cross.png" className={styles.exit} alt="close banner" />
                        {/* eslint-enable */}
                    {/* We disabled this for linting because we don't have an icon 
                        system for this site yet, and this component is temporary. They can
                        be removed when the icon systems are integrated.*/}
                </button>
            </div>
        </div>
    );
}

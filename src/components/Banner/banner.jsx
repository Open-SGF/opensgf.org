import React from 'react';
import styles from './banner.module.scss';

export default function Banner() {
    const [displayBanner, setDisplayBanner] = React.useState(true);

    const display = displayBanner ? styles.banner : styles.hidden;

    function toggleBanner() {
        setDisplayBanner((prevState) => !prevState);
    }

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
                <a href="https://www.methodconf.com/2024/" target="_blank">
                    <button className={styles.button}>BUY TICKETS</button>
                </a>
                <button className={styles.exitButton} onClick={toggleBanner}>
                    <img src="/images/icons/exit-cross.png" className={styles.exit} alt="close banner" />
                </button>
            </div>
        </div>
    );
}

import React, { useEffect } from 'react';
import styles from './Hero.module.scss';

export function Hero(props) {
    return (
        <div id="container" className={props.bool ? styles.reversecontainer :
            styles.container}>
            <div className={styles.message}>
                <div className={styles.header}>{props.header}</div>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.lable}>{props.lable} </div>
                <div className={styles.list}>{props.list}</div>
            </div>
            <div className={styles.graphic}>
                <div className={styles.image}>{props.image}</div>
                <div className={styles.particles}>{props.particles}</div>
            </div>
            {props.bool}
        </div>
    );
}

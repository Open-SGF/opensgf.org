import React from 'react';
import styles from './Hero.module.scss';

export function Hero(props: any) {
    return (
        <div id="container" className={props.swapSides ? styles.reverseContainer : styles.container}>
            <div className={styles.message}>
                <div className={styles.header}>{props.header}</div>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.label}>{props.lable} </div>
                <div className={styles.list}>{props.list}</div>
            </div>
            <div className={styles.graphic}>
                <div className={styles.image}>{props.image}</div>
                {/*<div className={styles.particles}>{props.particles}</div>*/}
            </div>
        </div>
    );
}

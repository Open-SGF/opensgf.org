import React from 'react';
import styles from './Hero.module.scss';

interface IHero {
    header: JSX.Element;
    text: JSX.Element;
    label?: JSX.Element;
    list?: JSX.Element;
    image: JSX.Element;
    particles?: JSX.Element;
    swapSides?: boolean;
}

export function Hero(props: IHero): JSX.Element {
    return (
        <div id="container" className={props.swapSides ? styles.reverseContainer : styles.container}>
            <div className={styles.message}>
                <div className={styles.header}>{props.header}</div>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.label}>{props.label} </div>
                <div className={styles.list}>{props.list}</div>
            </div>
            <div className={styles.graphic}>
                <div className={styles.image}>{props.image}</div>
                {/*<div className={styles.particles}>{props.particles}</div>*/}
            </div>
        </div>
    );
}

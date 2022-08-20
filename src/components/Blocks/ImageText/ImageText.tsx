import React from 'react';
import styles from './ImageText.module.scss';

interface IImageText {
    text: JSX.Element;
    image: JSX.Element;
    particles?: JSX.Element;
    swapSides?: boolean;
}

export function ImageText(props: IImageText): JSX.Element {
    return (
        <div id="container" className={props.swapSides ? styles.reverseContainer : styles.container}>
            <div className={styles.text}>{props.text}</div>
            <div className={styles.graphic}>
                <div className={styles.image}>{props.image}</div>
                {/*<div className={styles.particles}>{props.particles}</div>*/}
            </div>
        </div>
    );
}

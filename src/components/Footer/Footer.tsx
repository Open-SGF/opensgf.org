import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

export function Footer(): JSX.Element {
    return (
        <div className={styles.pageContainer}>
            <footer className={styles.footer}>
                <Link href="https://codeforamerica.org/" passHref>
                    <a>
                        <Image
                            src="/images/code-for-america-logo.svg"
                            width={200}
                            height={200}
                            alt="CodeforAmerica Logo"
                        />
                    </a>
                </Link>
                <div className={styles.socials}>
                    <Link href="https://www.facebook.com/" passHref>
                        <a>
                            <div className={styles.imageWrapper}>
                                <Image src="/images/facebook-logo.svg" layout="fill" alt="Facebook Logo" />
                                <div className={styles.backgroundFill}/>
                            </div>
                        </a>
                    </Link>
                    <Link href="https://www.meetup.com/" passHref>
                        <a>
                            <div className={styles.imageWrapper}>
                                <Image src="/images/meetup-logo.svg" layout="fill" alt="Meetup Logo" />
                                <div className={styles.backgroundFill}/>
                            </div>
                        </a>
                    </Link>
                    <Link href="https://discord.com/" passHref>
                        <a>
                            <div className={styles.imageWrapper}>
                                <Image src="/images/discord-logo.svg" layout="fill" alt="Discord Logo" />
                                <div className={styles.backgroundFill}/>
                            </div>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/?lang=en" passHref>
                        <a>
                            <div className={styles.imageWrapper}>
                                <Image src="/images/twitter-logo.svg" layout="fill" alt="Twitter Logo" />
                                <div className={styles.backgroundFill}/>
                            </div>
                        </a>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
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
                    <Link href="/" passHref>
                        <a>
                            <Image src="/images/facebook-logo.svg" width={70} height={70} alt="Facebook Logo" />
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/images/meetup-logo.svg" width={70} height={70} alt="Meetup Logo" />
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/images/discord-logo.svg" width={70} height={70} alt="Discord Logo" />
                        </a>
                    </Link>
                    <Link href="/" passHref>
                        <a>
                            <Image src="/images/twitter-logo.svg" width={70} height={70} alt="Twitter Logo" />
                        </a>
                    </Link>
                </div>
            </footer>
        </div>
    );
}

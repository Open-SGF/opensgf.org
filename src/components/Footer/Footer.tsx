import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <div className={styles.pageContainer}>
            <footer className={styles.footer}>
                <Link href="https://codeforamerica.org/">
                    <Image src="/images/code-for-america-logo.svg" width={200} height={200} alt="CodeforAmerica Logo" />
                </Link>
                <div className={styles.socials}>
                    <Link href="">
                        <Image src="/images/facebook-logo.svg" width={70} height={70} alt="Facebook Logo" />
                    </Link>
                    <Link href="">
                        <Image src="/images/meetup-logo.svg" width={70} height={70} alt="Meetup Logo" />
                    </Link>
                    <Link href="">
                        <Image src="/images/discord-logo.svg" width={70} height={70} alt="Discord Logo" />
                    </Link>
                    <Link href="">
                        <Image src="/images/twitter-logo.svg" width={70} height={70} alt="Twitter Logo" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

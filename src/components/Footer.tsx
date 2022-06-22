/* eslint-disable sort-imports */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/footer.module.scss';

export function Footer() {
    return (
        <div className={styles.pagecontainer}>
            <footer className={styles.footer}>
                <Link href="https://codeforamerica.org/">
                    <Image src="/CodeforAmerica.svg" width={200} height={200} alt="CodeforAmerica Logo" />
                </Link>
                <div className={styles.socials}>
                    <Link href="">
                        <Image src="/Facebook.svg" width={70} height={70} alt="Facebook Logo" />
                    </Link>
                    <Link href="">
                        <Image src="/meetup.svg" width={70} height={70} alt="Meetup Logo" />
                    </Link>
                    <Link href="">
                        <Image src="/Discord.svg" width={70} height={70} alt="Discord Logo" />
                    </Link>
                    <Link href="">
                        <Image src="/Twitter.svg" width={70} height={70} alt="Twitter Logo" />
                    </Link>
                </div>
            </footer>
        </div>
    );
}

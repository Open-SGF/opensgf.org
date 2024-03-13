import { ContactForm } from '@/components/Blocks/ContactForm/ContactForm';
import React from 'react';
import { Sponsers } from "@/components/Blocks/Sponsers/Sponsers";
import styles from '@/styles/pages/Partner.module.scss';

export default function partner(): JSX.Element {
    return (
        <div className={styles.pageWrapper}>
            <div>
                <ContactForm />
            </div>
            <Sponsers />
        </div>
    );
}

import { ContactForm } from '@/components/Blocks/ContactForm/ContactForm';
import React from 'react';
import { Sponsors } from '@/components/Blocks/Sponsors/Sponsors';
import styles from '@/styles/pages/Partner.module.scss';

export default function partner(): JSX.Element {
    return (
        <div className={styles.pageWrapper}>
            <div>
                <ContactForm />
            </div>
            <Sponsors />
        </div>
    );
}

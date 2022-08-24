import { ContactForm } from '@/components/Blocks/ContactForm/ContactForm';
import React from 'react';
import styles from '@/styles/pages/Partner.module.scss';

export default function partner(): JSX.Element {
    return (
        <div className={styles.pageWrapper}>
            <ContactForm />
        </div>
    );
}

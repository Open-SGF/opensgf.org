import { ContactForm } from '@/components/Blocks/ContactForm/ContactForm';
import type { Metadata } from 'next';
import { Sponsors } from '@/components/Blocks/Sponsors/Sponsors';
import styles from '@/styles/pages/Partner.module.scss';

export const metadata: Metadata = {
    title: 'Partner | Open SGF',
};

export default function Partner() {
    return (
        <div className={styles.pageWrapper}>
            <div>
                <ContactForm />
            </div>
            <Sponsors />
        </div>
    );
}

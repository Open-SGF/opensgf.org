import { Button } from '@/components/atoms/Button/Button';
import styles from './ContactForm.module.scss';
import { useState } from 'react';

export function ContactForm(): JSX.Element {
    const [formField, setFormField] = useState({
        name: '',
        email: '',
        message: '',
    });

    const formFieldHandler = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormField({ ...formField, [name]: value });
    };

    const encode = (data: any) => {
        return Object.keys(data)
            .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&');
    };

    const clearFormFields = () => {
        setFormField({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleSubmit = (e: any) => {
        fetch('/__forms.html', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...formField }),
        })
            .then(() => clearFormFields())
            .then(() => alert('Thank you!'));

        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.salesPitch}>
                    <h1>Partner With Us</h1>
                    <p>
                        We help non-profits in South-West Missouri with their technical problems. We are primarily
                        skilled with websites, but our technical expertise is fairly broad. Reach out if you think we
                        could help your cause.
                    </p>
                </div>
                <div className={styles.contactForm}>
                    <form
                        onSubmit={handleSubmit}
                        name="contact"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="vinegar"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <input style={{ display: 'none' }} type="text" name="vinegar" />
                        <div className={styles.formRow}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formField.name}
                                onChange={formFieldHandler}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formField.email}
                                onChange={formFieldHandler}
                            />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formField.message}
                                onChange={formFieldHandler}
                            />
                        </div>
                        <Button text="Submit" />
                    </form>
                </div>
                <div className={styles.backgroundBanner} />
            </div>
        </div>
    );
}

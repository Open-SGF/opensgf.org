import { Button } from '@/components/atoms/Button/Button';
import styles from './ContactForm.module.scss';

export function ContactForm(): JSX.Element {
    async function handleSubmit(event: any) {
        event.preventDefault();

        const myForm = event.target;
        const formData = new FormData(myForm);

        try {
            await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as string).toString(),
            });

            console.log('Form successfully submitted.');

            myForm.reset();
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.salesPitch}>
                    <h1>Partner With Us</h1>
                    <p>
                        We help non-profits in South-West Missouri with their technical problems. We are primarly
                        skilled with websites, but our technical exertise is fairly broad. Reach out if you think we
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
                        <input style={{ display: 'none' }} type="text" name="vinegar" />
                        <div className={styles.formRow}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" />
                        </div>
                        <Button text="Submit" />
                    </form>
                </div>
                <div className={styles.backgroundBanner} />
            </div>
        </div>
    );
}

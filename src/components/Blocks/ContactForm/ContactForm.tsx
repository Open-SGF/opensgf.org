import styles from './ContactForm.module.scss';

export function ContactForm(): JSX.Element {
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
                    <form action="">
                        <div className={styles.formRow}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>
                        <div className={styles.formRow}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
                <div className={styles.backgroundBanner} />
            </div>
        </div>
    );
}

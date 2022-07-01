import styles from './ContactForm.module.scss';

export const ContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <div className={styles.salesPitch}>
                    <h1>Partner With Us</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Enim nec dui nunc mattis. Amet consectetur adipiscing elit ut
                        aliquam purus.{' '}
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
};

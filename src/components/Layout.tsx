import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import styles from './layout.module.scss';

export function Layout({ children }: any): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

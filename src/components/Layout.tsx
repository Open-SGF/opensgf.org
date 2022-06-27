import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import styles from '@/styles/layout.module.scss';

export function Layout({ children }: any): JSX.Element {
    return (
        <div className={styles.content}>
            <div className={styles.pageContent}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

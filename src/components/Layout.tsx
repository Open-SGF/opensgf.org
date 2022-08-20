import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';
import styles from './layout.module.scss';

interface ILayout {
    children: any;
}

export function Layout({ children }: ILayout): JSX.Element {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentWrapper}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import styles from '../../styles/layout.module.scss';

export function Layout({ children }: any): JSX.Element {
    return (
        <div className={styles.content}>
            <div className={styles.pagecontent}>
                <Navbar />
                {children}
            </div>
            <Footer />
        </div>
    );
}

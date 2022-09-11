import { Icon } from '@/components/Blocks/IconSet/components/Icon';
import styles from './IconSet.module.scss';

export function IconSet(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <Icon key={1} />
                <Icon key={2} />
                <Icon key={3} />
            </div>
        </div>
    );
}

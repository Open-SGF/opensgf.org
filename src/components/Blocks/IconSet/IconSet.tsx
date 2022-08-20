import { Icon } from '@/components/Blocks/IconSet/components/Icon';
import styles from './IconSet.module.scss';

export function IconSet(): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <Icon />
                <Icon />
                <Icon />
            </div>
        </div>
    );
}

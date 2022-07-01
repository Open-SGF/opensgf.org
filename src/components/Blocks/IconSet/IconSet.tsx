import { Icon } from '@/components/Blocks/IconSet/components/Icon';
import styles from './IconSet.module.scss';

export const IconSet = () => {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <Icon />
                <Icon />
                <Icon />
            </div>
        </div>
    );
};

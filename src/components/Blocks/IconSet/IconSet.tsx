import { Icon, type IconData } from '@/components/Blocks/IconSet/components/Icon';
import styles from './IconSet.module.scss';

type IIconSet = {
    icons: IconData[];
};

export function IconSet({ icons }: IIconSet): JSX.Element {
    return (
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                {icons.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </div>
        </div>
    );
}

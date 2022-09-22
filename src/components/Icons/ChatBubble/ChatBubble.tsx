import styles from './ChatBubble.module.scss';

type IChatBubble = {
    color: string;
    mirror?: boolean;
};

export function ChatBubble({ color, mirror = false }: IChatBubble): JSX.Element {
    return (
        <div className={mirror ? styles.mirror : ''}>
            <svg width="571" height="291" viewBox="0 0 571 291" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_103_3)">
                    <path
                        d="M532 18.0093H47.5C28.955 17.7729 23.5914 21.9766 23 36.5093V203.009C23.5886 217.43 30.1326 220.132 47.5 220.009H93.1239C95.3594 220.009 96.8095 222.366 95.8018 224.362L77.7273 260.149C76.3676 262.841 79.3846 265.632 81.9625 264.066L153.782 220.445C154.252 220.16 154.79 220.009 155.34 220.009H532C544.954 219.569 549.442 215.059 549 194.009V36.5093C549.112 22.1175 545.432 18.0214 532 18.0093Z"
                        fill={color}
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_d_103_3"
                        x="0"
                        y="0"
                        width="570.029"
                        height="290.518"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                    >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset dx="-1" dy="4" />
                        <feGaussianBlur stdDeviation="11" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.576557 0 0 0 0 0.712966 0 0 0 0 0.829167 0 0 0 0.51 0"
                        />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_103_3" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_103_3" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}

import { throttle } from 'throttle-debounce';

const SCROLL_OFFSET = 80;

export function navigation() {
    return {
        isOverlayOpen: false,
        toggle() {
            this.isOverlayOpen = !this.isOverlayOpen;
        },
        isScrolled: false,
        onScroll: throttle(25, function () {
            const scroll = window.scrollY || window.pageYOffset;

            if (scroll >= SCROLL_OFFSET) {
                this.isScrolled = true;
                return;
            }

            this.isScrolled = false;
        }),
    };
}

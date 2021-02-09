import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { throttle } from 'throttle-debounce';

const SCROLL_OFFSET = 80;

export function navigation() {
    return {
        init() {
            initSmoothScroll.bind(this)();
            initScrollSpy.bind(this)();
        },
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

function initSmoothScroll() {
    const $navLinks = this.$el.querySelectorAll('a.js-nav-link');

    for (const $navLink of $navLinks) {
        if ($navLink.pathname !== window.location.pathname) {
            continue;
        }

        $navLink.addEventListener('click', (evt) => {
            const $target = document.querySelector($navLink.hash);

            scrollIntoView($target, {
                behavior: 'smooth',
                scrollMode: 'if-needed',
            });

            this.isOverlayOpen = false;
        });
    }
}

function initScrollSpy($container) {

}

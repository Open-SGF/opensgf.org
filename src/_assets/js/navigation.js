import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import Gumshoe from 'gumshoejs';
import { throttle } from 'throttle-debounce';

const SCROLL_OFFSET = 80;
const NAV_LINK_SELECTOR = 'a.js-nav-link';
const MOBILE_NAV_LINK_SELECTOR = 'a.js-nav-link-mobile';

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
    const $navLinks = this.$el.querySelectorAll(`${NAV_LINK_SELECTOR}, ${MOBILE_NAV_LINK_SELECTOR}`);

    for (const $navLink of $navLinks) {
        if ($navLink.pathname !== window.location.pathname) {
            continue;
        }

        $navLink.addEventListener('click', (evt) => {
            const $target = document.querySelector($navLink.hash);

            scrollIntoView($target, {
                behavior: 'smooth',
                scrollMode: 'always',
                block: 'start',
            });

            this.isOverlayOpen = false;
        });
    }
}

function initScrollSpy() {
    const spy = new Gumshoe(NAV_LINK_SELECTOR, {
        navClass: 'active',
        reflow: true,
        offset: 100,
    });

    const mobileSpy = new Gumshoe(MOBILE_NAV_LINK_SELECTOR, {
        navClass: 'active',
        reflow: true,
        offset: 44,
    });

    spy.detect();
    mobileSpy.detect();
}

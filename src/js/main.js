import { BaseHelpers } from './helpers/base-helpers';
import { BurgerMenu } from './modules/burger-menu';
import Swiper, { Pagination, FreeMode } from 'swiper';

BaseHelpers.checkWebpSupport();

BaseHelpers.calcScrollbarWidth();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BurgerMenu.init();

const initCheckrSlider = () => {
    let mainBannerSlider = null;

    const initSlider = () => {
      mainBannerSlider = new Swiper(".js-check-slider", {
        modules: [Pagination, FreeMode],
        slidesPerView: "auto",
        autoHeight: false,
        slideClass: "item",
        spaceBetween: 24,
        freeMode: {
          sticky: false
        },
        pagination: {
          el: ".pagination-bullets",
          type: "bullets",
          bulletClass: "pagination-bullet",
          bulletActiveClass: "pagination-bullet-active",
          clickable: true,
        },
      });
    };

    const destroySlider = () => {
      if (mainBannerSlider) {
          mainBannerSlider.destroy(true, true);
          mainBannerSlider = null;
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 991) {
        if (!mainBannerSlider) {
          initSlider();
        }
      } else {
        destroySlider();
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
};

const initScripts = () => {
  initCheckrSlider();
};

document.addEventListener('DOMContentLoaded', initScripts);



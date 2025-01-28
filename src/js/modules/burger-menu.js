export class BurgerMenu {

  static burgerButton = document.querySelector('.js-header-burger');
  static headerMenu = document.querySelector('.js-header-mobile-menu');
  static isOpen = false;

  static init() {
    if (this.burgerButton && this.headerMenu) {
      this.burgerButton.addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }

  static toggleMenu() {
    this.burgerButton.classList.toggle('is-active');
    this.headerMenu.classList.toggle('is-open');

    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.bodyFixPosition();
    } else {
      this.bodyUnfixPosition();
    }
  }

  static bodyFixPosition() {
    setTimeout( () => {
      if ( !document.body.hasAttribute('data-body-scroll-fix') ) {
        let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        document.body.setAttribute('data-body-scroll-fix', scrollPosition);
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + scrollPosition + 'px';
        document.body.style.left = '0';
        document.body.style.width = '100%';
      }
    }, 15 );
  }

  static bodyUnfixPosition() {
    if ( document.body.hasAttribute('data-body-scroll-fix') ) {
      let scrollPosition = document.body.getAttribute('data-body-scroll-fix');
      document.body.removeAttribute('data-body-scroll-fix');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      window.scroll(0, scrollPosition);
    }
  }
}
export class BurgerMenu {

  static burgerButton = document.querySelector('.js-header-burger');
  static headerMenu = document.querySelector('.js-header-mobile-menu');
  static isOpen = false;

  static get body() {
    return BurgerMenu._body || (BurgerMenu._body = document.body);
  }

  static _body = null;

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
    setTimeout(() => {
      if (!this.body.classList.contains('body-scroll-fix')) {
          this.body.classList.add('body-scroll-fix');
      }
    }, 15);
  }

  static bodyUnfixPosition() {
    if (this.body.classList.contains('body-scroll-fix')) {
        this.body.classList.remove('body-scroll-fix');
    }
  }
}
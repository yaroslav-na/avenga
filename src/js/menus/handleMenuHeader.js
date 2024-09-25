import { createMenu } from './createMenu.js';

export function handleMenuHeader() {
  const header = document.querySelector('[data-js="header"]');
  const burgerButton = document.querySelector('[data-js="burger-button"]');
  const menuLinks = document.querySelectorAll('[data-js="menu-link"]');

  const menu = createMenu(document.body, header, burgerButton);

  menu.hide();
  window.addEventListener('resize', menu.hide);
  burgerButton.addEventListener('click', menu.toggle);
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', menu.hide);
  });
}

/**
 *
 * @param {HTMLElement} page
 * @param {HTMLElement} header
 * @param {HTMLElement} burgerButton
 */
export function createMenu(page, header, burgerButton) {
  const CONFIG = {
    CSS_VARS: {
      HEADER_HEIGHT: '--header-height',
    },
    ICONS_ATTRIBUTES: {
      SET_TO: 'xlink:href',
      CLOSE: 'data-js-close-icon',
      OPEN: 'data-js-open-icon',
    },
    CLASSNAMES: {
      HEADER: 'header--menu-shown',
      PAGE: 'page--locked',
    },
  };
  let isShown = false;

  function handle(localIsShown) {
    if (localIsShown) {
      document.documentElement.style.setProperty(
        CONFIG.CSS_VARS.HEADER_HEIGHT,
        header.clientHeight + 'px'
      );
    }

    const classMethod = localIsShown ? 'add' : 'remove';
    const iconAttribute = localIsShown
      ? CONFIG.ICONS_ATTRIBUTES.OPEN
      : CONFIG.ICONS_ATTRIBUTES.CLOSE;
    const useElement = burgerButton.querySelector(`[${iconAttribute}]`);

    header.classList[classMethod](CONFIG.CLASSNAMES.HEADER);
    page.classList[classMethod](CONFIG.CLASSNAMES.PAGE);

    if (useElement) {
      useElement.setAttribute(
        CONFIG.ICONS_ATTRIBUTES.SET_TO,
        useElement.getAttribute(iconAttribute)
      );
    }
  }

  return {
    hide() {
      handle(false);
    },
    show() {
      handle(true);
    },
    toggle() {
      isShown = !isShown;
      handle(isShown);
    },
  };
}

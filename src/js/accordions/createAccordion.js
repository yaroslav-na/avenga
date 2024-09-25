export function createAccordion(accordion, accordionButton) {
  const CONFIG = {
    CLASSNAMES: {
      ACCORDION: 'accordion--open',
    },
    ICONS_ATTRIBUTES: {
      SET_TO: 'xlink:href',
      CLOSE: 'data-js-close-icon',
      OPEN: 'data-js-open-icon',
    },
  };
  let isOpen = false;

  function handle(localIsOpen) {
    const classMethod = localIsOpen ? 'add' : 'remove';
    const iconAttribute = localIsOpen
      ? CONFIG.ICONS_ATTRIBUTES.OPEN
      : CONFIG.ICONS_ATTRIBUTES.CLOSE;
    const useElement = accordionButton.querySelector(`[${iconAttribute}]`);

    accordion.classList[classMethod](CONFIG.CLASSNAMES.ACCORDION);

    if (useElement) {
      useElement.setAttribute(
        CONFIG.ICONS_ATTRIBUTES.SET_TO,
        useElement.getAttribute(iconAttribute)
      );
    }
  }

  return {
    open() {
      handle(true);
    },
    toggle() {
      isOpen = !isOpen;
      handle(isOpen);
    },
    close() {
      handle(false);
    },
  };
}

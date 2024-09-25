import { createStorageManager } from '../utils/createStorageManager.js';

export function handleCookieModal() {
  const IS_SHWON_VAR = 'isCookieModalShown';
  const lsManager = createStorageManager(localStorage);
  const modalWindow = document.querySelector('[data-js="modal-window"]');
  const isCookieModalShown = lsManager.get(IS_SHWON_VAR, false);

  if (isCookieModalShown) {
    return;
  }

  modalWindow.classList.add('modal-window-container--shown');
  document.body.classList.add('page--locked');

  const buttons = modalWindow.querySelectorAll(
    '[data-js="modal-window-button"]'
  );

  buttons.forEach((button) => {
    button.addEventListener('click', closeWindow);
  });

  function closeWindow() {
    lsManager.set(IS_SHWON_VAR, true);
    modalWindow.classList.remove('modal-window-container--shown');
    document.body.classList.remove('page--locked');
  }
}

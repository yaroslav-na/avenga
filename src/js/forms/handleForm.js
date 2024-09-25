export function handleForm() {
  const form = document.querySelector('[data-js="contact-form"]');

  form.addEventListener('submit', handleFormSubmit);

  /**
   *
   * @param {Event} event
   */
  function handleFormSubmit(event) {
    event.preventDefault();

    for (const formElement of event.target) {
      if ('value' in formElement) {
        formElement.value = '';
      }
      if ('checked' in formElement) {
        formElement.checked = false;
      }
    }
  }
}

import { createAccordion } from './createAccordion.js';

export function handleFAQAccordion() {
  const accordionElements = document.querySelectorAll(
    '[data-js="faq-accordion"]'
  );
  const accordionButtons = document.querySelectorAll(
    '[data-js="faq-accordion-button"]'
  );

  accordionElements.forEach((accordionElement, index) => {
    const accordionButton = accordionButtons[index];
    const accordion = createAccordion(accordionElement, accordionButton);

    accordion.close();
    accordionButton.addEventListener('click', accordion.toggle);
  });
}

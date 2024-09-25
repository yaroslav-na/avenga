import emblaCarousel from 'embla-carousel';

export function initTechnologiesSlider() {
  const buttons = document.querySelectorAll(
    '[data-js="technologies-carousel-button"]'
  );
  const buttonSlider = document.querySelector(
    '[data-js="technologies-carousel-buttons"]'
  );
  const mainSlider = document.querySelector(
    '[data-js="technologies-carousel"]'
  );
  const CONFIG = {
    CLASSNAMES: {
      BUTTON: 'technologies__option-button--selected',
    },
    OPTIONS: {
      BUTTONS: { loop: false, dragFree: true },
      MAIN: { loop: false },
    },
  };

  const buttonsSliderApi = emblaCarousel(buttonSlider, CONFIG.OPTIONS.BUTTONS);
  const mainSliderApi = emblaCarousel(mainSlider, CONFIG.OPTIONS.MAIN);

  mainSliderApi.on('init', handleSlideSelect);
  mainSliderApi.on('select', handleSlideSelect);
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => mainSliderApi.scrollTo(index));
  });

  function handleSlideSelect() {
    const selected = mainSliderApi.selectedScrollSnap();

    buttonsSliderApi.scrollTo(selected);
    buttons.forEach((button, index) => {
      const method = index === selected ? 'add' : 'remove';

      button.classList[method](CONFIG.CLASSNAMES.BUTTON);
    });
  }
}

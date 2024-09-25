import emblaCarousel from 'embla-carousel';
import {
  checkIfCanScrollNext,
  checkIfCanScrollPrev,
  updateInfo,
} from './slider.js';

export function initWhatWeDoSlider() {
  const slider = document.querySelector('[data-js="what-we-do-carousel"]');
  const info = document.querySelector('[data-js="what-we-do-carousel-info"]');
  const prevBtn = document.querySelector(
    '[data-js="what-we-do-carousel-prev-btn"]'
  );
  const nextBtn = document.querySelector(
    '[data-js="what-we-do-carousel-next-btn"]'
  );
  const options = { loop: false, align: 'start' };
  const emblaApi = emblaCarousel(slider, options);

  emblaApi.on('resize', handleSlider);
  emblaApi.on('init', handleSlider);
  emblaApi.on('select', handleSlider);
  nextBtn.addEventListener('click', emblaApi.scrollNext);
  prevBtn.addEventListener('click', emblaApi.scrollPrev);

  function handleSlider() {
    updateInfo(info, emblaApi);
    checkIfCanScrollNext(nextBtn, emblaApi);
    checkIfCanScrollPrev(prevBtn, emblaApi);
  }
}

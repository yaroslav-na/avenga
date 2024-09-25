import emblaCarousel from 'embla-carousel';
import {
  checkIfCanScrollNext,
  checkIfCanScrollPrev,
  updateInfo,
} from './slider.js';

export function initReviewSlider() {
  const blogSlider = document.querySelector('[data-js="reviews-carousel"]');
  const prevBtn = document.querySelector(
    '[data-js="reviews-carousel-prev-btn"]'
  );
  const nextBtn = document.querySelector(
    '[data-js="reviews-carousel-next-btn"]'
  );
  const info = document.querySelector('[data-js="reviews-carousel-info"]');
  const options = {
    loop: false,
    align: 'start',
    slidesToScroll: 2,
    breakpoints: { '(max-width: 768px)': { slidesToScroll: 1 } },
  };

  const emblaApi = emblaCarousel(blogSlider, options);

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

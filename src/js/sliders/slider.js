/**
 * @typedef {import("embla-carousel").EmblaCarouselType} EmblaCarouselType
 */

/**
 *
 * @param {HTMLElement} infoElement
 * @param {EmblaCarouselType} emblaApi
 */
export function updateInfo(infoElement, emblaApi) {
  infoElement.innerHTML = `${emblaApi.selectedScrollSnap() + 1}/${emblaApi.scrollSnapList().length}`;
}

/**
 *
 * @param {HTMLElement} nextButtonElement
 * @param {EmblaCarouselType} emblaApi
 */
export function checkIfCanScrollNext(nextButtonElement, emblaApi) {
  nextButtonElement.disabled = !emblaApi.canScrollNext();
}

/**
 * @param {HTMLElement} prevButtonElement
 * @param {EmblaCarouselType} emblaApi
 */
export function checkIfCanScrollPrev(prevButtonElement, emblaApi) {
  prevButtonElement.disabled = !emblaApi.canScrollPrev();
}

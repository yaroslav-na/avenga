import { isWebpSupported } from './__plagin-helper/index.js';

import { handleFAQAccordion } from './accordions/handleFAQAccordions.js';
import { handleMenuHeader } from './menus/handleMenuHeader.js';
import { handleCookieModal } from './modals/handleCookieModal.js';
import { handleForm } from './forms/handleForm.js';

import { initBlogSlider } from './sliders/initBlogSlider.js';
import { initReviewSlider } from './sliders/initReviewSlider.js';
import { initTechnologiesSlider } from './sliders/initTechnologiesSlider.js';
import { initWhatWeDoSlider } from './sliders/initWhatWeDoSlider.js';

isWebpSupported();

handleFAQAccordion();
handleMenuHeader();
handleCookieModal();
handleForm();

initWhatWeDoSlider();
initTechnologiesSlider();
initBlogSlider();
initReviewSlider();

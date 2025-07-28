import './assets/scss/all.scss';

import './assets/js/collect';

// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.2,
      spaceBetween: 10,
      breakpoints: {
        375: {
          slidesPerView: 4,
          spaceBetween: 40,
        }
      },
});

const swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: "auto",
      spaceBetween: 10,
});
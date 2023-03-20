// new Swiper('.buy-now-slider-container');
const swiper = new Swiper('.buy-now-slider-container', {
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup:1,
      spaceBetween: 16,
    },
  },

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,  
  },

  // Navigation arrows
  navigation: {
    nextEl: '.buy-now-swiper-button-next',
    prevEl: '.buy-now-swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.buy-now-swiper-scrollbar',
  },
});


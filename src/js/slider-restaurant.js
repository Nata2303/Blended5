new Swiper('.slider-img', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  preloadImages: true,
  slidesPerView: 1.5,
  simulateTouch: true,
  touchRatio: 3,
  grabCursor: true,
  spaceBetween: 20,
  initialSlide: 3,

  breakpoints: {
    768: {
      slidesPerView: 1.5,
    },

    1440: {
      slidesPerView: 1.5,
    },
  },
});

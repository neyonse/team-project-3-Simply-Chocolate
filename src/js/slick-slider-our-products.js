$(document).ready(function () {
  var productsSlider = $('.our-products-slider');

  function disableSlider() {
    if ($(window).width() < 1200) {
      if (!productsSlider.hasClass('slick-initialized')) {
        productsSlider.slick({
          arrows: false,
          dots: true,
          speed: 1000,
          variableWidth: true,
          waitForAnimate: false,
        });
      }
    } else {
      if (productsSlider.hasClass('slick-initialized')) {
        productsSlider.slick('unslick');
      }
    }
  }

  disableSlider();

  $(window).on('resize', function () {
    disableSlider();
  });
});

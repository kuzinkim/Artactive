var swiperService = new Swiper('.swiper-container.swiper-container--service', {
    navigation: {
      nextEl: '.service-button-next.swiper-button-next-custom',
      prevEl: '.service-button-prev.swiper-button-prev-custom',
    }
});

var swiperReviews = new Swiper('.swiper-container.swiper-container--reviews', {
    loop: true,
    spaceBetween: 25,
    navigation: {
      nextEl: '.reviews-button-next.swiper-button-next-custom',
      prevEl: '.reviews-button-prev.swiper-button-prev-custom',
    },
});
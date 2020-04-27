const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    grabCursor: true,
    effect: 'coverflow',
    centeredSlides: true,
    speed: 1000,
    slidesPerView: 1,
    breakpoints: {
        1024: {
            slidesPerView: 2,
        }
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
});
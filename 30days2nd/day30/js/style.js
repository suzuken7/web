

window.addEventListener('DOMContentLoaded', function() {
    var swiperSlide = new Swiper('.swiperSlide .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        loopedSlides: 6,
        slidesPerView: 2.65, // 見えるスライドの数
        centeredSlides : false, // アクティブなスライドを真ん中にもってくるか
        slideToClickedSlide: true, // クリックすると該当するスライドに移動
        spaceBetween: 44, // スライド間の距離
        breakpoints: {
            543: {
            slidesPerView: 2
            }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        autoplay: {
            delay: 1000,
            disableOnInteraction: true
        },
    });
  }, false);
   
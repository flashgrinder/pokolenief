window.addEventListener('DOMContentLoaded', function() {

    const menu = ['F-TRIP', 'F-EDUCATION', 'F-CAREER', 'F-RULES']
    const mySwiper = new Swiper ('.head-slider', {
        // If we need pagination
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        pagination: {
        el: '.head-slider__pagination',
                clickable: true,
            renderBullet: function (index, className) {
                return '<span class="head-slider__bullet ' + className + '">' + (menu[index]) + '</span>';
            },
        }
    })

    lightGallery(document.querySelector('.gallery__masonry'));

})

window.addEventListener('DOMContentLoaded', function() {

    // Slider
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

    // Gallery
    lightGallery(document.querySelector('.gallery__masonry'));

    // Mobile-menu
    let burgerMenu = document.querySelector('.burger-menu');
	let headerMenu = document.querySelector('.header__menu');

	function showHeaderMenu(e) {
        headerMenu.classList.toggle('header__menu--active');  
    }

    function escMenu(e) {
        if(headerMenu.classList.contains('header__menu--active')) {
            if(e.keyCode === 27 || e.wich === 27) {
                headerMenu.classList.remove('header__menu--active');
            }
        }
    }

    document.addEventListener("keydown", escMenu);

    burgerMenu.addEventListener('click', showHeaderMenu);

})

window.addEventListener('DOMContentLoaded', function() {

    // HEAD-SCREEN SLIDER
    const menu = ['F-TRIP', 'F-EDUCATION', 'F-CAREER', 'F-RULES']
    const headSlider = new Swiper ('.head-slider', {
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

    // SLIDER-RECITAL
    const sliderRecital = new Swiper ('.slider__swiper', {
        slidesPerView: 1,
        loop: true,
        effect: 'fade',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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

    // Modal window
    /* Modal Window */
    const modalService = () => {
        const d = document;
        const body = d.querySelector('body');
        const buttons = d.querySelectorAll('[data-modal-trigger]');

        for(let button of buttons) {
            triggerEvent(button);
        }
        
        function triggerEvent(button) {
          button.addEventListener('click', () => {
            const trigger = button.getAttribute('data-modal-trigger');
            const modal = d.querySelector(`[data-modal=${trigger}]`);
            const modalBody = modal.querySelector('.modal__body');
            const closeBtn = modal.querySelector('.modal__close');
            
            closeBtn.addEventListener('click', () => modal.classList.remove('is-open'))

            modal.addEventListener('click', () => {
                modal.classList.remove('is-open')
                modal.classList.add('is-out');
                setTimeout(() => {
                    modal.classList.remove('is-out');
                }, 1300);
            } )
            
            modalBody.addEventListener('click', (e) => e.stopPropagation());
      
            modal.classList.add('is-open');
            
            body.addEventListener('keydown', (e) => {
                    if(e.keyCode === 27) {
                        modal.classList.remove('is-open')
                    }
                });
            });
        }
    }
      
    modalService();

})

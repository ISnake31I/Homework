(function () {

    // BURGER

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1200) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    };

    // WORKS--GALLARY--OPEN

    const projectItems = document.querySelectorAll('.works__grid-item');

    projectItems.forEach(item => {
        const mainPhoto = item.querySelector('.main__img');
        const thumbnails = item.querySelectorAll('.thumbnails');

        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', () => {
                mainPhoto.src = thumb.src;
            });
        });
    });

    // WORKS--BUTTON and (MAX-WIDTH: 800-1200px)

    const button = document.querySelector('.works__button');
    const hiddenItems = document.querySelectorAll('.works__grid-item.hiden');

    function manageVisibility() {
        const thirdItem = document.querySelector('.works__grid-item:nth-child(3)');
        const isSmallScreen = window.innerWidth <= 1200;

        if (isSmallScreen) {
            thirdItem.classList.add('hiden');
        } else {
            thirdItem.classList.remove('hiden');
        }
    }

    window.addEventListener('resize', manageVisibility);

    manageVisibility();

    button.addEventListener('click', function () {
        hiddenItems.forEach((item) => {
            item.classList.toggle('hiden');
        });

        const thirdItem = document.querySelector('.works__grid-item:nth-child(3)');
        const isHidden = thirdItem.classList.contains('hiden');
        const isSmallScreen = window.innerWidth <= 1200;

        if (isHidden) {
            thirdItem.classList.remove('hiden');
        } else {
            if (isSmallScreen) {
                thirdItem.classList.add('hiden');
            }
        }

        const buttonText = button.querySelector('.works__button-text');
        if (hiddenItems[0].classList.contains('hiden')) {
            buttonText.textContent = 'View All Projects ->';
        } else {
            buttonText.textContent = 'Hide Projects';
        }
    });

    // SLIDER--WORKS 

    const swiperWorks = new Swiper('.works__slider', {

        pagination: {
            el: '.works__pagination',
            
        },

        navigation: {
            nextEl: '.works__next',
            prevEl: '.works__prev',
        },
    });

    // SLIDER--TESTIMONIALS

    const swiperTestimonials = new Swiper('.testimonials__slider', {

        spaceBetween: 30,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.testimonials__next',
            prevEl: '.testimonials__prev',
        },

        breakpoints: {

            801: {
                slidesPerView: 2,
                centeredSlides: false,
            },

            1201: {
                slidesPerView: 3,
                centeredSlides: false,
            }

        }
    });

    // FAQ--ACCORDION

    document.addEventListener('DOMContentLoaded', function () {
        const controls = document.querySelectorAll('.accordion__list-control');
    
        controls.forEach(control => {
            control.addEventListener('click', (event) => {
                event.preventDefault();
    
                const parentItem = control.closest('.accordion__list-item');
                const content = parentItem.querySelector('.accordion__list-content');
    
                document.querySelectorAll('.accordion__list-item').forEach(item => {
                    if (item !== parentItem) {
                        item.classList.remove('accordion__list-item--open');
                        const itemContent = item.querySelector('.accordion__list-content');
                        itemContent.style.maxHeight = null;
                    }
                });
    
                const isOpen = parentItem.classList.toggle('accordion__list-item--open');
                content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null;
            });
        });
        // Инициализация: открываем элемент, если у него есть класс 'accordion__list-item--open'
    document.querySelectorAll('.accordion__list-item').forEach(item => {
        const content = item.querySelector('.accordion__list-content');
        if (item.classList.contains('accordion__list-item--open')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = null;
        }
    });
    });


})()
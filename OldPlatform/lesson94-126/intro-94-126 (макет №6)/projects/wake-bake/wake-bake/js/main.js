(function () {

    // Burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Modal

    const modal = document.querySelector('.modal')
    const modalButton = document.querySelector('.about__img-button')

    modalButton.addEventListener('click', openModal)
    modal.addEventListener('click', closeModal)

    function openModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal')
    }

    function closeModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
            document.body.classList.remove('body--opened-modal')
        }


    }

    // Tabs

    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tabContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tabs-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tabs-content--show')
        }


        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tabs-content--show')


    }

    // Accordion

    document.addEventListener('DOMContentLoaded', function () {
        const controls = document.querySelectorAll('.accordion-list__control');
    
        controls.forEach(control => {
            control.addEventListener('click', (event) => {
                event.preventDefault();
    
                const parentItem = control.closest('.accordion__list-item');
                const content = parentItem.querySelector('.accordion-list__content');
    
                document.querySelectorAll('.accordion__list-item').forEach(item => {
                    if (item !== parentItem) {
                        item.classList.remove('accordion__list-item--open');
                        const itemContent = item.querySelector('.accordion-list__content');
                        itemContent.style.maxHeight = null;
                    }
                });
    
                const isOpen = parentItem.classList.toggle('accordion__list-item--open');
                content.style.maxHeight = isOpen ? content.scrollHeight + 'px' : null;
            });
        });
    });

    // slider-gallary

    const swiperGallary = new Swiper('.gallary__slider', {
        spaceBetween: 16,
        slidesPerView: 1.5,
        centeredSlides: true,

        pagination: {
            el: '.gallary__pagination',
            type: 'fraction',
        },

        navigation: {
            prevEl: '.gallary__prev',
            nextEl: '.gallary__next',
        },

        breakpoints: {
            451: {
                slidesPerView: 2,
                centeredSlides: false,
            },

            601: {
                slidesPerView: 3,
                centeredSlides: false,
            },

            801: {
                spaceBetween: 32,
                slidesPerView: 4,
                centeredSlides: false,
            }

        }

    });

    // slider-testimonials

    const swiperTestimonials = new Swiper('.testimonials__slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            prevEl: '.testimonials__prev',
            nextEl: '.testimonials__next',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {

            901: {
                slidesPerView: 1.5,
            },

            1201: {
                slidesPerView: 2,
            }

        }

    });

// phone-mask

    const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)




})()



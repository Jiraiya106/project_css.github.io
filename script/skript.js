new Swiper('.portfolio', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el:'.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    },
    
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },

    grabCursor: true,

    slideToClickedSlide: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pegeUpDown:true,
    },

    mousewheel: {
        sensitivity: 1,
        //eventsTarget: ".image-slider"
    },

    autoHeight: true,

    slidesPerView: '3',

    loop: true,

    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },

    speed: 800,

    effect: 'coverflow',

    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        slideShadows: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        1150: {
            slidesPerView: 2,
        },
        1600: {
            slidesPerView: 3,
        }
    },

    
});

// let sliderBlock = document.querySelector('.portfolio');

// sliderBlock.addEventListener("mouseenter", function(e) {
//     myImageSlider.params.autoplay.disableOnInteraction = false;
//     myImageSlider.params.autoplay.delay = 1000;
//     myImageSlider.autoplay.start();
    
// });
// sliderBlock.addEventListener("mouseleave", function(e) {
//     myImageSlider.autoplay.stop();
// });

// document.querySelector('.box').addEventListener('click', function(e) {
//     e.preventDefault();
//     this.classList.toggle('open');
// })
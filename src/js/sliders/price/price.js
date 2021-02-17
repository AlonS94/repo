let Swiper = require("../brends/swiper.min.js");
const slider2 = document.querySelector('.price__swiper-container');
let btn = document.querySelector('.swiper-container__btnOpen');
let wrapper = document.querySelector('.price__wrapper');
let icon = document.querySelector('#icon');
let textOnBtn = document.querySelector('.swiper-container__btnOpen_text');
let mySwiper2;



function mobileSlider2() {
   
    if (window.innerWidth <= 767 ) {
        mySwiper2 = new Swiper(slider2, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            slideClass: 'price__card',
            wrapperClass: 'price__wrapper',
            pagination: {
                clickable: true,
                el: '.price__swiper-pagination',
                type: 'bullets',
              },
             
          });
    }
    if (window.innerWidth > 767) {

        if(slider2.classList.contains('swiper-container-initialized')){
            mySwiper2.destroy();
        }      
    }
}


mobileSlider2();

window.addEventListener('resize', function() {
    mobileSlider2();
});

let Swiper = require("../brends/swiper.min.js");
const slider1 = document.querySelector('.sliders-equip__swiper-container');
let btn = document.querySelector('.sliders-equip__btnOpen');
let wrapper = document.querySelector('.sliders-equip__wrapper');
let icon = document.querySelector('#icon1');
let textOnBtn = document.querySelector('.sliders-equip__btnOpen_text');
let mySwiper1;




function mobileSlider1() {
    if (window.innerWidth <= 767 ) {
        mySwiper1 = new Swiper(slider1, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            slideClass: 'sliders-equip__card',
            wrapperClass: 'sliders-equip__wrapper',
            pagination: {
                clickable: true,
                el: '.sliders-equip__swiper-pagination',
                type: 'bullets',
              },
             
          });
    }
    if (window.innerWidth > 767) {
        if(slider1.classList.contains('swiper-container-initialized')){
            mySwiper1.destroy();
        }      
    }
}

mobileSlider1();

window.addEventListener('resize', function() {
    mobileSlider1();
});

btn.addEventListener('click', function () {
   if (wrapper.classList.contains('sliders-equip__wrapper_closed')){
    wrapper.classList.remove('sliders-equip__wrapper_closed');
    icon.classList.add('swiper-container__btnOpen_rotate');
    icon.classList.remove('swiper-container__btnOpen_rotateStandart');
    textOnBtn.innerHTML  = 'Скрыть';
   } else {
    wrapper.classList.add('sliders-equip__wrapper_closed');
    icon.classList.remove('swiper-container__btnOpen_rotate');
    icon.classList.add('swiper-container__btnOpen_rotateStandart');
    textOnBtn.innerHTML  = 'Показать все';
   }
  });
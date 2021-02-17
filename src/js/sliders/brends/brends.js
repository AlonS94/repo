let Swiper = require("./swiper.min.js");
const slider = document.querySelector('.swiper-container');
let btn = document.querySelector('.swiper-container__btnOpen');
let wrapper = document.querySelector('.swiper-container__wrapper');
let icon = document.querySelector('#icon');
let textOnBtn = document.querySelector('.swiper-container__btnOpen_text');
let mySwiper;


function mobileSlider() {
    if (window.innerWidth <= 767 ) {
        mySwiper = new Swiper(slider, {
            slidesPerView: 'auto',
            spaceBetween: 16,
            slideClass: 'swiper-container__card',
            wrapperClass: 'swiper-container__wrapper',
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
                type: 'bullets',
              },
             
          });
    }
    if (window.innerWidth > 767) {
        
        if(slider.classList.contains('swiper-container-initialized')){
            mySwiper.destroy();
        }      
    }
}

mobileSlider();

window.addEventListener('resize', function() {
    mobileSlider();
});


btn.addEventListener('click', function () {
   if (wrapper.classList.contains('swiper-container__wrapper_closed')){
    wrapper.classList.remove('swiper-container__wrapper_closed');
    icon.classList.add('swiper-container__btnOpen_rotate');
    icon.classList.remove('swiper-container__btnOpen_rotateStandart');
    textOnBtn.innerHTML  = 'Скрыть';
    console.log(textOnBtn.innerHTML)
   } else {
    wrapper.classList.add('swiper-container__wrapper_closed');
    icon.classList.remove('swiper-container__btnOpen_rotate');
    icon.classList.add('swiper-container__btnOpen_rotateStandart');
    textOnBtn.innerHTML  = 'Показать все';
   }
  });
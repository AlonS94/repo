let burgerBtn = document.querySelector(".header__btn-burger");
let burger = document.querySelector(".burger")
let closed = document.querySelector('.burger__btnClosed');
let stateBurger = false;

burgerBtn.addEventListener('click', function(){
    if (!stateBurger) {
        burger.classList.add('burger_absolute');
        burger.classList.remove('burger_none');
        
        stateBurger = true;
    }
});

closed.addEventListener("click", function(){
if (stateBurger){
    burger.classList.add('burger_none');
    burger.classList.remove('burger_absolute');
    stateBurger = false;
}
});
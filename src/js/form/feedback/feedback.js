let chat = document.querySelectorAll('.header__call');
let formChat = document.querySelector('.formFeedback');
let closed = document.querySelector(".formFeedback__closed");
let body = document.querySelector("body");

for (let elem of chat){
elem.addEventListener("click", function(){
    formChat.classList.remove("formFeedback_none");
    formChat.classList.add("formFeedback_absolute");
    body.classList.add("opacity");
    
});
}

closed.addEventListener("click", function(){
    formChat.classList.remove("formFeedback_absolute");
    formChat.classList.add("formFeedback_none");
    body.classList.remove("opacity");
});



formChat.addEventListener('click', function() {
    if (event.target == formChat) {
        formChat.classList.remove('formFeedback_absolute');
        formChat.classList.add("formFeedback_none");
    }
});
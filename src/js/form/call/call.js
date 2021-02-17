let callMe = document.querySelectorAll('.callMe');
let formChat = document.querySelector('.call');
let closed = document.querySelector(".call__closed");
let a = document.querySelector('.formFeedback');


for (let elem of callMe){
elem.addEventListener("click", function(){
    formChat.classList.remove("call_none");
    formChat.classList.add("call_absolute");
    
});
}

closed.addEventListener("click", function(){
    formChat.classList.remove("call_absolute");
    formChat.classList.add("call_none");
});

formChat.addEventListener('click', function() {
    if (event.target == formChat) {
        formChat.classList.remove('call_absolute');
        formChat.classList.add("call_none");
    }
});
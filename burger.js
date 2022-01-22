const btn = document.querySelector(".burger");
const menu = document.querySelector(".menu");

//przełączam klasę
btn.onclick = function() {
    menu.classList.toggle("is-show");
    btn.classList.toggle("is-x");
}
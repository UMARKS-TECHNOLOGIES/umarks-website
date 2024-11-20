AOS.init();

var overlay = document.getElementById("nav-overlay");
var closeicon = document.getElementById("closeicon");
var menu = document.getElementById("menu");

menu.addEventListener("click", function() {
    overlay.style.display = "flex"

})
closeicon.addEventListener("click", function() {
    overlay.style.display = "none"
})

logo.addEventListener("click", function() {
    modal.style.display = "flex"
})

close1.addEventListener("click", function() {
    modal.style.display = "none"
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
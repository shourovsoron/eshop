let navToggler = document.querySelector(".navbar-toggler");
let navMenubar = document.querySelector(".collapse.navbar-collapse");
let collapsing = document.querySelector(".collapsing");
let collapsed = document.querySelector(".collapsed");
let showclass = document.querySelector(".show");



navMenubar.addEventListener("click", (e) => {
    if (e.target.tagName == "A") {

        navMenubar.classList.remove("show")


    }

})



function navMenu() {
    let navBar = document.querySelector(".navbar-sticky");
    let scrollTopButton = document.querySelector("#scrollUp");

    window.onscroll = function () {
        var scroll = document.documentElement.scrollTop;

        if (scroll >= 150) {
            navBar.classList.add("navbar-sticky-moved-up")
        } else {
            navBar.classList.remove("navbar-sticky-moved-up")
        }

        if (scroll >= 250) {
            navBar.classList.add("navbar-sticky-transitioned")
            scrollTopButton.classList.add("scrollActive");
        } else {
            navBar.classList.remove("navbar-sticky-transitioned")
            scrollTopButton.classList.remove("scrollActive");
        }

        
        if (scroll >= 500) {
            navBar.classList.add("navbar-sticky-on")
        } else {
            navBar.classList.remove("navbar-sticky-on")
        }



    }
}

navMenu()




// Counter
function counter(id, start, end, duration) {
    let obj = document.getElementById(id);

    let current = start;
    let range = end - start;
    let increment = end > current ? 1 : -1;
    let step = Math.abs(Math.floor(duration / range));

    obj.innerText = current;
    let timer = setInterval(() => {
        current += increment;
        obj.innerText = current;
        if (current == end) {
            clearInterval(timer)
        }
    }, step)
}

document.addEventListener("DOMContentLoaded", function () {


    counter("count1", 0, 10, 1000);
    counter("count2", 100, 20, 1000);
    counter("count3", 0, 30, 1000);
    counter("count4", 40, 15, 1000);

});


// Swipper JS ========
var swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        loop: true,
        modifier: 1,
        slideShadows: true,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    paginationClickable: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});









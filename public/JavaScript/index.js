document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".load-page");
    const contentArea = document.getElementById("content-area");
    const hideContent = document.getElementById("hideContent");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const url = this.getAttribute("href");

            fetch(url)
                .then(res => res.text())
                .then(data => {
                    hideContent.style.display = "none";
contentArea.style.display = "block"
                    contentArea.innerHTML = data;
                })
                .catch(err => {
                    contentArea.innerHTML = "<p class='text-danger'>Error loading page!</p>";
                });
        });
    });
});


$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        dots: true,
        responsive: {
            0: { items: 1.2 },
            576: { items: 2 },
            768: { items: 2.5 },
            992: { items: 3 }
        }
    });

    $(".next").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".prev").click(function () {
        owl.trigger("prev.owl.carousel");
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
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


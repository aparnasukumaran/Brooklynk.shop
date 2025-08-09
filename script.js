//   swiper
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
        },
    });
});

// animation
document.addEventListener("DOMContentLoaded", function () {
    const slideContents = document.querySelectorAll('.slide-content');
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');


    function animateContent() {
        slideContents.forEach(content => content.classList.remove('popup'));
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (!activeSlide) return;
        const activeContent = activeSlide.querySelector('.slide-content');
        if (activeContent) {
            void activeContent.offsetWidth;
            activeContent.classList.add('popup');
        }
    }

    // Animate on next button click
    nextBtn.addEventListener('click', () => {
        setTimeout(animateContent, 300);
    });

    // Animate on prev button click
    prevBtn.addEventListener('click', () => {
        setTimeout(animateContent, 300);
    });

    // animate on initial load

    animateContent();

});

// usd/aud
$(document).ready(function () {
    $(".dropdown-item").on("click", function (e) {
        e.preventDefault();


        var selectedCurrency = $(this).data("currency");
        var selectedIcon = $(this).data("icon");


        $("#currencyText").text(selectedCurrency);
        $("#currencyIcon").attr("src", selectedIcon);
    });
});

// form
$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const phone = $("#phone").val().trim();

        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all fields.");
        } else {
            alert("You have submitted the form");

        }
    });
});
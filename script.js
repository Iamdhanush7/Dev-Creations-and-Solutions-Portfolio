const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

document.addEventListener("DOMContentLoaded", () => {
  const slideImages = document.querySelector('.slide-images');
  const totalSlides = document.querySelectorAll('.img-container').length;
  let currentSlide = 0;

  function moveToNextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      slideImages.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds
}),

/* Initializing Swiper */
let ;swiper = new swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },


  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
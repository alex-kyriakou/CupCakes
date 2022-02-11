const toggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".nav");

// Menu Toggle
toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Swiper
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

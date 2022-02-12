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

// Moving Buttons
const heroSection = document.querySelector(".hero");

heroSection.addEventListener("mousemove", (e) => {
  heroSection.querySelectorAll(".btn").forEach((btn) => {
    const speed = btn.getAttribute("data-speed");
    const percent = 300;
    const x = (window.innerWidth - e.pageX * speed) / percent;
    const y = (window.innerHeight - e.pageY * speed) / percent;
    btn.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

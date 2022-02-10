const toggle = document.querySelector(".mobile-toggle");
const mobileMenu = document.querySelector(".nav");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

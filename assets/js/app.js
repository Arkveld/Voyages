const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("header .menu");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("responsive");
});

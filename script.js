const themeBtn = document.querySelector(".theme-btn");
const hamburgerMenu = document.querySelector(".hamburger");
const mobileNavMenu = document.querySelector(".nav__list");

themeBtn.addEventListener("click", onThemeToggle);

hamburgerMenu.addEventListener("click", onClickHamburgerMenu);

mobileNavMenu.addEventListener("click", onShowMobileMenu);

function onThemeToggle() {
  themeBtn.classList.toggle("theme-btn--active");
}

function onClickHamburgerMenu() {
  hamburgerMenu.classList.toggle("hamburger--active");
  mobileNavMenu.classList.toggle("nav__list--active");
}

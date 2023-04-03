const themeBtn = document.querySelector(".theme-btn");
const hamburgerMenu = document.querySelector(".hamburger");
const mobileNavMenu = document.querySelector(".nav__list");
const bodyDarkTheme = document.querySelector("body");

themeBtn.addEventListener("click", onThemeToggle);

hamburgerMenu.addEventListener("click", onClickHamburgerMenu);

function onThemeToggle() {
  themeBtn.classList.toggle("theme-btn--active");
  bodyDarkTheme.classList.toggle("dark-theme");
}

function onClickHamburgerMenu() {
  hamburgerMenu.classList.toggle("hamburger--active");
  mobileNavMenu.classList.toggle("nav__list--active");
}

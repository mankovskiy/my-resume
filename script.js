const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", themeToggle);

function themeToggle() {
  themeBtn.classList.toggle("theme-btn--active");
}

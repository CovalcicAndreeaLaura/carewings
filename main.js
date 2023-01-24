const hamburgerBtn = document.querySelector(".toggle-btn");
const navList = document.querySelector(".nav__list");

hamburgerBtn.addEventListener("click", function () {
  hamburgerBtn.classList.toggle("open");
  navList.classList.toggle("open");
});

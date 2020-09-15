var header = document.querySelector(".header");
var headerButton = document.querySelector(".header__button");
var headerNav = document.querySelector(".main-nav");

header.classList.remove("header--nojs");

headerButton.addEventListener("click", function() {
  header.classList.toggle("header--opened");
});

window.addEventListener("scroll", function() {
  if (window.scrollY > 1) {
    header.classList.add("header--scroll");
    headerNav.classList.add("main-nav--scroll")
  } else {
    header.classList.remove("header--scroll");
    headerNav.classList.remove("main-nav--scroll")
  }
});

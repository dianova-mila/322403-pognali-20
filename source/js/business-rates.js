var modalButton = document.querySelector(".add-profile__link");
var modal = document.querySelector(".business-rates");
var modalClose = document.querySelector(".business-rates__button");

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("business-rates--active");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("business-rates--active");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("business-rates--active")) {
      evt.preventDefault();
      modal.classList.remove("business-rates--active");
    }
  }
});

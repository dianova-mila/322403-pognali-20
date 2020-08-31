var header = document.querySelector('.header');
var headerButton = document.querySelector('.header__button');

header.classList.remove('header--nojs');

headerButton.addEventListener('click', function() {
  if (header.classList.contains('header--closed')) {
    header.classList.remove('header--closed');
  } else {
    header.classList.add('header--closed');
  }
});

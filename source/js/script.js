var openModalCard = document.querySelectorAll('.product-card__icon-link');
var openModal = document.querySelector('.btn-order');
var modal = document.querySelector('.popup-cart');
var ESC_KEY = 27;
var siteNav = document.querySelector('.main-nav__site-list');
var userNav = document.querySelector('.main-nav__user-list');
var jsOff = document.querySelector('.main-nav');
var menuToggle = document.querySelector('.main-nav__toggle');

//меню

siteNav.classList.toggle('main-nav__site-list--closed');
userNav.classList.toggle('main-nav__user-list--closed');
jsOff.classList.toggle('main-nav--closed');
jsOff.classList.remove('main__nav--opened');

menuToggle.addEventListener('click', function (evt) {
  evt.preventDefault();
  siteNav.classList.toggle('main-nav__site-list--closed');
  userNav.classList.toggle('main-nav__user-list--closed');
  jsOff.classList.toggle('main-nav--closed');
});

//модальное окно для главной страницы

if (openModal) {
  openModal.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popup-cart--show');
  });
}

var closeModalEsc = function(evt) {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    if (modal.classList.contains('popup-cart--show')) {
      evt.preventDefault();
      modal.classList.remove('popup-cart--show');
    }
  }
}

window.addEventListener('keydown', closeModalEsc);

//модальное окно для каталога

for(var i = 0; i < openModalCard.length; i++) {
  openModalCard[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('popup-cart--show');
  });
  window.addEventListener('keydown', closeModalEsc);
}

var closeModalEsc = function(evt) {
  if (evt.keyCode === ESC_KEY) {
    evt.preventDefault();
    if (modal.classList.contains('popup-cart--show')) {
      evt.preventDefault();
      modal.classList.remove('popup-cart--show');
    }
  }
}

window.addEventListener('keydown', closeModalEsc);

const menuToggler = document.querySelector('.page-header__toggle-menu');
const pageHeader = document.querySelector('.page-header__container');

pageHeader.classList.remove('page-header__container--nojs');
pageHeader.classList.remove('page-header__container--opened');
pageHeader.classList.add('page-header__container--closed');

menuToggler.addEventListener('click', event => {
  if (event.target.classList.contains('page-header__toggle-menu--opened')) {
    event.target.classList.remove('page-header__toggle-menu--opened');
    event.target.classList.add('page-header__toggle-menu--closed');
    pageHeader.classList.add('page-header__container--opened');
    pageHeader.classList.remove('page-header__container--closed');
  } else {
    event.target.classList.add('page-header__toggle-menu--opened');
    event.target.classList.remove('page-header__toggle-menu--closed');
    pageHeader.classList.remove('page-header__container--opened');
    pageHeader.classList.add('page-header__container--closed');
  }
});

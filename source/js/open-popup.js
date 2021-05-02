const menuToggler = document.querySelector('.page-header__toggle-menu');
const pageHeader = document.querySelector('.page-header__container');

pageHeader.classList.remove('page-header__container--nojs');
pageHeader.classList.remove('page-header__container--opened');
pageHeader.classList.add('page-header__container--closed');

menuToggler.addEventListener('click', event => {
  event.target.classList.toggle('page-header__toggle-menu--opened');
  event.target.classList.toggle('page-header__toggle-menu--closed');
  pageHeader.classList.toggle('page-header__container--opened');
  pageHeader.classList.toggle('page-header__container--closed');
});

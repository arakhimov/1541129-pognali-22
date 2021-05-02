const filterButton = document.querySelector('.filter__button');
const hideButton = document.querySelector('.filter__hide-button');
const filterHeader = document.querySelector('.filter__header');
const filterIndex = document.querySelector('.filter__index');

filterButton.addEventListener('click', (event) => {
  filterHeader.classList.toggle('filter__header--open');
  event.target.classList.toggle('filter__button--show');
  event.target.classList.toggle('filter__button--hide');
  filterIndex.classList.toggle('filter__index--open');
})

hideButton.addEventListener('click', () => {
  filterHeader.classList.remove('filter__header--open');
  filterIndex.classList.remove('filter__index--open');
  filterButton.classList.add('filter__button--show');
  filterButton.classList.remove('filter__button--hide');
})

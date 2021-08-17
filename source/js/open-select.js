const openSelect = document.querySelector(".routes__item--select .routes__select-country");
const selectHeader = document.querySelector(".routes__country-name--select");
const closeSelect = document.querySelector(".routes__popup-close");
const deleteButton = document.querySelector(".routes__item--select .routes__delete-country");
const selectList = document.querySelector(".index");
const selectContainer = document.querySelector(".routes__item--select");

openSelect.addEventListener("click", event => {
  event.target.classList.add("routes__select-country--open");
  selectHeader.classList.add("routes__country-name--open");
  closeSelect.classList.add("routes__popup-close--open");
  deleteButton.classList.add("routes__delete-country--open");
  selectList.classList.add("index--open");
  selectContainer.classList.add("routes__item--open");
})

closeSelect.addEventListener("click", event => {
  event.target.classList.remove("routes__popup-close--open");
  selectHeader.classList.remove("routes__country-name--open");
  openSelect.classList.remove("routes__select-country--open");
  deleteButton.classList.remove("routes__delete-country--open");
  selectList.classList.remove("index--open");
  selectContainer.classList.remove("routes__item--open");
})

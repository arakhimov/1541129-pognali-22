const indexButtons = document.querySelectorAll(".index__button");
const countryGroups = document.querySelectorAll(".index__choise-item");

for (let button of indexButtons) {
  button.addEventListener("click", changeCountryList);
}

function changeCountryList(event) {
  for (let currentButton of indexButtons) {
    if (currentButton.value === event.target.value) {
      currentButton.classList.add("index__button--active");
      currentButton.closest(".index__heading-item").classList.add("index__heading-item--active");
    } else {
      currentButton.classList.remove("index__button--active");
      currentButton.closest(".index__heading-item").classList.remove("index__heading-item--active");
    }
  }

  for (let group of countryGroups) {
    if (group.dataset.heading === event.target.value) {
      group.classList.add("index__choise-item--active");
    } else {
      group.classList.remove("index__choise-item--active");
    }
  }
}

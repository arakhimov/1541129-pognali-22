const buttons = document.querySelectorAll(".parametres__button");

for (let button of buttons) {
  button.addEventListener("click", event => {
    const inputField = event.target.closest(".parametres__control").querySelector(".parametres__input");

    if (event.target.classList.contains("parametres__button--less")) {
      inputField.value = inputField.value > 0 ? inputField.value - 1 : 0;
    } else {
      inputField.value++;
    }
  })
}

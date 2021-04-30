const emailField = document.querySelector(".registration-form__email");
const directionsForm = document.querySelector(".registration-form");
const explanationText = document.querySelector(".registration-form__explanation-text");

emailField.addEventListener("input", (event) => {
  if (event.target.value.length < 1) {
    explanationText.classList.add("registration-form__explanation-text--active");
  } else {
    explanationText.classList.remove("registration-form__explanation-text--active");
  }
});

directionsForm.addEventListener("submit", (event) => {
  if (emailField.value.length < 1) {
    event.preventDefault();
    explanationText.classList.add("registration-form__explanation-text--active");
    emailField.focus();
  } else {
    explanationText.classList.add("registration-form__explanation-text--active");
    setTimeout(() => explanationText.value = "", 1000)
  }
});

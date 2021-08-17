const textFields = document.querySelectorAll(".entertainments__description");
const directionsForm = document.querySelector(".plans-form");

for (let field of textFields) {
  field.addEventListener("input", (event) => {
    if (event.target.value.length < 1) {
      event.target.classList.add("entertainments__description--invalid");
      event.target.closest(".entertaments__wrapper").querySelector(".entertainments__invalid-text")
        .classList.add("entertainments__invalid-text--active");
    } else {
      event.target.classList.remove("entertainments__description--invalid");
      event.target.closest(".entertaments__wrapper").querySelector(".entertainments__invalid-text")
        .classList.remove("entertainments__invalid-text--active");
    }
  });
}

directionsForm.addEventListener("submit", (event) => {
  const fields = Array.from(textFields);
  if (fields.find(item => fieldValidity(item))) {
    event.preventDefault();
  } else {
    setTimeout(() => fields.map(item => item.value = ""), 1000);
  }
});

function fieldValidity(item) {
  if (item.value.length < 1) {
    item.classList.add("entertainments__description--invalid");
    item.closest(".entertaments__wrapper").querySelector(".entertainments__invalid-text")
      .classList.add("entertainments__invalid-text--active");
    item.focus();
    return true;
  } else {
    item.classList.remove("entertainments__description--invalid");
    item.closest(".entertaments__wrapper").querySelector(".entertainments__invalid-text")
      .classList.remove("entertainments__invalid-text--active");
  }
}

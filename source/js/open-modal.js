const openButton = document.querySelector(".profile__bisiness-link");
const modal = document.querySelector(".profile__modal");
const closeButton = document.querySelector(".profile__modal-close");

openButton.addEventListener("click", (event) => {
  event.preventDefault();
  modal.classList.add("profile__modal--open");
});

closeButton.addEventListener("click", () => {
  modal.classList.remove("profile__modal--open");
});

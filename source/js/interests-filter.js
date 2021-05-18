const menuItems = document.querySelectorAll(".form-travelers__button");

for (let item of menuItems) {
  item.addEventListener("click", event => {
    event.target.closest(".form-travelers__subtitle").classList.toggle("form-travelers__subtitle--open");
    event.target.closest(".form-travelers__menu-item").querySelector(".form-travelers__submenu")
      .classList.toggle("form-travelers__submenu--close");
  })
}

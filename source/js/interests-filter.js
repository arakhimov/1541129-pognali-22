const menuItems = document.querySelectorAll(".form-travelers__subtitle");

for (let item of menuItems) {
  item.addEventListener("click", event => {
    event.target.classList.toggle("form-travelers__subtitle--open");
    event.target.closest(".form-travelers__menu-item").querySelector(".form-travelers__submenu")
      .classList.toggle("mobile-desktop-hidden");
  })
}

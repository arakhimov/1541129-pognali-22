const fixedHeader = document.querySelector(".page-header--fixed");

window.addEventListener("scroll", () => {
  if (pageYOffset > 800) {
    fixedHeader.classList.add("page-header--open");
  } else {
    fixedHeader.classList.remove("page-header--open");
  }
})

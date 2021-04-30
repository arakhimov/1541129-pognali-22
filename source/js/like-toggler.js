const likeTogglers = document.querySelectorAll(".peoples__likes-button");

for (let toggler of likeTogglers) {
  toggler.addEventListener("click", toggleLikes);
}

function toggleLikes(event) {
  const likeButton = event.target.closest(".peoples__likes-button");

  if (likeButton.classList.contains("peoples__likes-button--active")) {
    likeButton.classList.remove("peoples__likes-button--active");
  } else {
    likeButton.classList.add("peoples__likes-button--active");
  }
}

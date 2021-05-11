const likeTogglers = document.querySelectorAll(".peoples__likes-button");

for (let toggler of likeTogglers) {
  toggler.addEventListener("click", toggleLikes);
}

function toggleLikes(event) {
  const likeButton = event.target.closest(".peoples__likes-button");
  likeButton.classList.toggle("peoples__likes-button--active");
}

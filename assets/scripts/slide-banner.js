const container = document.querySelector(".slide-banner-container");
const pagination = container.querySelector(".pagination");
const slideImages = container.querySelectorAll(".slide-image");
const arrowContainer = container.querySelector(".arrow-container");

pagination.addEventListener("click", ({ target }) => {
  if (!target.classList.contains("dot")) return;
  container.dataset.active = target.dataset.index;
});

arrowContainer.addEventListener("click", ({ target }) => {
  if (!target.classList.contains("arrow")) return;
  const direction = target.classList.contains("arrow-right") ? 1 : -1;
  const targetIndex = parseInt(container.dataset.active, 10) + direction;
  container.dataset.active = targetIndex % 3 || 3;
});

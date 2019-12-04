const container = document.querySelector(".price-floor-plan");

container.addEventListener("click", ({ target }) => {
  if (!target.classList.contains("floor-plan-button")) return;
  const field = target.dataset.switch;
  if (!field) return;
  container.dataset[field] = container.dataset[field] === "1" ? "2" : "1";
});

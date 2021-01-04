// slide
{
  const slideContainer = document.querySelector(".service-slide");
  const buttons = slideContainer.querySelectorAll(".slide-button");

  function changeSlide(button) {
    const active = button.dataset.slide;
    slideContainer.dataset.slide = active;
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => changeSlide(button));
  });
}

// price
{
  const priceContainer = document.querySelector(".prices").querySelector(".container-main");
  const buttons = priceContainer.querySelectorAll(".price-button");

  function checkActive() {
    const w = window.innerWidth;
    if (w >= 1280) return 4;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1
  }

  function changePrice(button) {
    const active = parseInt(priceContainer.dataset.price, 10);
    const maxActive = 5 - checkActive();
    const direction = parseInt(button.dataset.direction, 10);
    priceContainer.dataset.price = Math.min(active, maxActive) + direction;
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => changePrice(button));
  });
}

// topbar
{
  const topbar = document.querySelector(".header-fixed");

  window.addEventListener("scroll", () => {
    const addClass = document.body.scrollTop > 600 || document.documentElement.scrollTop > 600;
    if (addClass) {
      topbar.classList.add("active");
    } else {
      topbar.classList.remove("active");
    }
  });
}

// slide
{
  const slideContainer = document.querySelector(".service-slide");
  const buttons = slideContainer.querySelectorAll(".slide-button");

  function changeSlide(button) {
    const activeClass = button.dataset.slide;
    slideContainer.classList.remove("package", "translate", "live-stream", "transcript", "internet");
    slideContainer.classList.add(activeClass);
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => changeSlide(button));
  });
}

// price
{
  const priceContainer = document.querySelector(".prices").querySelector(".container-main");
  const buttons = priceContainer.querySelectorAll(".price-button");

  console.log(priceContainer);

  function changePrice(button) {
    const active = parseInt(priceContainer.dataset.price, 10);
    const direction = parseInt(button.dataset.direction, 10);
    priceContainer.dataset.price = active + direction;
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => changePrice(button));
  });
}

{
  const _buttons = document.querySelectorAll(".slide-list__button");

  function changeActive(_button) {
    const _container = _button.closest(".slide-list");
    const active = parseInt(_container.dataset.active, 10);
    const direction = parseInt(_button.dataset.direction, 10);
    _container.dataset.active = active + direction;
  }

  _buttons.forEach(_button => {
    _button.addEventListener("click", () => changeActive(_button));
  });
}

// slide autoplay
function nextSlide(container) {
  const indexFromOne = 1;
  const direction = 1;
  const total = container.querySelectorAll(".slide").length;
  var currentActive = parseInt(container.dataset.active, 10)
  var nextActive = currentActive >= total ? indexFromOne : (currentActive + direction) % (total + indexFromOne);
  container.dataset.active = nextActive;
}

setInterval(() => {
  const containers = document.querySelectorAll(".slide-list");
  containers.forEach(container => {
    nextSlide(container);
  })
}, 3000);

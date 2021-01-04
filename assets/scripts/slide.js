{
  const _buttons = document.querySelectorAll(".slide-list__button");

  function changeActive(_button) {
    const _container = _button.closest(".slide-list");
    const active = parseInt(_container.dataset.active, 10);
    const direction = parseInt(_button.dataset.direction, 10);

    console.log(_button, _container, active, direction);
    _container.dataset.active = active + direction;
  }

  _buttons.forEach(_button => {
    _button.addEventListener("click", () => changeActive(_button));
  });
}

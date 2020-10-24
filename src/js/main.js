let menuToggle = document.querySelector ('#menu__toggle');
let menu = document.querySelector ('.sidebar');

menuToggle.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('visible');
})
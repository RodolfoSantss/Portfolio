const button_theme = document.getElementById('switch-theme');
const body = document.getElementById('body')
const box_center = document.getElementById('box-center')

button_theme.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (body.classList.contains('light-theme')) {
    box_center.style.backgroundColor='#003c58'
    body.classList = 'dark-theme'
  } else if (body.classList.contains('dark-theme')) {
    box_center.style.backgroundColor='#bae6fd'
    body.classList = 'light-theme'
  }
});
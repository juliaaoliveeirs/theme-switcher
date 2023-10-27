const switcher = document.querySelector('#switch button');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('light');
  localStorage.setItem('themeMode', body.classList);
}

switcher.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
  const savedClass = localStorage.getItem('themeMode');
  if (savedClass) {
    body.classList = savedClass;
  }
});

const switcher = document.querySelector('#switch button');
const body = document.body;
const h1 = document.querySelector('h1');

function toggleTheme() {
  body.classList.toggle('light');
  const isLightMode = body.classList.contains('light');
  localStorage.setItem('themeMode', isLightMode ? 'light' : '');

  h1.innerText = isLightMode ? 'Tema Claro' : 'Tema Escuro';
  h1.style.color = isLightMode ? 'var(--dark)' : 'var(--light)';
}

switcher.addEventListener('click', toggleTheme);

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('themeMode');
  if (savedTheme) {
    const isLightMode = savedTheme === 'light';
    body.classList.toggle('light', isLightMode);
    h1.innerText = isLightMode ? 'Tema Claro' : 'Tema Escuro';
    h1.style.color = isLightMode ? 'var(--dark)' : 'var(--light)';
  }
});

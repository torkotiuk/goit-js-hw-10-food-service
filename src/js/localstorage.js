const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body');
const inputRef = document.getElementById('theme-switch-toggle');

function applyDark() {
  bodyRef.classList.add(theme.DARK);
  bodyRef.classList.remove(theme.LIGHT);
  inputRef.checked = true;
}

function applyLight() {
  bodyRef.classList.add(theme.LIGHT);
  bodyRef.classList.remove(theme.DARK);
  inputRef.checked = false;
}

function handlerCheckbox() {
  if (inputRef.checked) {
    applyDark();
    localStorage.setItem('theme', 'DARK');
  } else {
    applyLight();
    localStorage.setItem('theme', 'LIGHT');
  }
}

if (localStorage.getItem('theme') === 'DARK') {
  applyDark();
} else {
  if (localStorage.getItem('theme') === 'LIGHT') {
    applyLight();
  }
}

inputRef.addEventListener('change', handlerCheckbox);

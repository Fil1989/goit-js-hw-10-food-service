const Theme = {
  DARK: 'dark-theme',
};
const checkboxTheme = document.querySelector('.js-switch-input');

const toggleDarkClass = () => {
  document.body.classList.toggle(Theme.DARK);
};

if (localStorage.getItem('themeColor') === 'dark') {
  checkboxTheme.checked = true;
  toggleDarkClass();
}

const changeTheme = () => {
  if (checkboxTheme.checked) {
    localStorage.setItem('themeColor', 'dark');
  } else {
    localStorage.removeItem('themeColor');
  }
  toggleDarkClass();
};

checkboxTheme.addEventListener('change', changeTheme);

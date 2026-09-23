import '../styles/base.css';
import '../styles/common.css';
import '../styles/home.css';

// for test
const themeSwitch = document.querySelector('.theme-switch');
const html = document.documentElement;

themeSwitch.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
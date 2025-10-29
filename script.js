// Mobile nav toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');
if (toggle) toggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Light/dark theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});

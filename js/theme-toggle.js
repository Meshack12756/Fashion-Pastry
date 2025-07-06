// js/theme-toggle.js
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const toggleBtn = document.getElementById('theme-toggle');
  // Determine initial theme
  let currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    body.classList.add(currentTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
  // Toggle on button click
  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      body.classList.replace('dark', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      body.classList.replace('light', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });
});


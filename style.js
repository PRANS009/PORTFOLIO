'use strict';
const menu = document.getElementById('menuBtn');
const navigation = document.getElementById('navLinks');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
menu.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
document.addEventListener('click', event => {
  if (!event.target.closest('nav')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copyEmail').addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {
    await navigator.clipboard.writeText('pransjangra9@gmail.com');
    status.textContent = 'Email address copied.';
  } catch {
    status.textContent = 'Please copy the address above, or click it to open your email app.';
  }
});

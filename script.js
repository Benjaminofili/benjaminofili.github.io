function toggleTheme() {
      const body = document.body;
      const currentTheme = body.getAttribute('data-theme');
      body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
    }

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menuPanel = document.querySelector('.menu-panel');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.getElementById('close-btn');
  const nav = document.querySelector('nav');
  const menuItems = document.querySelector('.menu-items');

  if (!hamburger || !menuPanel || !overlay || !closeBtn || !nav || !menuItems) {
    console.error('One or more elements are missing:', {
      hamburger: hamburger,
      menuPanel: menuPanel,
      overlay: overlay,
      closeBtn: closeBtn,
      nav: nav,
      menuItems: menuItems
    });
    return;
  }

  hamburger.addEventListener('click', function() {
    this.classList.toggle('close');
    menuPanel.classList.toggle('active');
    overlay.classList.toggle('active');
    nav.classList.toggle('reveal-nav');
    hamburger.setAttribute('aria-expanded', menuPanel.classList.contains('active'));
  });

  overlay.addEventListener('click', () => {
    hamburger.classList.remove('close');
    menuPanel.classList.remove('active');
    overlay.classList.remove('active');
    nav.classList.remove('reveal-nav');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  closeBtn.addEventListener('click', () => {
    hamburger.classList.remove('close');
    menuPanel.classList.remove('active');
    overlay.classList.remove('active');
    nav.classList.remove('reveal-nav');
    hamburger.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuPanel.classList.contains('active')) {
      hamburger.classList.remove('close');
      menuPanel.classList.remove('active');
      overlay.classList.remove('active');
      nav.classList.remove('reveal-nav');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
});
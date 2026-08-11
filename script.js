let dark = false;
let lang = 'es';

function toggleTheme() {
  dark = !dark;
  document.body.setAttribute('data-theme', dark ? 'dark' : '');
  updateThemeButton();
}

function toggleLang() {
  lang = lang === 'es' ? 'en' : 'es';
  document.body.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);
  
  const langLabel = document.getElementById('langLabel');
  if (langLabel) {
    langLabel.textContent = lang === 'es' ? 'EN' : 'ES';
  }
  
  updateThemeButton();
}

function updateThemeButton() {
  const isEn = lang === 'en';
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    const icon = dark ? 'ti-sun' : 'ti-moon';
    const label = dark ? (isEn ? 'light' : 'claro') : (isEn ? 'dark' : 'oscuro');
    themeBtn.innerHTML = `<i class="ti ${icon}"></i> ${label}`;
  }
}

// Hacer globales
window.toggleTheme = toggleTheme;
window.toggleLang = toggleLang;

// Inicializar
document.body.setAttribute('data-lang', 'es');
updateThemeButton();
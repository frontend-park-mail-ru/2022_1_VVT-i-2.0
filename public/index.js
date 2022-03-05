import * as pages from './pages/import.js';

const MENU = {
  main: pages.mainPage,
  login: pages.loginPage,
  register: pages.registerPage
};

const ROOT = document.getElementById('root');

ROOT.addEventListener('click', (e) => {
  const { section } = e.target.dataset;
  if (section) {
    MENU[section](ROOT);
  }
});

pages.mainPage(ROOT);

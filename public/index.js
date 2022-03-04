import * as pages from './pages/import.js';

const MENU = {
  index: pages.mainPage,
  login: pages.loginPage,
  register: pages.registerPage
};

const ROOT = document.getElementById('root');

ROOT.addEventListener('click', (e) => {
  const { target } = e;

  if (target instanceof HTMLAnchorElement) {
    e.preventDefault();

    const { section } = target.dataset;
    if (section) {
      MENU[section](ROOT);
    }
  }
});

pages.mainPage(ROOT);

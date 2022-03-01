import * as pages from './pages/index.js';

const MENU = {
  index: pages.indexPage,
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

pages.indexPage(ROOT);

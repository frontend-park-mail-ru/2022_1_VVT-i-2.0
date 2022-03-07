import * as pages from './pages/import.js';

const MENU = {
    main: pages.mainPage,
    login: pages.loginPage,
    register: pages.registerPage
};

const ROOT = document.getElementById('root');
const MODAL = document.getElementById('modal');

const handler = (e) => {
    const { section } = e.target.dataset;
    if (section) {
        if (section === 'login' || section === 'register') {
            MODAL.classList.add('shown');
        } else {
            MODAL.classList.remove('shown');
            MODAL.innerHTML = '';
        }
        MENU[section](ROOT, MODAL);
    }
};

ROOT.addEventListener('click', handler);
MODAL.addEventListener('click', handler);

pages.mainPage(ROOT, MODAL);

import * as pages from './pages/import.js';

const MENU = {
    main: pages.mainPage,
    login: pages.loginPage,
    register: pages.registerPage,
};

const MODAL_PAGES = [
    'login',
    'register'
];

const ROOT = document.getElementById('root');
const MODAL = document.getElementById('modal');

const handler = (e) => {
    const {section} = e.target.dataset;
    if (section) {
        if (MODAL_PAGES.includes(section)) {
            MODAL.classList.add('shown');
            root.lastChild.classList.add('hidden');
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

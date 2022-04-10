import * as events from './events/events.js';
import MENU from './pages/import.js';
import * as store from './store/import.js';

const APP = {
    root: document.getElementById('root'),
    modal: document.getElementById('modal')
};

const setModalPagePosition = (page) => {
    if (page.position) {
        APP.modal.classList.add(page.position);
    }
}

/**
 * @function Рендерит страницу по входящему section. Если section нет, рендер не производится.
 * @param {string} section - метаинформация, прописанная в атрибуте data-section тега.
 *      Атрибут data-section имеется только у pages(main, login, register).
 */
const renderPage = (section) => {
    if (!section) {
        return;
    }

    events.removeListeners(APP);

    const page = MENU[section];

    if (page.isModal) {
        APP.modal.classList.add('shown');
        setModalPagePosition(page);
    } else {
        APP.modal.classList.remove(...APP.modal.classList);
        // APP.modal.classList.remove('shown');
        APP.modal.innerHTML = '';
    }

    page.render(APP, store);

    events.addListeners(APP);
};

Object
    .entries(APP)
    .forEach(([name, node]) => node.addEventListener('click', (e) => renderPage(e.target.dataset.section)));

document.addEventListener('render-page', (e) => renderPage(e.detail.section));

renderPage('ordering', store);

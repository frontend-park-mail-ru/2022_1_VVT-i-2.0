import * as events from './events/events.js';
import MENU from './pages/import.js';

const APP = {
    root: document.getElementById('root'),
    modal: document.getElementById('modal')
};

const renderPage = (section) => {
    if (!section) {
        return;
    }

    events.removeListeners(APP);

    const page = MENU[section];

    if (page.isModal) {
        APP.modal.classList.add('shown');
        // APP.root.lastChild.classList.add('hidden');
    } else {
        APP.modal.classList.remove('shown');
        APP.modal.innerHTML = '';
        // APP.root.lastChild.classList.remove('hidden');
    }

    page.render(APP);

    events.addListeners(APP);
};

Object
    .entries(APP)
    .forEach(([name, node]) => node.addEventListener('click', (e) => renderPage(e.target.dataset.section)));

// Added custom event listener to be able to render any page from any place from code
document.addEventListener('render-page', (e) => renderPage(e.detail.section));

MENU.main.render(APP);

events.addListeners(APP);

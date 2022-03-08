import MENU from './pages/import.js';
import EVENTS from './events/events.js';

const APP = {
    root: document.getElementById('root'),
    modal: document.getElementById('modal')
};

const handler = (e) => {
    const {section} = e.target.dataset;
    if (!section) {
        return;
    }

    // Remove all event listeners
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({type, listener}) => node.removeEventListener(type, (e) => listener(APP, e)));
    });

    const page = MENU[section];

    if (page.isModal) {
        APP.modal.classList.add('shown');
        APP.root.lastChild.classList.add('hidden');
    } else {
        MODAL.classList.remove('shown');
        APP.modal.innerHTML = '';
        APP.root.lastChild.classList.remove('hidden');
    }

    page.draw(APP);

    // Add all event listeners
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({type, listener}) => node.addEventListener(type, (e) => listener(APP, e)));
    });
};

Object.entries(APP).forEach(([name, node]) => node.addEventListener('click', handler));

MENU.main.draw(APP);

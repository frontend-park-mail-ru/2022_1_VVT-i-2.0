import * as events from '../events/events.js';
import MENU from '../pages/import.js';
import * as store from '../store/import.js';

export const APP = {
  root: document.getElementById('root'),
  modal: document.getElementById('modal')
};

const AUTH_PAGES = ['login', 'register', 'confirmCode'];

const setModalPosition = (page) => {
  if (page.position) {
    APP.modal.classList.add(page.position);
  }
}

/**
 * @function Рендерит страницу по входящему section. Если section нет, рендер не производится.
 * @param {string} section - метаинформация, прописанная в атрибуте data-section тега.
 *      Атрибут data-section имеется только у pages(main, login, register).
 */
export const render = (urn) => {
  if (!urn) {
    return;
  }

  let path = urn;

  const lastIndexOfPath = urn.lastIndexOf('/');
  if (lastIndexOfPath !== -1 && lastIndexOfPath !== 0) {
    const params = urn.substr(lastIndexOfPath + 1, urn.length - lastIndexOfPath);
    sessionStorage.setItem('params', params);

    path = urn.substr(0, lastIndexOfPath);
  }

  let section = path.replace('/', '');
  section = section === '' ? 'main' : section;

  events.removeListeners(APP, store);

  let page = MENU[section];

  if (!page) {
    sessionStorage.setItem('error', '404');
    page = MENU.networkErrors;
  }

  if (page.authRequired && Object.keys(store.getters.user()).length === 0) {
    renderAndUpdateURN('/');
    return;
  }

  if (AUTH_PAGES.includes(section) && Object.keys(store.getters.user()).length !== 0) {
    renderAndUpdateURN('/');
    return;
  }

  if (page.isModal) {
    let root = sessionStorage.getItem('root');
    if (!root) {
      root = 'main';
    }
    MENU[root].render(APP, store);

    APP.modal.classList.add('shown');
    setModalPosition(page);

    sessionStorage.removeItem('root');
  } else {
    APP.modal.classList.remove(...APP.modal.classList);
    APP.modal.innerHTML = '';

    sessionStorage.setItem('root', section)
  }

  page.render(APP, store);

  events.addListeners(APP, store);

  sessionStorage.setItem('page', section);
};

export const renderAndUpdateURN = (urn) => {
  if (!urn) {
    return;
  }

  render(urn);

  history.pushState({}, null, urn);
};

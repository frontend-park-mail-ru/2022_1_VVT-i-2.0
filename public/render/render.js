import * as events from '../events/events.js';
import MENU from '../pages/import.js';
import * as store from '../store/import.js';

export const APP = {
  root: document.getElementById('root'),
  modal: document.getElementById('modal')
};

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

  let section = urn.replace('/', '');
  section = section === '' ? 'main' : section;

  events.removeListeners(APP, store);

  let page = MENU[section];

  if (!page) {
    sessionStorage.setItem('error', '404');
    page = MENU.networkErrors;
  }

  if (page.isModal) {
    MENU.main.render(APP, store);
    APP.modal.classList.add('shown');
    setModalPosition(page);
  } else {
    APP.modal.classList.remove(...APP.modal.classList);
    APP.modal.innerHTML = '';
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

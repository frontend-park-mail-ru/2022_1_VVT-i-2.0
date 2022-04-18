import { APP, render, renderAndUpdateURN } from './render/render.js';
import * as store from './store/import';
import './index.scss';

Object
    .entries(APP)
    .forEach(([name, node]) => node.addEventListener('click', (e) => renderAndUpdateURN(e.target.dataset.section)));

window.onpopstate = () => render(location.pathname);

if (!localStorage.getItem('address')) {
    localStorage.setItem('address', 'город Москва, улица Ленина, 21');
}

if (Object.keys(store.getters.user()).length === 0) {
    store.actions.getUser();
} else {
    render(location.pathname);
}

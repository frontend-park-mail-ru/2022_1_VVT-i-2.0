import { APP, render, renderAndUpdateURN } from './render/render.js';
import * as store from './store/import';
import './index.scss';

Object
    .entries(APP)
    .forEach(([name, node]) => node.addEventListener('click', (e) => renderAndUpdateURN(e.target.dataset.section)));

window.onpopstate = () => render(location.pathname);

store.actions.getUser().then(() => render(location.pathname));
// render(location.pathname);

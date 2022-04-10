import { APP, render, renderAndUpdateURN } from './render/render.js';
import * as store from './store/import';

Object
    .entries(APP)
    .forEach(([name, node]) => {
        node.addEventListener('click', (e) => renderAndUpdateURN(e.target.section.dataset.section))
    });

window.onpopstate = () => render(location.pathname);

store.actions.getUser().then(() => render(location.pathname));

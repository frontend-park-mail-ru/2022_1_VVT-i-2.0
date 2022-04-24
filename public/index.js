import { APP, render, renderAndUpdateURN } from "./render/render.js";
import * as store from "./store/import";
import "./index.scss";

Object.entries(APP).forEach(([name, node]) =>
  node.addEventListener("click", (e) =>
    renderAndUpdateURN(e.target.dataset.section)
  )
);

window.onpopstate = () => render(location.pathname);

document.addEventListener('click', (e) => {
    if (APP.modal.children.length === 0) {
        return;
    }

    const { target } = e;
    if (APP.modal.children[0].contains(target) || target.hasAttribute('data-section')) {
        return;
    }

    const page = sessionStorage.getItem('page');
    if (page === 'shoppingCart') {
        return;
    }

    const root = sessionStorage.getItem('root') || 'main';
    renderAndUpdateURN(root);
});

if (!localStorage.getItem('address')) {
    localStorage.setItem('address', 'город Москва, улица Ленина, 21');
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(() =>
      navigator.serviceWorker.ready.then((worker) =>
        worker.sync.register("syncdata")
      )
    )
    .catch((err) => console.log(err));
}

if (Object.keys(store.getters.user()).length === 0) {
    store.actions.getUser(true).then(() => render(location.pathname));
} else {
  render(location.pathname);
}

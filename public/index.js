import { APP, render, renderAndUpdateURN } from "./render/render.js";
import * as store from "./store/import";
import "./index.scss";
import { IsCartEmpty } from "./store/getters/getters";

const NOT_CLOSED_PAGES_BY_CLICK_OUT = ["shoppingCart", "confirmCode"];
export const DEFAULT_ADDRESS = 'Адрес доставки';

const searchOnClickOutHandler = () => {
  if (!sessionStorage.getItem('searchBlockClicked')
    && !sessionStorage.getItem('searchButtonClicked')
    && document.getElementById('searchBlock')) {
    document.getElementById('closeImg').click();
  }
  sessionStorage.removeItem('searchBlockClicked');
  sessionStorage.removeItem('searchButtonClicked');
}

Object.entries(APP).forEach(([name, node]) =>
  node.addEventListener("click", (e) =>
    renderAndUpdateURN(e.target.dataset.section)
  )
);

window.onpopstate = () => render(location.pathname);

document.addEventListener("click", (e) => {
  searchOnClickOutHandler();

  if (APP.modal.children.length === 0) {
    return;
  }

  const page = sessionStorage.getItem("page");

  const { target } = e;
  if (
    APP.modal.children[0].contains(target) && page !== 'suggests' ||
    target.hasAttribute("data-section")
  ) {
    return;
  }

  if (target.classList.contains("suggest-form__suggest-address")) {
    return;
  }

  if (NOT_CLOSED_PAGES_BY_CLICK_OUT.includes(page)) {
    return;
  }

  if (page === "suggests" && localStorage.getItem("address") === null) {
    localStorage.setItem("address", DEFAULT_ADDRESS);
  }

  const root = sessionStorage.getItem("root") || "main";
  const params = sessionStorage.getItem("params");

  if (params) {
    renderAndUpdateURN(`/${root}/${params}`);
  } else {
    renderAndUpdateURN(root);
  }
});

if (!localStorage.getItem("address")) {
  localStorage.setItem("address", DEFAULT_ADDRESS);
}

const handleOnload = () => {
  const stringCart = localStorage.getItem("cart");
  const currentRestName = localStorage.getItem("currentRestName");
  const slug = localStorage.getItem("slug");

  localStorage.removeItem("cart");
  localStorage.removeItem("currentRestName");
  localStorage.removeItem("slug");

  const defaultPromise = new Promise((resolve) => resolve());

  if (!stringCart) {
    return defaultPromise;
  }

  const cart = JSON.parse(stringCart);
  if (cart.totalPrice === 0) {
    return defaultPromise;
  }

  store.actions.addCart(cart, currentRestName);

  return store
    .actions
    .getDishes(slug, decodedPathname !== "/ordering")
    .then(() => {
      if (decodedPathname === "/shoppingCart") {
        sessionStorage.setItem("root", "dishes");
        sessionStorage.setItem("params", slug);
      }
    })
};

window.onbeforeunload = () => {
  sessionStorage.clear();

  const cart = store.getters.cart();
  if (IsCartEmpty() || Object.keys(store.getters.user()).length === 0) {
    return;
  }

  const currentRestName = store.getters.currentRestName();
  const dishes = store.getters.dishes();
  const slug = Object.keys(dishes).find((key) => dishes[key].restName === currentRestName);

  if (!slug) {
    return;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("currentRestName", currentRestName);
  localStorage.setItem("slug", slug);
};

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

const decodedPathname = decodeURI(location.pathname);

handleOnload().then(() => {
  if (Object.keys(store.getters.user()).length === 0) {
    // render(decodedPathname);
    store.actions.getUser(true).then(() => render(decodedPathname));
  } else {
    render(decodedPathname);
  }
});

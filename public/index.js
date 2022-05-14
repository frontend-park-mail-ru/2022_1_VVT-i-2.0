import { APP, render, renderAndUpdateURN } from "./render/render.js";
import * as store from "./store/import";
import "./index.scss";
import { IsCartEmpty } from "./store/getters/getters";

const NOT_CLOSED_PAGES = ["shoppingCart", "confirmCode",];

Object.entries(APP).forEach(([name, node]) =>
  node.addEventListener("click", (e) =>
    renderAndUpdateURN(e.target.dataset.section)
  )
);

window.onpopstate = () => render(location.pathname);

document.addEventListener("click", (e) => {
  if (APP.modal.children.length === 0) {
    return;
  }

  const { target } = e;
  if (
    APP.modal.children[0].contains(target) ||
    target.hasAttribute("data-section")
  ) {
    return;
  }

  const page = sessionStorage.getItem("page");
  if (NOT_CLOSED_PAGES.includes(page)) {
    return;
  }

  const root = sessionStorage.getItem("root") || "main";
  renderAndUpdateURN(root);
});

if (!localStorage.getItem("address")) {
  localStorage.setItem("address", "город Москва, улица Ленина, 21");
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

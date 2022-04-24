import * as events from "../events/events.js";
import MENU from "../pages/import.js";
import * as store from "../store/import.js";
import { getters } from "../store/import.js";

export const APP = {
  root: document.getElementById("root"),
  modal: document.getElementById("modal"),
};

const AUTH_PAGES = ["login", "register", "confirmCode"];
const CLOSED_PAGES = ["shoppingCart", "profilePreview"];

const setModalPosition = (page) => {
  if (page.position) {
    APP.modal.classList.add(page.position);
  }
};

/**
 * @function Рендерит страницу по входящему section. Если section нет, рендер не производится.
 * @param {string} section - метаинформация, прописанная в атрибуте data-section тега.
 *      Атрибут data-section имеется только у pages(main, login, register).
 */
export const render = (urn, storeUpdate = false) => {
  if (!urn) {
    return;
  }

  let path = urn;
  const lastIndexOfPath = urn.lastIndexOf("/");

  if (lastIndexOfPath > 0) {
    const params = urn.substr(
      lastIndexOfPath + 1,
      urn.length - lastIndexOfPath
    );
    sessionStorage.setItem("params", params);

    path = urn.substr(0, lastIndexOfPath);
  }

  let section = path.replace("/", "");
  section = section === "" ? "main" : section;

  if (
    !storeUpdate &&
    section === sessionStorage.getItem("page") &&
    CLOSED_PAGES.includes(section)
  ) {
    section = sessionStorage.getItem("root") || "main";
  }

  let page = MENU[section];
  if (!page) {
    sessionStorage.setItem("error", "404");
    page = MENU.networkErrors;
  }

  if (page.authRequired && Object.keys(store.getters.user()).length === 0) {
    renderAndUpdateURN("/");
    return;
  }
  if (
    AUTH_PAGES.includes(section) &&
    Object.keys(store.getters.user()).length !== 0
  ) {
    renderAndUpdateURN("/");
    return;
  }

  events.removeListeners(APP, store);

  if (page.isModal || page.additionalPage) {
    let root = sessionStorage.getItem("root") || "main";
    if (root === "networkErrors") {
      root = "main";
    }
    sessionStorage.setItem("root", root);

    MENU[root].render(APP, store);

    if (page.additionalPage) {
      APP.modal.classList.remove("shown");
    } else {
      APP.modal.classList.add("shown");
    }

    setModalPosition(page);
  } else {
    APP.modal.classList.remove(...APP.modal.classList);
    APP.modal.innerHTML = "";

    sessionStorage.setItem("root", section);
  }

  page.render(APP, store);

  events.addListeners(APP, store);

  sessionStorage.setItem("page", section);
};

export const renderAndUpdateURN = (urn, storeUpdate = false) => {
  if (!urn) {
    return;
  }

  if (!urn.startsWith("/")) {
    urn = `/${urn}`;
  }

  history.pushState({}, null, urn);

  render(urn, storeUpdate);
};

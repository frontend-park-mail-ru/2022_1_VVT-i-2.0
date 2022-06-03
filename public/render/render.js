import * as events from "../events/events.js";
import MENU from "../pages/import.js";
import * as store from "../store/import.js";
import { getters } from "../store/import.js";
import { DEFAULT_ADDRESS } from "../index";
import {
  getCurrentSlug,
  IsCartEmpty,
  restaurants,
} from "../store/getters/getters";
import UIKIT from "../ui-kit/import.js";
import { insertOldCart } from "../store/actions/actions";

export const APP = {
  root: document.getElementById("root"),
  modal: document.getElementById("modal"),
  notification: document.getElementById("notification")
};

const AUTH_PAGES = ["login", "register", "confirmCode"];
const CLOSED_PAGES = ["shoppingCart", "profilePreview"];
const NEED_CORRECT_ADDRESS_PAGES = ["/shoppingCart", "/ordering"];

const setModalPosition = (page) => {
  if (page.position) {
    APP.modal.classList.remove("modal-top", "modal-right", "modal-center");
    APP.modal.classList.add(page.position);
  }
};

const IsAddressNotCorrect = () => {
  if (!document.getElementById("suggestsSearch")) {
    return false;
  }
  return document.getElementById("suggestsSearch").value === DEFAULT_ADDRESS;
};

const checkOrderSize = () => {
  if (sessionStorage.getItem("smallOrder")) {
    const statusOrderBlock = document.getElementById(
      sessionStorage.getItem("openedAdditionalOrderInfo")
    );
    if (statusOrderBlock) {
      statusOrderBlock.classList.remove("order-info_standard");
      statusOrderBlock.classList.add("order-info_small");
    }
    sessionStorage.removeItem("smallOrder");
  }
};

const openAdditionalOrderInfo = () => {
  if (
    sessionStorage.getItem("openedAdditionalOrderInfo") !== null &&
    sessionStorage.getItem("AdditionalOrderInfoSetNow") === null
  ) {
    const buttonFrames = document.querySelectorAll(
      "img[data-id=" +
        '"' +
        sessionStorage.getItem("openedAdditionalOrderInfo") +
        '"]'
    );
    buttonFrames.forEach((buttonFrame) => {
      if (
        buttonFrame.getAttribute("data-id") ===
        sessionStorage.getItem("openedAdditionalOrderInfo")
      ) {
        buttonFrame.click();
      }
    });
  }
  sessionStorage.removeItem("AdditionalOrderInfoSetNow");

  checkOrderSize();
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

  const currentUrn = urn.slice();

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

  const currentPage = sessionStorage.getItem("page");

  if (
    !storeUpdate &&
    section === "suggests" &&
    currentPage === "suggests"
  ) {
    return;
  }

  if (section === "main" && currentPage !== section && !sessionStorage.getItem("getRestBySearchRequest")) {
    store.actions.clearRestaurants();
  }

  if (section === "suggests" && currentPage !== "suggests") {
    const address = localStorage.getItem("address");
    localStorage.setItem("lastAddress", address);

    if (address === DEFAULT_ADDRESS) {
      localStorage.removeItem("address");
    }
  }

  if (
    !storeUpdate &&
    section === currentPage &&
    CLOSED_PAGES.includes(section)
  ) {
    section = sessionStorage.getItem("root") || "main";
  }

  let page = MENU[section];
  if (!page) {
    sessionStorage.setItem("error", "404");
    section = "networkErrors";
    page = MENU.networkErrors;
  }

  if (page.authRequired && Object.keys(store.getters.user()).length === 0) {
    renderAndUpdateURN("/login");
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
    const root = sessionStorage.getItem("root");
    if (section !== currentPage && section !== root) {
      window.scrollTo(0, 0);
    }

    APP.modal.classList.remove(...APP.modal.classList);
    APP.modal.innerHTML = "";

    sessionStorage.setItem("root", section);
  }

  if (
    ["login", "confirmCode", "register"].includes(section) &&
    window.screen.width < 438
  ) {
    APP.root.innerHTML = "";
  }

  page.render(APP, store);

  events.addListeners(APP, store);

  openAdditionalOrderInfo();

  sessionStorage.setItem("page", section);
  if (currentUrn.startsWith("/") && section !== "networkErrors") {
    localStorage.setItem("urn", currentUrn);
  }

  if (section === "suggests") {
    const suggestsSearch = document.getElementById("suggestsSearch");
    if (!suggestsSearch) {
      return;
    }

    const end = suggestsSearch.value.length;

    suggestsSearch.setSelectionRange(end, end);
    suggestsSearch.focus();

    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
      searchButton.classList.add("page-header__button_hidden");
    }
  } else {
    const searchButton = document.getElementById("searchButton");
    if (searchButton) {
      searchButton.classList.remove("page-header__button_hidden");
    }
  }
};

export const renderAndUpdateURN = (urn, storeUpdate = false) => {
  if (!urn) {
    return;
  }

  if (!urn.startsWith("/")) {
    urn = `/${urn}`;
  }

  if (urn !== '/orderHistory') {
    sessionStorage.removeItem('openedAdditionalOrderInfo');
  }


  if (sessionStorage.getItem("page") === "orderHistory") {
    store.actions.clearUpdateTimeout();
  } else {
    sessionStorage.removeItem("");
  }

  if (IsAddressNotCorrect() && NEED_CORRECT_ADDRESS_PAGES.includes(urn)) {
    renderAndUpdateURN("/suggests");
    renderNotification(
      "Для этого действия необходимо выбрать адрес доставки",
      true
    );
    return;
  }

  if (
    urn.substring(0, 7) !== "/dishes" &&
    urn.substring(0, 13) !== "/shoppingCart"
  ) {
    const currOrder = store.getters.cart().order;
    const cachedOrder = store.getters.cachedCartWithDiscounts().cart.order;
    if (
      (!currOrder || !currOrder.length) &&
      cachedOrder &&
      cachedOrder.length
    ) {
      store.actions.insertOldCart();
    }
  }

  if (
    Object.keys(store.getters.appliedPromoCode()).length === 0 &&
    urn === "/shoppingCart" &&
    IsCartEmpty()
  ) {
    return;
  }

  if (urn === "/shoppingCart" && sessionStorage.getItem("root") !== "dishes") {
    history.pushState({}, null, "/dishes/" + getters.getCurrentSlug());
    render("/dishes/" + getters.getCurrentSlug(), false);
    render(urn, true);
    return;
  }

  if (urn !== "/networkErrors") {
    history.pushState({}, null, urn);
  }

  render(urn, storeUpdate);
};

const hideNotification = () => {
  APP.notification
    .getElementsByClassName("notification__close-img")[0]
    .removeEventListener("click", hideNotification);
  APP.notification.classList.remove("active");
};

export const renderNotification = (
  message = "В ходе обработки запроса произошла ошибка",
  error = false
) => {
  if (APP.notification.classList.contains("active")) {
    APP.notification
      .getElementsByClassName("notification__close-img")[0]
      .removeEventListener("click", hideNotification);
  }

  APP.notification.innerHTML = UIKIT.notification(message, error);
  APP.notification
    .getElementsByClassName("notification__close-img")[0]
    .addEventListener("click", hideNotification);

  APP.notification.classList.add("active");

  const timeout = error ? 5000 : 3000;
  setTimeout(() => {
    if (!APP.notification.classList.contains("active")) {
      return;
    }

    APP.notification
      .getElementsByClassName("notification__close-img")[0]
      .removeEventListener("click", hideNotification);

    APP.notification.classList.remove("active");
  }, timeout);
};

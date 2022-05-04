// import * as api from '../api/api.js';
import Event from "./entity/import.js";
import * as FORM from "./common/status-form.js";

const EVENTS = {
  closeImg: Event.getFrameEvents().closeImg,
  buttonOpenClose: Event.getFrameEvents().buttonOpenClose,
  searchButton: Event.getButtonEvents().searchButton,
  avatarUpload: Event.getInputEvents(),
  suggestsSearch: Event.suggests().suggestsSearch,
  suggestsRow: Event.suggests().suggestsRow,

  loginPhone: Event.getPhoneFieldEvents("loginPhone", FORM.statusLoginForm),
  loginButton: Event.getButtonEvents().loginButton,
  logoutButton: Event.getButtonEvents().logoutButton,

  registerPhone: Event.getPhoneFieldEvents(
    "registerPhone",
    FORM.statusRegisterForm
  ),
  registerName: Event.getNameFieldEvents(
    "registerName",
    FORM.statusRegisterForm
  ),
  registerEmail: Event.getEmailFieldEvents(
    "registerEmail",
    FORM.statusRegisterForm
  ),
  registerButton: Event.getButtonEvents().registerButton,

  confirmCode: Event.getConfirmCodeFieldEvents(
    "confirmCode",
    FORM.statusConfirmCodeForm
  ),
  confirmCodeButton: Event.getButtonEvents().confirmCodeButton,
  sendCodeButton: Event.getButtonEvents().sendCodeButton,

  profileName: Event.getNameFieldEvents(
    "profileName",
    FORM.statusPersonInfoForm
  ),
  // profilePhone: Event.getPhoneFieldEvents('profilePhone', FORM.statusPersonInfoForm),
  profileEmail: Event.getEmailFieldEvents(
    "profileEmail",
    FORM.statusPersonInfoForm
  ),
  changeAvatarButton: Event.getButtonEvents().changeAvatarButton,
  personInfoSaveButton: Event.getButtonEvents().personInfoSaveButton,

  addToCart: Event.dishEvents().addToCart,
  incrementDishCount: Event.dishEvents().incrementDishCount,
  decrementDishCount: Event.dishEvents().decrementDishCount,
  orderingComment: Event.dishEvents().orderingComment,
  buttonPay: Event.getButtonEvents().buttonPay,

  categories: Event.categories().category,
  categoriesSelect: Event.categories().categoriesSelect,

  searchInput: Event.search().searchInput
};

/**
 * @function Добавляет листенеры.
 * @param {Object} app - Объект приложения.
 */
export const addListeners = (app, store) => {
  Object.entries(EVENTS).forEach(([name, events]) => {
    const node = document.getElementById(name);
    if (node) {
      events
        .filter(({ selector }) => selector === "id")
        .forEach(({ type, listener }) =>
          node.addEventListener(type, (e) => listener(app, store, e))
        );
    }

    const nodes = document.getElementsByClassName(name);
    if (nodes) {
      events
        .filter(({ selector }) => selector === "class")
        .forEach(({ type, listener }) => {
          Array.from(nodes).forEach((node) =>
            node.addEventListener(type, (e) => listener(app, store, e))
          );
        });
    }
  });
};

/**
 * @function Удаляет все листенеры.
 * @param {Object} app - Объект приложения.
 */
export const removeListeners = (app, store) => {
  Object.entries(EVENTS).forEach(([name, events]) => {
    const node = document.getElementById(name);
    if (node) {
      events
        .filter(({ selector }) => selector === "id")
        .forEach(({ type, listener }) =>
          node.removeEventListener(type, (e) => listener(app, store, e))
        );
    }

    const nodes = document.getElementsByClassName(name);
    if (nodes) {
      events
        .filter(({ selector }) => selector === "class")
        .forEach(({ type, listener }) => {
          Array.from(nodes).forEach((node) =>
            node.removeEventListener(type, (e) => listener(app, store, e))
          );
        });
    }
  });
};

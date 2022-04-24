import * as FORM from "../../common/status-form.js";
import { hideEmptyInputs, showEmptyInputs } from "../../common/status-form.js";
import { renderAndUpdateURN } from "../../../render/render.js";
import { avatar } from "../../../store/store/store";

export const getButtonEvents = () => {
  return {
    loginButton: [
      {
        type: "click",
        selector: "id",
        /**
         * @function Осуществляет проверку статуса формы авторизации (данные о статусах хранятся
         *      в объекте statusLoginForm). Если все поля формы валидны,
         *      то производится отправка данных формы на сервер.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, store, e) {
          if (!FORM.isAvailableForSend(FORM.statusLoginForm)) {
            showEmptyInputs(FORM.statusLoginForm, FORM.loginFormInputs);
            e.stopImmediatePropagation();
            return;
          }

          let phone = document.getElementById("loginPhone").children[0].value;
          sessionStorage.setItem("phone", phone);

          phone = phone.replace("+", "");
          phone = phone.replace("(", "");
          phone = phone.replace(")", "");
          phone = phone.replaceAll("-", "");

          sessionStorage.setItem("logicType", "login");

          store.actions
            .sendCode(phone)
            .then((result) => renderAndUpdateURN("/confirmCode"));
        },
      },
    ],
    confirmCodeButton: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          const logicType = sessionStorage.getItem("logicType");
          sessionStorage.removeItem("logicType");

          let phone = sessionStorage.getItem("phone");
          sessionStorage.removeItem("phone");

          phone = phone.replace("+", "");
          phone = phone.replace("(", "");
          phone = phone.replace(")", "");
          phone = phone.replaceAll("-", "");

          const name = sessionStorage.getItem("name");
          sessionStorage.removeItem("name");

          const email = sessionStorage.getItem("email");
          sessionStorage.removeItem("email");

          const code = document.getElementById("confirmCode").children[0].value;

          if (logicType === "login") {
            store.actions
              .login({ phone, code })
              .then(() => renderAndUpdateURN("/"));
          } else if (logicType === "register") {
            store.actions
              .register({ phone, code, email, name })
              .then(() => renderAndUpdateURN("/"));
          }
        },
      },
    ],
    sendCodeButton: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          let phone = sessionStorage.getItem("phone");

          phone = phone.replace("+", "");
          phone = phone.replace("(", "");
          phone = phone.replace(")", "");
          phone = phone.replaceAll("-", "");

          store.actions
            .sendCode(phone)
            .then((result) => renderAndUpdateURN("/confirmCode"));
        },
      },
    ],
    logoutButton: [
      {
        type: "click",
        selector: "id",
        /**
         * @function Осуществляет отправку запроса на ввыход пользователя из учетной записи.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, store, e) {
          store.actions.logout().then(() => renderAndUpdateURN("/"));
        },
      },
    ],
    registerButton: [
      {
        type: "click",
        selector: "id",
        /**
         * @function Осуществляет проверку статуса формы авторизации (данные о статусах хранятся
         *      в объекте statusRegisterForm). Если все поля формы валидны,
         *      то производится отправка данных формы на сервер.
         * @param {Object} app - Объект приложения.
         * @param {Event} e - Событие.
         */
        listener(app, store, e) {
          if (!FORM.isAvailableForSend(FORM.statusRegisterForm)) {
            showEmptyInputs(FORM.statusRegisterForm, FORM.registerFormInputs);
            e.stopImmediatePropagation();
            return;
          }

          console.log("ALL RIGHT FORM AVAILABLE", FORM.statusRegisterForm);

          let phone =
            document.getElementById("registerPhone").children[0].value;
          const name =
            document.getElementById("registerName").children[0].value;
          const email =
            document.getElementById("registerEmail").children[0].value;

          sessionStorage.setItem("phone", phone);
          sessionStorage.setItem("name", name);
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("logicType", "register");

          phone = phone.replace("+", "");
          phone = phone.replace("(", "");
          phone = phone.replace(")", "");
          phone = phone.replaceAll("-", "");

          store.actions
            .sendCode(phone)
            .then((result) => renderAndUpdateURN("/confirmCode"));
        },
      },
    ],
    changeAvatarButton: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          const input = document.getElementById("avatarUpload");
          input.click();
        },
      },
    ],
    personInfoSaveButton: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          if (!FORM.isAvailableForSend(FORM.statusPersonInfoForm)) {
            showEmptyInputs(FORM.statusPersonInfoForm, FORM.personInfoInputs);
            return;
          }

          const personInfoForm = document.getElementById("person-info-form");
          const input = document.getElementById("avatarUpload");

          let dt = new DataTransfer();
          dt.items.add(avatar);
          input.files = dt.files;

          const obj = new FormData(personInfoForm);
          store.actions.updateUser(obj).then(() => renderAndUpdateURN("/"));
        },
      },
    ],
    buttonPay: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          let phone =
            document.getElementById("orderingPhone").children[0].value;

          phone = phone.replace("+", "");
          phone = phone.replace("(", "");
          phone = phone.replace(")", "");
          phone = phone.replaceAll("-", "");

          let address = localStorage.getItem("address");

          const entrance =
            document.getElementById("orderingEntrance").children[0].value;
          const intercom =
            document.getElementById("orderingIntercom").children[0].value;
          const floor =
            document.getElementById("orderingFloor").children[0].value;
          const flat =
            document.getElementById("orderingFlat").children[0].value;

          address = `${address}, подъезд ${entrance}, домофон ${intercom}, этаж ${floor}, квартира ${flat}`;

          const comment = document.getElementById("orderingComment").innerText;

          const cart = store.getters.cart();

          store.actions.createOrder({ address, comment, cart }).then(() => {
            renderAndUpdateURN("/");
            alert("Заказ успешно создан");
          });
        },
      },
    ],
  };
};

import * as FORM from "../../common/status-form.js";
import { showEmptyInputs } from "../../common/status-form.js";
import {
  renderAndUpdateURN,
  renderNotification,
} from "../../../render/render.js";
import { getSearchStatus } from "../../../store/getters/getters";
import {
  changeSearchStatus,
  clearAppliedPromoCode,
} from "../../../store/actions/actions";
import { confirmCodeError } from "../confirmCode/confirm-code-src";
import { notRegisteredError } from "./button-src";

export const getButtonEvents = () => {
  return {
    loginButton: [
      {
        type: "click",
        selector: "id",
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

          store.actions.sendCode(phone).then((result) => {
            if (!result.registered) {
              notRegisteredError.confirmCodeErrorShow(
                "Номер не зарегистрирован"
              );
              return;
            }

            renderAndUpdateURN("/confirmCode");
          });
        },
      },
    ],
    confirmCodeButton: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          const logicType = sessionStorage.getItem("logicType");

          let phone = sessionStorage.getItem("phone");

          phone = phone.replace("+", "");
          phone = phone.replace("(", "");
          phone = phone.replace(")", "");
          phone = phone.replaceAll("-", "");

          const name = sessionStorage.getItem("name");
          const email = sessionStorage.getItem("email");
          const code = document.getElementById("confirmCode").children[0].value;

          const handleSuccess = () => {
            sessionStorage.removeItem("logicType");
            sessionStorage.removeItem("phone");
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("email");

            const root = sessionStorage.getItem("root") || "main";
            const params = sessionStorage.getItem("params");

            if (params) {
              renderAndUpdateURN(`/${root}/${params}`);
            } else {
              renderAndUpdateURN(root);
            }
          }

          if (logicType === "login") {
            store.actions
              .login({ phone, code })
              .then(handleSuccess)
              .catch(() =>
                confirmCodeError.confirmCodeErrorShow(
                  "Неверный код подтверждения"
                )
              );
          } else if (logicType === "register") {
            store.actions
              .register({ phone, code, email, name })
              .then(handleSuccess)
              .catch(() =>
                confirmCodeError.confirmCodeErrorShow(
                  "Неверный код подтверждения"
                )
              );
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

          store.actions.sendCode(phone).then((result) => {
            renderAndUpdateURN("/confirmCode");
          });
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

          store.actions.sendCode(phone).then((result) => {
            if (result.registered) {
              renderNotification(
                "Пользователь с таким номером уже зарегистрирован",
                true
              );
              return;
            }

            renderAndUpdateURN("/confirmCode");
          });
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
    searchButton: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          store.actions.changeSearchStatus();
          const searchInput = document.getElementById("searchInput");
          searchInput.focus();
        },
      },
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          sessionStorage.setItem("searchButtonClicked", "true");
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
          const avatar = JSON.parse(sessionStorage.getItem("avatar"));
          if (avatar && Object.keys(avatar).length > 0) {
            dt.items.add(avatar);
            input.files = dt.files;
            sessionStorage.removeItem("avatar");
          }

          const obj = new FormData(personInfoForm);
          store.actions.updateUser(obj).then(() => {
            renderAndUpdateURN("/profile");
            renderNotification("Изменения успешно сохранены");
          });
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

          const comment = document.getElementById("orderingComment").value;

          const order = store.getters.cart().order;
          const promocode = store.getters.appliedPromoCode().promocode;

          store.actions
            .createOrder({
              address,
              entrance,
              intercom,
              floor,
              flat,
              comment,
              cart: order,
              promocode,
            })
            .then(() => {
              renderAndUpdateURN("/orderHistory");
              renderNotification("Заказ успешно создан");
            });
          store.actions.clearAppliedPromoCode();
        },
      },
    ],
    createComment: [
      {
        type: "click",
        selector: "id",
        listener(app, store, e) {
          const slug = sessionStorage.getItem("params");
          if (!slug) {
            return;
          }

          const starsBlock = document.getElementById("starsBlock");

          const text = document.getElementById("comment").value;
          const stars = parseInt(starsBlock.dataset.count, 10);
          const orderId = parseInt(sessionStorage.getItem("orderNumber"), 10);

          store.actions.createComment({ slug, text, stars, orderId }).then(() => {
            sessionStorage.removeItem("orderNumber");
            store.actions.clearComments(slug);
            renderAndUpdateURN(`/comments/${slug}`);
            renderNotification("Отзыв успешно создан");
          });
        },
      },
    ],
  };
};

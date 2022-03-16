import * as api from '../api/api.js';
import {Event} from "./entity/import.js";
import * as FORM from './common/status-form.js';

const EVENTS = {
    closeImg: [
        {
            type: 'click',

            /**
             * @function Закрывает форму при нажатии на значок 'x'.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                app.modal.classList.remove('shown');
                app.modal.innerHTML = '';
                app.root.lastChild.classList.remove('hidden');
            }
        }
    ],
    loginPhone: Event.getPhoneFieldEvents('loginPhone'),
    loginPassword: Event.singlePasswordFieldEvents,
    loginButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет проверку статуса формы авторизации (данные о статусах хранятся
             *      в объекте statusLoginForm). Если все поля формы валидны,
             *      то производится отправка данных формы на сервер.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                if (!FORM.isAvailableForSend(FORM.statusLoginForm)) {
                    return;
                }

                const phone = document.getElementById('loginPhone').children[0].value;
                const password = document.getElementById('loginPassword').children[0].value;

                api
                    .login({phone, password})
                    .then((res) => {
                        if (res.status !== 200) {
                            alert('Данные не валидны');
                            return;
                        }

                        const event = new CustomEvent('render-page', {detail: {section: 'main'}})
                        document.dispatchEvent(event);
                    });
            }
        }
    ],
    registerPhone: Event.getPhoneFieldEvents('registerPhone'),
    registerName: Event.nameFieldEvents,
    registerPassword: Event.doublePasswordFieldEvents,
    registerRepeatPassword: Event.doublePasswordFieldEvents,
    registerButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет проверку статуса формы авторизации (данные о статусах хранятся
             *      в объекте statusRegisterForm). Если все поля формы валидны,
             *      то производится отправка данных формы на сервер.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                if (!FORM.isAvailableForSend(FORM.statusRegisterForm)) {
                    return;
                }

                const phone = document.getElementById('registerPhone').children[0].value;
                const name = document.getElementById('registerName').children[0].value;
                const password = document.getElementById('registerPassword').children[0].value;

                api
                    .register({phone, name, password})
                    .then((res) => {
                        if (res.status !== 200) {
                            alert('Данные не валидны');
                            return;
                        }

                        const event = new CustomEvent('render-page', {detail: {section: 'main'}})
                        document.dispatchEvent(event);
                    });
            }
        }
    ],
    logoutButton: [
        {
            type: 'click',
            /**
             * @function Осуществляет отправку запроса на ввыход пользователя из учетной записи.
             * @param {Object} app - Объект приложения.
             * @param {Event} e - Событие.
             */
            listener(app, e) {
                api
                    .logout()
                    .then((res) => {
                        if (res.status !== 200) {
                            alert('Ошибка!');
                            return;
                        }

                        const event = new CustomEvent('render-page', {detail: {section: 'main'}})
                        document.dispatchEvent(event);
                    });
            }
        }
    ]
};

/**
 * @function Добавляет листенеры.
 * @param {Object} app - Объект приложения.
 */
export const addListeners = (app) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({type, listener}) => node.addEventListener(type, (e) => listener(app, e)));
    });
}

/**
 * @function Удаляет все листенеры.
 * @param {Object} app - Объект приложения.
 */
export const removeListeners = (app) => {
    Object.entries(EVENTS).forEach(([name, events]) => {
        const node = document.getElementById(name);
        if (!node) {
            return;
        }
        events.forEach(({type, listener}) => node.removeEventListener(type, (e) => listener(app, e)));
    });
};
